import cards1 from "../../assets/img/cards1.jpg";
import cards2 from "../../assets/img/cards2.jpg";
import cards3 from "../../assets/img/cards3.jpg";
import pillswiftImages1 from "../../assets/img/pillswiftImages1.jpg";
import pillswiftImages2 from "../../assets/img/pillswiftImages2.jpg";
import pillswiftImages3 from "../../assets/img/pillswiftImages3.jpg";
import pillswiftImages4 from "../../assets/img/pillswiftImages4.jpg";
import pillswiftImages5 from "../../assets/img/pillswiftImages5.jpg";
import pillswiftImages6 from "../../assets/img/pillswiftImages6.jpg";
import pillswiftImages7 from "../../assets/img/pillswiftImages7.jpg";


import image_card_1 from "../../assets/img/cards4.jpg";


interface ImageCardProps {
  imageSrc: string;
  description: string;
  buttonText: string;
}
interface ImageCardAboutProps {
  imageSrc: string;
}

export const imageCards: ImageCardProps[] = [
  {
    imageSrc: pillswiftImages1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Learn More",
  },
  {
    imageSrc: pillswiftImages5,
    description:
      "Proin ac ultricies metus. Donec placerat purus at eros varius.",
    buttonText: "Discover",
  },
  {
    imageSrc: pillswiftImages3,
    description: "Vivamus lacinia odio vitae vestibulum vestibulum.",
    buttonText: "Explore",
  },
  {
    imageSrc: pillswiftImages4,
    description: "Curabitur tincidunt mollis ante non volutpat.",
    buttonText: "Find Out More",
  },
];

export const imageCardsAbout: ImageCardAboutProps[] = [
  {
    imageSrc: pillswiftImages7,
  },
  {
    imageSrc: pillswiftImages6,
  },
  {
    imageSrc: pillswiftImages2,
  },
];

export const LOREM_IPSUM_TEXT = `
  Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri
  id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo,
  ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique
  mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id
  ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad,
  tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque.
  Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu
  per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix.
  Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex.
`;
