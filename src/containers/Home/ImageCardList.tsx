import type { FunctionComponent } from "react";
import ImageCardButton from "./ImageCardButton";

interface ImageCardProps {
  imageSrc: string;
  description: string;
  buttonText: string;
}

interface ImageCardListProps {
  cards: ImageCardProps[];
}

const ImageCardList: FunctionComponent<ImageCardListProps> = ({ cards }) => (
  <div className="image-card-list">
    {cards.map((card, index) => (
      <ImageCardButton
        key={index}
        imageSrc={card.imageSrc}
        description={card.description}
        buttonText={card.buttonText}
      />
    ))}
  </div>
);

export default ImageCardList;
