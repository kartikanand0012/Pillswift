import type { FunctionComponent } from "react";
interface ImageCardProps {
  imageSrc: string;
  description: string;
  buttonText: string;
}

const ImageCardButton: FunctionComponent<ImageCardProps> = ({
  imageSrc,
  description,
  buttonText,
}) => (
  <div className="image-card">
    <img src={imageSrc} alt="Card Image" className="image" />
    <div className="content">
      <p>{description}</p>
      <button className="action-button">
        {buttonText} <span className="arrow">→</span>
      </button>
    </div>
  </div>
);

export default ImageCardButton;
