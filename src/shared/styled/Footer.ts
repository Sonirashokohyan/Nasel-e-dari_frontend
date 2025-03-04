import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  border-top: 2px solid rgb(166, 185, 209);
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 500px) {
    margin-bottom: 4rem;
    padding: 0.8rem 0;
  }
`;

const FooterList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, auto); /* Two items per row */
    gap: 1rem 2rem; /* Adjust spacing */
  }

  @media (max-width: 500px) {
    gap: 0.8rem 1.5rem; /* Slightly smaller gap for smaller screens */
  }
`;

const FooterItem = styled.li`
  font-size: 1rem;
  color: rgb(11, 105, 220);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(11, 105, 220);
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

export { FooterContainer, FooterList, FooterItem}