import { Container } from "@/components/Container";
import Products from "@/components/products";

export default function ArticlesPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Nos Articles</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Products.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg dark:bg-trueGray-800">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">{article.title}</h2>
              <p className="text-gray-600 mb-4 dark:text-grey-200">{article.description}</p>
              <a
                href={article.url}
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
