import styled from "styled-components";

const fontSize__S = 0.8;
const fontSize__L = 1.2;
const space = 1;
const littleSpace = space / 2;
const button__bordeRadius = 5;

//GLOBAL
const FlexSection = styled.section`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
  padding: 0rem ${space}rem 0rem ${space}rem;
  gap: ${space}rem;
`;
const UserInput = styled.section`
  display: flex;
  padding: ${littleSpace}rem 0rem ${littleSpace}rem 0;
  gap: ${littleSpace}rem;
`;
//HEADER
const Img = styled.img``;
const Menu = styled.section`
  display: flex;
  gap: ${space}rem;
`;
const MenuButton = styled.button`
  cursor: pointer;
  border: 0px;
  background: transparent;
  font-weight: 600;
  border-bottom: ${(props) => props.selected && "3px solid"};
`;
const SearchButton = styled.button`
  border: 0px;
  border-radius: ${button__bordeRadius}px;
  cursor: pointer;
  color: white;
  background: black;
  font-weight: 600;
`;

//FOOTER
const Link = styled.a`
  font-size: ${fontSize__S}rem;
  text-decoration: ${(props) => props.decorationFalse && "none"};
  padding-top: ${littleSpace}rem;
`;
export { FlexSection, Menu, Img, MenuButton, UserInput, SearchButton, Link };
