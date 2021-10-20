import styled from "styled-components";

const fontSize__S = 0.8;
const fontSize__L = 1.2;
const space = 1;
const littleSpace = space / 2;
const doubleSpace = space * 2;
const button__bordeRadius = 5;

//GLOBAL
const FlexSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  background-color: ${(props) => props.bkgColor && props.bkgColor};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  padding: 0rem ${space}rem 0rem ${space}rem;
`;
const UserInput = styled.section`
  display: flex;
  padding: ${littleSpace}rem 0rem ${littleSpace}rem 0;
  gap: ${littleSpace}rem;
  height: ${doubleSpace}rem;
`;
//HEADER
const Menu = styled.section`
  display: flex;
  gap: ${space}rem;
`;
const MenuButton = styled.button`
  font-size: ${fontSize__L}rem;
  cursor: pointer;
  border: 0px;
  background: transparent;
  font-weight: 600;
  border-bottom: 3px solid;
  border-color: transparent;
  border-color: ${(props) => props.selected && "black"};
  :hover {
    border-color: grey;
    transition: 0.5s;
  }
`;
const FilterButton = styled.button`
  border: 0px;
  border-radius: ${button__bordeRadius}px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  background-color: black;
`;
const HR = styled.hr`
  padding: 0;
  margin: 0;
`;

//FOOTER
const Link = styled.a`
  font-size: ${fontSize__S}rem;
  text-decoration: ${(props) => props.decorationFalse && "none"};
  padding: ${littleSpace}rem ${littleSpace}rem 0 0;
`;
//PAGE
export { FlexSection, Menu, MenuButton, UserInput, FilterButton, Link, HR };
