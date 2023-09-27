import { Formik } from "formik";

import { contactFormValidationSchema } from "../../helpers/validationSchema";
import Input from "../UI/Input/Input";

import * as S from "./ContactForm.style";

const ContactForm = () => {
  return (
    <S.Container>
      <S.Header>
        <S.H1>Contact me</S.H1>
        <S.H2>We are always happy to find out what's on your mind.</S.H2>
      </S.Header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={async (values, helpers) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          helpers.resetForm();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <S.FormBox>
              <Input
                id="name"
                labelContent="Name"
                invalid={!!props.errors.name && props.touched.name}
              />
              <Input
                id="email"
                labelContent="Email"
                invalid={!!props.errors.email && props.touched.email}
              />
              <Input
                id="message"
                labelContent="Message content"
                invalid={!!props.errors.message && props.touched.message}
                as="textarea"
              />
              <S.Button
                type="submit"
                disabled={!props.isValid || !props.dirty}
                isLoading={props.isSubmitting || props.isValidating}
              >
                Send
                {props.isSubmitting || props.isValidating ? <S.Loader /> : null}
              </S.Button>
            </S.FormBox>
          </form>
        )}
      </Formik>
    </S.Container>
  );
};

export default ContactForm;
