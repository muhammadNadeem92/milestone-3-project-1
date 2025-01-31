import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h5 className={styles.h5}>
        Muhammad<span className={styles.highlight}> Nadeem</span>
      </h5>

      <div className={styles.footersocialicons}>
        <span className={styles.span}>Follow me on</span>
        
        {/* Icons wrapped properly */}
       
          <FaGithub className={styles.icon} />
          <FaLinkedin className={styles.icon} />
    
      </div>

      <p className={styles.p}>&copy; 2025 | This website is created by Muhammad Nadeem</p>
    </footer>
  );
};

export default Footer;
