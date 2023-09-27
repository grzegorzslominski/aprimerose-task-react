import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`;
