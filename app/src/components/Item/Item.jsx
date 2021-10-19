import { FlexSection } from "../../styledComponents/styledComponents.js";
import "./item.scss";

const Item = ({ obj }) => {
  const [name, currency, value] = [
    obj.name,
    obj.price.currency,
    obj.price.current.value,
  ];

  return (
    <div className="item">
      <img src="https://via.placeholder.com/600x600" alt="item" />

      <div className="item__info">
        <p>{`${currency} ${value}`}</p>
        <p>{name}</p>
      </div>

      {/* <FlexSection alignItems="center" justifyContent="center"> */}
      {/* <button>{`<`}</button> */}
      {/* <FlexSection justifyContent="space-between"> */}
      {/* <div className="slider"> */}
      {/* <img alt="imgs" src="https://via.placeholder.com/80x50" />
          <img alt="imgs" src="https://via.placeholder.com/80x50" />
          <img alt="imgs" src="https://via.placeholder.com/80x50" /> */}
      {/* </div> */}
      {/* </FlexSection> */}
      {/* <button>{`>`}</button> */}
      {/* </FlexSection> */}
    </div>
  );
};

export default Item;
