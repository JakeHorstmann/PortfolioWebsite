const Logo = (img) => {
  return (
    <div className="logoBox">
      <img src={img.link} alt={img.alt}>
        {""}
      </img>
    </div>
  );
};

export default Logo;
