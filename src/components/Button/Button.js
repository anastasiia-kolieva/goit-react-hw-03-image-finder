import s from './Button.module.css';

const Button = ({ onClickHandle }) => {
  return (
    <div className={s.buttonWrapper}>
      <button type="button" onClick={onClickHandle} className={s.Button}>
        Load More
      </button>
    </div>
  );
};

export default Button;
