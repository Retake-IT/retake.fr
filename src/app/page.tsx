import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";

import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        title="Pourquoi choisir Retake ?"
      >
        Chez Retake, nous cherchons à donner une seconde vie à votre matériel informatique en suivant une démarche transparente, sans prise de tête et tournée vers un impact durable,
        bénéfique pour tous : vous, les particuliers, les associations et la planète.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="FAQ" title="Foire aux questions">
        Parce qu'on se pose tous des questions !
      </SectionTitle>

      <Faq />
    </Container>
  );
}
