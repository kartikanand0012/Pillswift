import image_card_1 from "../../assets/img/image_card_1.jpg";
// import image_card_2 from "../../assets/img/image_card_2.jpg";
// import image_card_3 from "../../assets/img/image_card_3.webp";
// import image_card_4 from "../../assets/img/image_card_4.avif";

interface ImageCardProps {
  imageSrc: string;
  description: string;
  buttonText: string;
}

export const imageCards: ImageCardProps[] = [
  {
    imageSrc: image_card_1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Learn More",
  },
  {
    imageSrc: image_card_1,
    description:
      "Proin ac ultricies metus. Donec placerat purus at eros varius.",
    buttonText: "Discover",
  },
  {
    imageSrc: image_card_1,
    description: "Vivamus lacinia odio vitae vestibulum vestibulum.",
    buttonText: "Explore",
  },
  {
    imageSrc: image_card_1,
    description: "Curabitur tincidunt mollis ante non volutpat.",
    buttonText: "Find Out More",
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
