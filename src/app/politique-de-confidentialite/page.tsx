import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Retake",
  description:
    "Comment Retake collecte et traite les données personnelles via le site retake.fr : formulaire de contact, mesure d'audience et droits des personnes.",
  alternates: { canonical: "https://retake.fr/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Prose
      title="Politique de confidentialité"
      updatedAt="6 septembre 2026"
      slug="politique-de-confidentialite"
    >
      <p>
        La présente politique décrit la manière dont les données à caractère
        personnel sont traitées lors de l&apos;utilisation du site{" "}
        <a href="https://retake.fr">retake.fr</a>. Elle complète les{" "}
        <a href="/mentions-legales">mentions légales</a> et les{" "}
        <a href="/cgv">conditions générales de vente</a>.
      </p>

      <h2>Responsable de traitement</h2>
      <address>
        Léo Nonnenmacher — Retake (entrepreneur individuel)
        <br />
        8&nbsp;rue de la Fonderie, 67000&nbsp;Strasbourg — R.C.S. Strasbourg
        984&nbsp;971&nbsp;499
        <br />
        E-mail&nbsp;: <a href="mailto:contact@retake.fr">contact@retake.fr</a>
      </address>

      <h2>Formulaire de contact</h2>
      <p>
        Lorsque vous utilisez le formulaire de contact, les données que vous
        renseignez (nom ou raison sociale, adresse e-mail, contenu du message)
        sont traitées dans le seul but de répondre à votre demande.
      </p>
      <ul>
        <li>
          <strong>Base légale&nbsp;:</strong> intérêt légitime du responsable de
          traitement à répondre aux sollicitations qui lui sont adressées.
        </li>
        <li>
          <strong>Destinataire / sous-traitant&nbsp;:</strong> l&apos;envoi du
          formulaire est assuré par le service <em>Web3Forms</em> (Nexivo Solutions&nbsp;LLP), qui
          transmet le message par e-mail et peut le stocker temporairement sur
          ses serveurs. Ce traitement peut impliquer un transfert de données en
          dehors de l&apos;Union européenne, encadré par les clauses
          contractuelles types de la Commission européenne.
        </li>
        <li>
          <strong>Durée de conservation&nbsp;:</strong> les échanges sont
          conservés jusqu&apos;à 12&nbsp;mois après le dernier contact, puis
          supprimés.
        </li>
      </ul>

      <h2>Mesure d&apos;audience</h2>
      <p>
        Le site utilise <em>Umami</em> (Umami Software,&nbsp;Inc.) pour mesurer
        sa fréquentation. Cet outil&nbsp;:
      </p>
      <ul>
        <li>
          ne dépose <strong>aucun cookie</strong> et n&apos;utilise pas
          d&apos;identifiant publicitaire&nbsp;;
        </li>
        <li>
          ne collecte pas de donnée directement identifiante&nbsp;; les
          statistiques sont agrégées (pages vues, provenance, type
          d&apos;appareil, pays)&nbsp;;
        </li>
        <li>
          sert exclusivement à établir des statistiques anonymes pour
          l&apos;éditeur du site, sans recoupement avec d&apos;autres
          traitements ni transmission à des tiers.
        </li>
      </ul>
      <p>
        À ce titre, cette mesure d&apos;audience est dispensée du recueil de
        votre consentement, conformément aux lignes directrices de la CNIL. Les
        serveurs d&apos;Umami sont situés dans l&apos;Union européenne et aux
        États-Unis&nbsp;; les éventuels transferts sont encadrés par les clauses
        contractuelles types. Les données sont conservées pendant une durée
        maximale de 24&nbsp;mois.
      </p>

      <h2>Cookies</h2>
      <p>
        Le site ne dépose aucun cookie de suivi ou publicitaire. Seul un
        stockage technique local peut être utilisé pour mémoriser votre
        préférence de thème clair/sombre&nbsp;; il n&apos;est pas soumis à
        consentement.
      </p>

      <h2>Vente de matériel</h2>
      <p>
        Les traitements liés à une commande (identité, livraison, paiement,
        garanties) sont décrits à l&apos;article&nbsp;9 des{" "}
        <a href="/cgv">conditions générales de vente</a>.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement, de limitation, d&apos;opposition et de portabilité
        concernant vos données. Vous pouvez exercer ces droits en écrivant à{" "}
        <a href="mailto:contact@retake.fr">contact@retake.fr</a>. Une réponse
        vous sera apportée dans un délai maximum d&apos;un mois.
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de la
        Commission nationale de l&apos;informatique et des libertés
        (CNIL)&nbsp;: 3&nbsp;place de Fontenoy, TSA&nbsp;80715,
        75334&nbsp;Paris Cedex&nbsp;07 —{" "}
        <a href="https://www.cnil.fr">www.cnil.fr</a>.
      </p>
    </Prose>
  );
}
