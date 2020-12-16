import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imagesArray, handlerImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {imagesArray.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          imageClick={handlerImageClick}
          largeSrc={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default ImageGallery;
