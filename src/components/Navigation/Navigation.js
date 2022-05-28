import "./Navigation.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Navigation(props) {
  return (
    <nav className="nav">
      <a className="logo" href="/">
        <img className="logo__image" src={Logo} alt="Brainflix Logo" />
      </a>

      <form className="nav__form">
        <div className="nav__container">
          <input
            className="nav__input"
            type="text"
            placeholder="Search"
          ></input>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
        <button className="button" href="/">
          UPLOAD
        </button>
        <img src={avatar} alt="Avatar" className="avatar avatar--tablet" />
      </form>
    </nav>
  );
}

export default Navigation;
