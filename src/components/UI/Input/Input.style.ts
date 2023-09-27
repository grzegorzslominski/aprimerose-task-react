import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.325rem;

  .formikField {
    font-size: 1rem;
    border: 1px solid #e3e1e3;
    border-radius: 8px;
    padding: 0.35rem 0.25rem;
    font-family: inherit;
  }

  .invalid {
    border-color: red;
  }

  .errorMessage {
    color: red;
    font-size: 0.875rem;
  }

  .textarea {
    min-height: 5rem;
    resize: none;
  }
`;

export const Label = styled.label`
  font-size: 0.85rem;
  color: #858e89;
`;
