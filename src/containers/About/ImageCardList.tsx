import type { FunctionComponent } from "react";
import ImageCard from "./ImageCard";

interface ImageCardProps {
  imageSrc: string;
}

interface ImageCardListProps {
  cards: ImageCardProps[];
}

const ImageCardList: FunctionComponent<ImageCardListProps> = ({ cards }) => (
  <div className="image-card-list-no-button">
    {cards.map((card, index) => (
      <ImageCard
        key={index}
        imageSrc={card.imageSrc}
      />
    ))}
  </div>
);

export default ImageCardList;
