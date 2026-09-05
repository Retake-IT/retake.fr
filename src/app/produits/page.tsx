import type { Metadata } from "next";
import { Container } from "@/components/Container";
import Products, { Product } from "@/components/products";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

const breadcrumb = breadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Produits", path: "/produits" },
]);

const productsData: Product[] = Products;

export const metadata: Metadata = {
  title: "Nos articles reconditionnés",
  description:
    "Le matériel informatique reconditionné actuellement disponible à la vente chez Retake : ordinateurs, écrans, serveurs et périphériques.",
  alternates: { canonical: "/produits" },
  // Rétabli automatiquement dès qu'il y a du stock (voir plus bas).
  robots:
    !productsData || productsData.length === 0
      ? { index: false, follow: true }
      : undefined,
};

export default function ArticlesPage() {
  if (!productsData || productsData.length === 0) {
    return (
      <Container className="py-12">
        <JsonLd data={breadcrumb} />
        <h1 className="text-3xl font-bold text-center mb-8">
          Plus de stock disponible
        </h1>
        <p className="max-w-xl mx-auto text-center text-gray-500 dark:text-gray-400">
          Aucun article n&apos;est disponible pour le moment. Le stock provient
          des reprises de matériel effectuées auprès des entreprises et est
          renouvelé régulièrement. Écrivez-nous à{" "}
          <a
            href="mailto:contact@retake.fr"
            className="text-[#5a9e2f] underline hover:text-indigo-500"
          >
            contact@retake.fr
          </a>{" "}
          pour être prévenu des prochaines disponibilités.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <JsonLd data={breadcrumb} />
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Nos articles reconditionnés
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg dark:bg-trueGray-800"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
                width={1200}
                height={800}
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 dark:text-grey-200">
                {product.description}
              </p>
              <a
                href={product.url}
                className="text-[#7ed957] hover:text-indigo-500"
              >
                Voir l'article
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}