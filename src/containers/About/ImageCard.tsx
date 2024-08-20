import type { FunctionComponent } from "react";
interface ImageCardProps {
  imageSrc: string;
}

const ImageCard: FunctionComponent<ImageCardProps> = ({
  imageSrc,
}) => (
  <div className="image-card-no-button">
    <img src={imageSrc} alt="Card Image" className="image" />
  </div>
);

export default ImageCard;
