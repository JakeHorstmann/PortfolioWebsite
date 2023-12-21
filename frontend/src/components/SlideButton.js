const SlideButton = (props) => {
  const symbol = props.symbol;
  const onClickEvent = props.onClickEvent;

  return (
    <div className="slideButton">
      <p onClick={() => onClickEvent()}>{symbol}</p>
    </div>
  );
};

export default SlideButton;
