"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#7ed957]`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Depuis combien de temps Retake existe ?",
    answer: "Retake existe depuis le début de l'année 2024 !",
  },
  {
    question: "Quels types de matériel informatique acceptez-vous ?",
    answer: "Nous rachetons une large gamme d’équipements, incluant ordinateurs, serveurs, périphériques et autres matériels IT inutilisés.",
  },
  {
    question: "Nos données sont-elles protégées ?",
    answer:
      "Oui ! Retake s'engage à effacer vos données en suivant les recommandations de l'ANSII et vous envoie les rapports d'effacement sur demande.",
  },
  {
    question: "Que se passe-t-il si mon matériel est trop vieux ou irréparable ?",
    answer:
      "Si un équipement ne peut pas être revalorisé, nous nous assurons qu’il soit recyclé dans des centres agréés, conformément aux réglementations en vigueur.",
  },
];
