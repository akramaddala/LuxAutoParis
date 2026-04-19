export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light text-white mb-8 tracking-wide">Politique de Confidentialité</h1>
        <div className="space-y-8 text-neutral-400 font-light leading-relaxed">
          <section>
            <h2 className="text-xl text-white mb-4">1. Collecte des Données Personnelles</h2>
            <p>
              SERVICESLUX LLC collecte et traite les données personnelles que vous nous fournissez
              volontairement lorsque vous utilisez notre formulaire de contact ou effectuez une
              réservation. Les données collectées incluent généralement : nom, adresse email, numéro
              de téléphone, et toute information que vous choisissez de partager dans votre message.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">2. Utilisation des Données</h2>
            <p>
              Les informations recueillies sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Traiter et gérer vos demandes de réservation.</li>
              <li>Communiquer avec vous concernant nos services.</li>
              <li>Améliorer l'expérience utilisateur et nos offres.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">3. Partage des Données</h2>
            <p>
              Nous nous engageons à ne jamaise vendre, louer ou échanger vos données personnelles avec
              des tiers à des fins commerciales. Vos données peuvent uniquement être partagées avec nos
              prestataires de services techniques stricts (hébergement web, gestion de messagerie) qui
              sont également tenus au respect des règles de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">4. Sécurité</h2>
            <p>
              La sécurité de vos données est une priorité. Nous mettons en œuvre des mesures
              techniques et organisationnelles appropriées (par exemple, des connexions chiffrées SSL,
              des bases de données sécurisées) pour protéger vos données contre toute perte,
              utilisation abusive, accès non autorisé ou altération.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">5. Vos Droits (Conformité RGPD)</h2>
            <p>
              En accord avec les lois en vigueur, vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation et d'opposition au traitement de vos données. Pour exercer
              ces droits, vous pouvez nous contacter à l'adresse suivante : 
              <br />
              <strong className="text-white mt-1 inline-block">jounaidi.by@hotmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-4">6. Cookies</h2>
            <p>
              Notre site web utilise des cookies ("traceurs") indispensables pour assurer
              le bon fonctionnement du site (navigation, statistiques anonymisées). Vous pouvez
              modifier les paramètres de votre navigateur pour refuser les cookies si vous le
              souhaitez.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
