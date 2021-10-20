import { useState, useEffect } from "react";
import Item from "./Item/Item";
import { FlexSection } from "../styledComponents/styledComponents.js";
import { connect } from "react-redux";

const Page = (props) => {
  const [response, setResponse] = useState([]);

  const APIrequest = () => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((resp) => resp.json())
      .then((json) => {
        setResponse(json);
      });
  };

  useEffect(() => {
    APIrequest();
  }, []);

  return (
    <>
      <FlexSection className="page">
        {response.map((obj, i) => {
          if (obj.name.toLowerCase().includes(props.filter.toLowerCase())) {
            return <Item obj={obj} />;
          }
        })}
      </FlexSection>
    </>
  );
};

//STORE
const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    filter: filter.filter,
  };
};

export default connect(mapStateToProps)(Page);
