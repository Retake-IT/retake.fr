import {
  InboxArrowDownIcon,
  ArrowPathIcon,
  BanknotesIcon,
  ArrowPathRoundedSquareIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/building.png";
import benefitTwoImg from "../../public/img/house.png";

const benefitOne = {
  title: "Notre mission",
  desc: "Un processus rapide pour vous simplifier la vie, valoriser votre matériel et agir pour la planète",
  image: benefitOneImg,
  bullets: [
    {
      title: "Faciliter",
      desc: "On s'occupe de tout : estimation, reprise et logistique simplifiées.",
      icon: <InboxArrowDownIcon />,
    },
    {
      title: "Revaloriser",
      desc: "Votre matériel trouve une seconde vie utile et durable.",
      icon: <ArrowPathRoundedSquareIcon />,
    },
    {
      title: "Rentabiliser",
      desc: "Réduisez vos coûts en réinvestissant dans votre futur parc informatique.",
      icon: <BanknotesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Notre vision",
  desc: "Un monde où chaque équipement trouve une seconde vie.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Un cercle vertueux",
      desc: "Nous croyons en une économie où rien ne se perd et tout se transforme.",
      icon: <ArrowPathIcon />,
    },
    {
      title: "L'inclusion technologique",
      desc: "Permettre à chacun, associations comme particuliers, d’accéder à des outils essentiels.",
      icon: <GlobeAltIcon />,
    },
    {
      title: "L'innovation durable",
      desc: "Imaginer des moyens toujours plus simples et efficaces de prolonger la vie des équipements.",
      icon: <CogIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
