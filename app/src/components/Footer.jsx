import {
  Link,
  UserInput,
  FlexSection,
} from "../styledComponents/styledComponents.js";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <FlexSection justifyContent="space-between">
        <Link href="" decorationFalse>
          Subscribe to our newsletter
        </Link>
        <UserInput>
          <form>
            <input type="email" size="30" required />
            <input type="submit" value="SIGN UP" />
          </form>
        </UserInput>
      </FlexSection>
      <FlexSection justifyContent="flex-end">
        <Link href="">twitter</Link>
        <Link href="">facebook</Link>
      </FlexSection>
    </footer>
  );
};

export default Footer;
