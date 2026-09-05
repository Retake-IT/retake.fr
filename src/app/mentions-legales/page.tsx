import type { Metadata } from "next";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Mentions légales | Retake",
  description:
    "Mentions légales du site retake.fr : éditeur, directeur de publication et hébergeur.",
  alternates: { canonical: "https://retake.fr/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <Prose title="Mentions légales" updatedAt="6 septembre 2026" slug="mentions-legales">
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l&apos;économie numérique, il est précisé aux
        utilisateurs du site Retake l&apos;identité des différents intervenants
        dans le cadre de sa réalisation et de son suivi.
      </p>

      <h2>Édition du site</h2>
      <p>
        Le présent site, accessible à l&apos;URL{" "}
        <a href="https://retake.fr">https://retake.fr</a> (le «&nbsp;Site&nbsp;»),
        est édité par&nbsp;:
      </p>
      <p>
        Léo Nonnenmacher, entrepreneur individuel exerçant sous le nom
        commercial «&nbsp;Retake&nbsp;», demeurant 8&nbsp;rue de la Fonderie,
        67000&nbsp;Strasbourg, de nationalité française, immatriculé au R.C.S. de
        Strasbourg sous le numéro 984&nbsp;971&nbsp;499. Capital&nbsp;:
        0&nbsp;euro.
      </p>

      <h2>Directeur de la publication</h2>
      <p>Le directeur de la publication du Site est Léo Nonnenmacher.</p>

      <h2>Hébergement</h2>
      <p>
        Le Site est hébergé par{" "}
        <strong>GitHub,&nbsp;Inc.</strong> (GitHub Pages), 88&nbsp;Colin
        P.&nbsp;Kelly Jr. Street, San&nbsp;Francisco, CA&nbsp;94107,
        États-Unis&nbsp;— <a href="https://github.com">github.com</a>,
        téléphone&nbsp;: +1&nbsp;877&nbsp;448&nbsp;4820.
      </p>

      <h2>Nous contacter</h2>
      <address>
        Par téléphone&nbsp;: +33&nbsp;6&nbsp;11&nbsp;03&nbsp;60&nbsp;02
        <br />
        Par e-mail&nbsp;:{" "}
        <a href="mailto:contact@retake.fr">contact@retake.fr</a>
        <br />
        Par courrier&nbsp;: 8&nbsp;rue de la Fonderie, 67000&nbsp;Strasbourg
      </address>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus (textes, images, logo, code) présents sur le
        Site est, sauf mention contraire, la propriété de l&apos;éditeur ou de
        ses partenaires et est protégé par le droit de la propriété
        intellectuelle. Toute reproduction ou représentation, totale ou
        partielle, sans autorisation préalable est interdite. Les illustrations
        proviennent de Vecteezy et anyRGB.
      </p>
    </Prose>
  );
}
