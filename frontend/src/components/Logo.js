import logo from "../images/logo.jpg";
import "../styles/Logo.css";

const Logo = (props) => {
  return (
    <div className="logoBox">
      <img src={logo} alt={props.logo_alt} />
    </div>
  );
};

export default Logo;
