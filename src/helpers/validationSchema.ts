import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "This field is required",
  },
});

export const contactFormValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Invalid name format. Please enter a valid name without special characters or numbers."
    ),
  email: Yup.string()
    .email(
      "Invalid email format. Please enter a valid email address (e.g. example@email.com)."
    )
    .trim()
    .required(),
  message: Yup.string()
    .max(120, "Character limit exceeded! Maximum allowed is 120.")
    .trim()
    .required(),
});
