import type { FunctionComponent } from 'react';
import ImageCard from './ImageCard';

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
      <ImageCard
        key={index}
        imageSrc={card.imageSrc}
        description={card.description}
        buttonText={card.buttonText}
      />
    ))}
  </div>
);

  

  export default ImageCardList;