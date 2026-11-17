import logo from './../../assets/images/atom-logo.webp';
import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
      <nav className={styles.headerNav}>
        <div className={styles.navLi}>Premium Domains</div>
        <div className={styles.navLi}>Register Domains</div>
        <div className={styles.navLi}>Naming & Branding</div>
        <div className={styles.navLi}>Partners</div>
        <div className={styles.navLi}>About</div>
      </nav>

      <div className={styles.iconContainer}>
        <i class='fa-regular fa-user'></i>
        <i class='fa-solid fa-headphones'></i>
        <i class='fa-regular fa-heart'></i>
      </div>
    </header>
  );
}

export default Header;
