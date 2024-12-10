import * as yup from "yup";
import { WordCategory } from "../redux/words/types";

export const schemaReg = yup
  .object({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      .matches(
        /^(?=.*\d)(?=.*[A-Za-z]{6})[A-Za-z\d]{7}$/,
        "The password must consist of 6 English letters and 1 number"
      )
      .required("Password is required"),
  })
  .required();

export const schemaLog = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      //   .matches(
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      //   )
      .required("Password is required"),
  })
  .required();

export const schemaEditWord = yup
  .object({
    en: yup
      .string()
      .matches(
        /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
        "Must be a word in english"
      )
      .required("Is required"),
    ua: yup
      .string()
      .matches(
        /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
        "Must be a word in ukranian"
      )
      .required("Is required"),
  })
  .required();

export const schemaAddWord = yup
  .object({
    en: yup
      .string()
      .matches(
        /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
        "Must be a word in english"
      )
      .required("Is required"),
    ua: yup
      .string()
      .matches(
        /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
        "Must be a word in ukranian"
      )
      .required("Is required"),
    category: yup.mixed<WordCategory>().required("Category is required"),
    isIrregular: yup.boolean(),
  })
  .required();
