import { ImagesType } from "../types/global";

type Props = {
  data: ImagesType[];
};

const GalleryRow = ({ data }: Props) => {
  return (
    <div className="gallery-row">
      {data.map((image) => {
        return (
          <img
            key={image.image}
            src={image.image}
            alt="Image"
            className="gallery-row__image"
          />
        );
      })}
    </div>
  );
};

export default GalleryRow;
