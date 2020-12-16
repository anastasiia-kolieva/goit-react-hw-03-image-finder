import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, imageClick, largeSrc }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={src}
        alt={alt}
        data-url={largeSrc}
        onClick={imageClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
