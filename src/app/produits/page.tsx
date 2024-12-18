import { Container } from "@/components/Container";

const articles = [
  {
    imageUrl: "https://img.leboncoin.fr/api/v1/lbcpb1/images/02/60/84/026084690ccdb649efa30f07c2228736a8e6f5a7.jpg?rule=classified-1200x800-webp",
    title: "Serveur Workstation HP Z440",
    description: "Serveur / Workstation / Ordinateur de CAO",
    url: "https://www.leboncoin.fr/ad/ordinateurs/2851218069",
  },
  {
    imageUrl: "https://img.leboncoin.fr/api/v1/lbcpb1/images/de/4e/73/de4e73c704bb22a74493b93bd6d07e4a522ab3ae.jpg?rule=classified-1200x800-webp",
    title: "Mini ordinateur Lenovo tiny m72e",
    description: "Mini PC Lenovo tiny ThinkCenter m72e",
    url: "https://www.leboncoin.fr/ad/ordinateurs/2859959432",
  },
  {
    imageUrl: "https://img.leboncoin.fr/api/v1/lbcpb1/images/78/dc/ce/78dcce7f5f4c98298a4446af25bc2b4358ecac5f.jpg?rule=classified-1200x800-webp",
    title: "Imprimante HP LaserJet Pro 400 m401dn",
    description: "Imprimante Laser HP m401dn",
    url: "https://www.leboncoin.fr/ad/accessoires_informatique/2889667257",
  },
];

export default function ArticlesPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Nos Articles</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
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
