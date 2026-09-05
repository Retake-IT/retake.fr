import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-bold tracking-wider text-[#3f7d1f] dark:text-[#7ed957] uppercase">
        Erreur 404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-800 dark:text-white">
        Cette page n&apos;existe pas
      </h1>
      <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
        Le lien est peut-être erroné ou la page a été déplacée.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <Link
          href="/"
          className="px-6 py-3 text-white bg-[#3f7d1f] rounded-md hover:bg-[#33661a]"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/produits"
          className="px-6 py-3 text-gray-700 border border-gray-300 rounded-md dark:text-gray-200 dark:border-trueGray-700 hover:border-gray-400"
        >
          Voir les produits
        </Link>
      </div>
    </Container>
  );
}
