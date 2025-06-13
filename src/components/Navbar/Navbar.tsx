import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import StarBorder from '../StarBorder/StarBorder';
import Logo from '../../assets/brand.svg';
import Bars from '../../assets/bars.svg';

const dropdownItems: Record<string, string[]> = {
  about: ['Our Impact', 'Our Journey', 'Core Values', 'Awards and Recognition'],
  services: ['SEO & Analytics', 'Use Cases', 'Our other services'],
  'use-cases': ['All success stories', 'Testimonials'],
  pricing: ['FAQs'],
  blog: ['Explore more insights'],
};

const labels: Record<string, string> = {
  about: 'About us',
  services: 'Services',
  'use-cases': 'Use Cases',
  pricing: 'Pricing',
  blog: 'Blog',
};

const Navbar = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveId(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveId(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.container}>
        <img src={Logo} alt="logo" className={styles.logo} />

        <button className={styles.menuToggle} onClick={toggleMenu}>
          <img src={Bars} alt="menu" />
        </button>

        <ul className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
          {Object.keys(dropdownItems).map((id) => (
            <li
              key={id}
              className={styles.menuItem}
              onClick={() => handleClick(id)}
            >
              <StarBorder as="div" className="custom-class" color="cyan" speed="5s">
                <Link to={`/${id}`}>{labels[id]}</Link>
              </StarBorder>

              {activeId === id && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                    {dropdownItems[id].map((label, index) => (
                      <Link
                        key={index}
                        to={`/${id}`} 
                        className={styles.dropdownItem}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <button className={styles.quoteButton}>Request a quote</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
