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
        Chez Retake, nous cherchons à donner une seconde vie à votre matériel informatique en suivant une démarche transparente, sans prise de tête et tournée vers un impact durable,
        bénéfique pour tous : vous, les particuliers, les associations et la planète.
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
