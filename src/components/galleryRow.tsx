import { useState } from "react";
import { ImagesType } from "../types/global";

type Props = {
  data: ImagesType[];
};

const GalleryRow = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState<ImagesType | null>(null);

  const handleActiveItem = (image: ImagesType) => {
    setActiveItem(image);
  };

  return (
    <>
      <div className="gallery-row">
        {data.map((image) => {
          return (
            <img
              onClick={() => handleActiveItem(image)}
              key={image.image}
              src={image.image}
              alt="Image"
              className="gallery-row__image"
            />
          );
        })}
      </div>
      {activeItem && (
        <>
          <div
            className="modal"
            style={{ backgroundImage: `url(${activeItem.image})` }}
          >
            <div className="modal__close" onClick={() => setActiveItem(null)}>
              X
            </div>

            {/* <img src={activeItem.image} alt="Image" /> */}
          </div>
          <div className="overlay" onClick={() => setActiveItem(null)}></div>
        </>
      )}
    </>
  );
};

export default GalleryRow;
