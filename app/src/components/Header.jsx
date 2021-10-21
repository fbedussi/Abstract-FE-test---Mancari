import {
  Menu,
  MenuButton,
  UserInput,
  FilterButton,
  FlexSection,
  HR,
} from "../styledComponents/styledComponents.js";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";
import { FILTER_UPDATE, FILTER_RESET } from '../redux/actions';

const Header = () => {
  const filter = useSelector(filterSelector)
  const dispatch = useDispatch()
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
            value={filter}
            onChange={(e) => {
              dispatch(FILTER_UPDATE(e.target.value));
            }}
          />
          <FilterButton onClick={() => dispatch(FILTER_RESET())}>RESET</FilterButton>
        </UserInput>
      </FlexSection>
      <HR />
    </header>
  );
};

//STORE

const filterSelector = (state) => state.filter.filter

export default Header;
