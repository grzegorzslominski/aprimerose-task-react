import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: 32rem;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
  border-radius: 12px;
  padding: 1.5rem 2rem 2rem 2rem;
  border: 1px solid #e3e1e3;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 8px 0px;

  @media screen and (max-width: 420px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const H2 = styled.h2`
  color: #6d696c;
  font-size: 1.125rem;
  font-weight: 400;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

type ButtonProps = {
  isLoading?: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  font-size: 1rem;
  width: fit-content;
  padding: 0.75rem 1.25rem;
  margin: 1.5rem 0 0 auto;
  border-radius: 8px;
  border: none;
  background-color: #121112;
  color: #fafafa;
  cursor: pointer;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;
      color: transparent;
    `}
`;

export const Loader = styled.div`
  position: absolute;
  top: calc(50% - 0.75rem);
  left: calc(50% - 0.75rem);
  border: 2px solid #ffffff;
  border-top: 2px solid #121112;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
