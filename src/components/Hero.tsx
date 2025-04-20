import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/nature.png";
import usocomeLogo from "../../public/img/usocome-logo.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Bienvenue chez Retake
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nous simplifions la gestion de votre matériel informatique inutilisé, tout en offrant des solutions abordables pour les particuliers et les associations.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#benefits"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#7ed957] rounded-md ">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img src="/img/nature.png" width="616" height="617" alt="Hero Illustration" loading="eager"></img>
            {/* <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            <h2 className=" font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Ils nous font confiance</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Link href={"https://www.usocome.com/"}>
                <Image className="object-contain h-48 w-96" src={usocomeLogo} alt="Usocome Logo"></Image>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}