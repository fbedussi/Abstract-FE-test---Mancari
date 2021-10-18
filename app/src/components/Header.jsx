import {
  Menu,
  Img,
  MenuButton,
  UserInput,
  SearchButton,
  FlexSection,
} from "../styledComponents/styledComponents.js";

const Header = () => {
  // fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json').
  //     then(resp => resp.json()).
  //     then(json => console.log(json))

  // const Footer = styled.section`
  //     display: flex;
  //     justify-content: space-between
  // `
  const inputPlaceholder = "  search";
  return (
    <header>
      <FlexSection>
        <Img alt="logo" src="https://via.placeholder.com/100x50" />
        <Menu>
          <MenuButton selected>SUNGLASSES</MenuButton>
          <MenuButton>EYEGLASSES</MenuButton>
          <MenuButton>LENSES</MenuButton>
        </Menu>
        <UserInput>
          <input className="search__input" placeholder={inputPlaceholder} />
          <SearchButton>RESET</SearchButton>
        </UserInput>
      </FlexSection>
    </header>
  );
};

export default Header;
