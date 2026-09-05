import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";

import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/structured-data";
import { faqdata } from "@/components/faq-data";

import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <Container>
      <JsonLd data={faqPageSchema(faqdata)} />
      <Hero />
      <SectionTitle
        id="benefits"
        title="Pourquoi choisir Retake ?"
      >
        Retake est une entreprise individuelle basée à Strasbourg, créée en 2024. Nous rachetons le matériel informatique inutilisé des entreprises — ordinateurs, écrans, serveurs, périphériques — effaçons les données selon les recommandations de l&apos;ANSSI, reconditionnons les équipements et les revendons à prix accessible aux particuliers et aux associations. Le matériel non réparable est orienté vers des filières de recyclage agréées.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle id="faq" preTitle="FAQ" title="Foire aux questions">
        Parce qu'on se pose tous des questions !
      </SectionTitle>

      <Faq />
    </Container>
  );
}
