'use client';

import {useTranslations} from 'next-intl';
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';

const FRAME_COUNT = 192;

export function HeroSection() {
  const t = useTranslations('Hero');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);

  // Measure the scroll progress over the 400vh tall parent container
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map 0 -> 1 progress to frame indices 1 -> 192
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);
  
  // Custom transform to fade out hero text seamlessly in the first 15% of the scroll down
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const slideUpY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Main Image Preloading Array Factory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
        // globalThis.Image solves next/image interference in client SSR
      const img = new globalThis.Image();
      const paddedIndex = i.toString().padStart(5, '0');
      // The space in the Next backend path needs to be properly escaped or targeted
      img.src = `/scene-sequence/${paddedIndex}.jpg`;
      loadedImages[i] = img;
    }

    // Await strictly the first frame load to gracefully drop the Preloader screen
    loadedImages[1].onload = () => {
      setImages(loadedImages);
      setIsFirstFrameLoaded(true);
      drawFrame(1, loadedImages);
    };
    
    // Fallback: If cached natively without triggering onload event loop natively
    if (loadedImages[1].complete && loadedImages[1].naturalWidth !== 0) {
      setImages(loadedImages);
      setIsFirstFrameLoaded(true);
      drawFrame(1, loadedImages);
    }
    
    return () => { setImages([]); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Central Draw Function handling dynamic resolution to keep crisp Object-Cover rendering
  const drawFrame = (index: number, imgs: HTMLImageElement[] = images) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgs[index] || !imgs[index].complete) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgs[index];
    const renderWidth = canvas.clientWidth;
    const renderHeight = canvas.clientHeight;

    if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
      canvas.width = renderWidth;
      canvas.height = renderHeight;
    }

    const imgRatio = img.width / img.height;
    const canvasRatio = renderWidth / renderHeight;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = renderHeight;
      drawWidth = img.width * (renderHeight / img.height);
      offsetX = (renderWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = renderWidth;
      drawHeight = img.height * (renderWidth / img.width);
      offsetX = 0;
      offsetY = (renderHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, renderWidth, renderHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Re-paint if user dynamically resizes the native browser window while sticky
  useEffect(() => {
    const handleResize = () => {
      if (isFirstFrameLoaded && images.length > 0) {
        const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.round(frameIndex.get())));
        drawFrame(currentFrame, images);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFirstFrameLoaded, images, frameIndex]);

  // Hook Framer Motion Scrub directly to manual Canvas paint pipeline
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isFirstFrameLoaded) {
      const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.round(latest)));
      requestAnimationFrame(() => drawFrame(currentFrame));
    }
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#050505]">
      {/* Sticky boundary that pins exclusively to viewport frames without skipping content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Render Canvas */}
        <canvas 
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${isFirstFrameLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Minimalist Preloader Screen */}
        {!isFirstFrameLoaded && (
          <div className="absolute inset-0 z-10 bg-[#050505] flex items-center justify-center pointer-events-none">
            <span className="text-gold tracking-[0.3em] text-sm uppercase animate-pulse">Initialisation...</span>
          </div>
        )}

        {/* Dynamic Dark Gradient mapped strictly underneath the fading text bounds */}
        <motion.div 
          style={{opacity: fadeOutOpacity}}
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" 
        />

        {/* High Order Content Wrapper mapped tightly to opacity/transform scrubs */}
        <motion.div 
          style={{opacity: fadeOutOpacity, y: slideUpY}}
          className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20 pointer-events-none"
        >
          <motion.h1 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter text-white drop-shadow-2xl whitespace-pre-line leading-tight"
          >
            {t('title')}
          </motion.h1>
          
          <motion.p 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.6, ease: "easeOut"}}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-neutral-300 font-light drop-shadow-md leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
          
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1, ease: "easeOut"}}
            className="pointer-events-auto"
          >
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-10 py-5 bg-gold text-black font-semibold uppercase tracking-[0.2em] rounded-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
              <span className="relative z-10">{t('cta')}</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/20" />
            </button>
          </motion.div>
        </motion.div>

        {/* Interactive Scrub Scroll Indicator bounds */}
        <motion.div 
          style={{opacity: fadeOutOpacity}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 2}}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
          <motion.div 
            animate={{y: [0, 10, 0]}}
            transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
            className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
