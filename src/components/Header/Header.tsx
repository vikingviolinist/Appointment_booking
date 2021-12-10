import dog from './images/dog.svg';
import cat from './images/cat.svg';
import styles from './Header.module.css';

const Header = () => (
  <h1 className={styles.header}>
    <img src={dog} alt="dog" />
    Schedule an appointment
    <img src={cat} alt="cat" />
  </h1>
);

export default Header;
