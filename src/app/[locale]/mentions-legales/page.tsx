import {useTranslations} from 'next-intl';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light text-white mb-8 tracking-wide">Mentions Légales</h1>
        <div className="space-y-8 text-neutral-400 font-light leading-relaxed">
          <section>
            <h2 className="text-xl text-white mb-4">1. Éditeur du Site</h2>
            <p>Le site SERVICESLUXLLC est édité par la société SERVICESLUX LLC.</p>
            <p className="mt-2">
              Adresse : 30 N GOULD ST STE N<br />
              SHERIDAN, WY 82801<br />
              Email : jounaidi.by@hotmail.com<br />
              Téléphone : +33 (0)1 23 45 67 89
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">2. Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc.<br />
            340 S Lemon Ave #4133<br />Walnut, CA 91789, USA.</p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">3. Propriété Intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, structure, éléments graphiques)
              est la propriété exclusive de SERVICESLUX LLC. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du site, quel
              que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
              préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">4. Limitation de Responsabilité</h2>
            <p>
              SERVICESLUX LLC s'efforce de fournir sur son site des informations aussi précises que
              possible. Toutefois, elle ne pourra être tenue responsable des omissions, des
              inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du
              fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
