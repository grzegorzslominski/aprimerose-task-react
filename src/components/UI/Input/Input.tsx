import { Field, ErrorMessage } from "formik";

import * as S from "./Input.style";

type InputProps = {
  id: string;
  labelContent: string;
  invalid?: boolean;
  as?: "textarea";
};

const Input = ({ id, labelContent, invalid, as }: InputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={id}>{labelContent}</S.Label>
      <Field
        id={id}
        name={id}
        as={as}
        className={`formikField ${as} ${invalid ? "invalid" : ""}`}
      />
      <ErrorMessage name={id} component="div" className="errorMessage" />
    </S.Container>
  );
};

export default Input;
