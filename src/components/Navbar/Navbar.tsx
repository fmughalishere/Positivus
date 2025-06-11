import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import StarBorder from '../StarBorder/StarBorder';
import Logo from '../../assets/brand.svg';

const dropdownItems: Record<string, string[]> = {
  about: ['Our Story', 'The Team', 'Careers', 'Partners'],
  services: [
    'Brand Strategy',
    'Web Design',
    'UI/UX Design',
    'Content Creation',
    'SEO & Analytics',
    'Marketing Campaigns'
  ],
  'use-cases': [
    'Startups & Entrepreneurs',
    'Small Businesses',
    'Creative Agencies',
    'E-commerce Brands'
  ],
  pricing: ['Startup Plan', 'Growth Plan', 'Custom Solutions'],
  blog: ['Insights & Tips', 'Case Studies', 'Industry Trends']
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
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveId(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
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
                      <a key={index} href="#" className={styles.dropdownItem}>
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
