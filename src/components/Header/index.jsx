import logo from './../../assets/images/atom-logo.webp';

function Header () {
  return (
    <header>
      <img src={logo} />
      <nav>
        <div>Premium Domains</div>
        <div>Register Domains</div>
        <div>Naming & Branding</div>
        <div>Partners</div>
        <div>About</div>
      </nav>

      <div>
        <i class='fa-regular fa-user'></i>
        <i class='fa-solid fa-headphones'></i>
        <i class='fa-regular fa-heart'></i>
      </div>
    </header>
  );
}

export default Header;
