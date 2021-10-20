import "./item.scss";
import { useState } from "react";

const Item = ({ obj }) => {
  const [name, currency, value] = [
    obj.name,
    obj.price.currency,
    obj.price.current.value,
  ];

  const [marginSlideValue, setMarginSlideValue] = useState(0);
  const handleButton = (param) => {
    switch (param) {
      case "left":
        marginSlideValue !== 0 && setMarginSlideValue(marginSlideValue - 0.5);
        break;
      case "right":
        setMarginSlideValue(marginSlideValue + 0.5);
        break;
      default:
        break;
    }
  };

  return (
    <div className="item">
      <img src="https://via.placeholder.com/600x600" alt="item" />

      <div className="item__info">
        <p>{`${currency} ${value}`}</p>
        <p>{name}</p>
      </div>
      <div className="slider">
        <div className="slider__left-button">
          <button onClick={() => handleButton("left")}>{`<`}</button>
        </div>
        <div
          className="slider__imgs"
          style={{ marginLeft: `${marginSlideValue}rem` }}
        >
          <img alt="imgs" src="https://via.placeholder.com/80x50" />
          <img alt="imgs" src="https://via.placeholder.com/80x50" />
          <img alt="imgs" src="https://via.placeholder.com/80x50" />
        </div>
        <div className="slider__right-button">
          <button onClick={() => handleButton("right")}>{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
