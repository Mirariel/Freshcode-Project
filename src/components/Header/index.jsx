import { Link } from 'react-router-dom';

import logo from './../../assets/images/atom-logo.webp';
import styles from './Header.module.sass';
import { connect } from 'react-redux';

function Header ({user}) {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logo} className={styles.logo} />
      </Link>

      <nav className={styles.headerNav}>
        <div className={styles.navLi}>Premium Domains</div>
        <div className={styles.navLi}>Register Domains</div>
        <div className={styles.navLi}>Naming & Branding</div>
        <div className={styles.navLi}>Partners</div>
        <div className={styles.navLi}>About</div>
      </nav>

      <div className={styles.iconContainer}>
        {user ? (
          <div>
            Hi, {user.firstName} {user.lastName}
          </div>
        ) : (
          <Link to='/login'>
            <i className='fa-regular fa-user'></i>
          </Link>
        )}
        <i class='fa-solid fa-headphones'></i>
        <i class='fa-regular fa-heart'></i>
      </div>
    </header>
  );
}

const mapStateToProps = ({ user }) => ({ user: user.user });

export default connect(mapStateToProps)(Header);
