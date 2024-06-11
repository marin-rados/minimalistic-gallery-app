import {
  imagesFirstRow,
  imagesFourthRow,
  imagesSecondRow,
  imagesThirdRow,
} from "../data/images";
import GalleryRow from "./galleryRow";

const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryRow data={imagesFirstRow} />
      <GalleryRow data={imagesSecondRow} />
      <GalleryRow data={imagesThirdRow} />
      <GalleryRow data={imagesFourthRow} />
    </div>
  );
};

export default Gallery;
