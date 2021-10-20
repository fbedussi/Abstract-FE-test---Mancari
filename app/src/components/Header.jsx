import {
  Menu,
  MenuButton,
  UserInput,
  FilterButton,
  FlexSection,
  HR,
} from "../styledComponents/styledComponents.js";
import { connect } from "react-redux";
import * as action from "../redux/actions.js";
import "./header.scss";

const Header = (props) => {
  const handleReset = () => {
    props.filterReset();
  };
  return (
    <header>
      <FlexSection bkgColor={"white"} justifyContent="space-between">
        <img alt="logo" src="https://via.placeholder.com/100x50" />
        <Menu>
          <MenuButton selected>SUNGLASSES</MenuButton>
          <MenuButton>EYEGLASSES</MenuButton>
          <MenuButton>LENSES</MenuButton>
        </Menu>
        <UserInput>
          <input
            type="text"
            placeholder="search"
            value={props.filter}
            onChange={(e) => {
              props.filterUpdate(e.target.value);
            }}
          />
          <FilterButton onClick={() => handleReset()}>RESET</FilterButton>
        </UserInput>
      </FlexSection>
      <HR />
    </header>
  );
};

//STORE
const mapStateToProps = (state) => {
  const { filter } = state;
  return {
    filter: filter.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterUpdate: (newFilter) => dispatch(action.FILTER_UPDATE(newFilter)),
    filterReset: () => dispatch(action.FILTER_RESET()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
