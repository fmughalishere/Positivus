import styles from './Navbar.module.css';
import Logo from '../../assets/brand.svg'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
       <img src={Logo} alt="logo" />
        <ul className={styles.menu}>
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <button className={styles.quoteButton}>Request a quote</button>
      </div>
    </nav>
  );
};
export default Navbar;