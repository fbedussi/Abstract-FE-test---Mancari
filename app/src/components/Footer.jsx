import {
  Menu,
  Img,
  MenuButton,
  Search,
  SearchButton,
  Link,
  UserInput,
  FlexSection,
} from "../styledComponents/styledComponents.js";

const Footer = () => {
  const inputPlaceholder = "  search";

  return (
    <footer>
      <FlexSection>
        <Link href="" decorationFalse>
          Subscribe to our newsletter
        </Link>
        <UserInput>
          <input className="search__input" placeholder={inputPlaceholder} />
          <SearchButton>LENSES</SearchButton>
        </UserInput>
      </FlexSection>
      <FlexSection justify="flex-end">
        <Link href="">twitter</Link>
        <Link href="">facebook</Link>
      </FlexSection>
    </footer>
  );
};

export default Footer;
