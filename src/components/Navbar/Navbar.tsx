import { useState } from 'react';
import styles from './Navbar.module.css';
import StarBorder from '../StarBorder/StarBorder';
import Logo from '../../assets/brand.svg';

const dropdownItems: Record<string, string[]> = {
  about: ['Our Mission', 'Our Team', 'Careers'],
  services: ['Brand Stra', 'UI/UX Design', 'Digital Mark', 'SEO Opt'],
  'use-cases': ['For Individuals', 'For Salons', 'For Retailers'],
  pricing: ['Basic Plan', 'Pro Plan', 'Enterprise'],
  blog: ['Latest Posts', 'Tutorials', 'Product Reviews'],
};

const labels: Record<string, string> = {
  about: 'About us',
  services: 'Services',
  'use-cases': 'Use Cases',
  pricing: 'Pricing',
  blog: 'Blog'
};

const Navbar = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img src={Logo} alt="logo" />
        <ul className={styles.menu}>
          {Object.keys(dropdownItems).map((id) => (
            <li
              key={id}
              className={styles.menuItem}
              onClick={() => handleClick(id)}
            >
              <StarBorder as="div" className="custom-class" color="cyan" speed="5s">
                <a href={`#${id}`}>{labels[id]}</a>
              </StarBorder>

              {activeId === id && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownMenu}>
                    {dropdownItems[id].map((label, index) => (
                      <a key={index} href="#" className="dropdown-item">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <button className={styles.quoteButton}>Request a quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
