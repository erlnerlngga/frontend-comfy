import toast from "react-hot-toast";

export interface ValuesType {
  first_name?: string;
  last_name?: string;
  city?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  image?: string;
}

export interface ErrorsType extends ValuesType {
  exist?: string;
}

function firstNameVerify(error: ErrorsType = {}, values: ValuesType) {
  if (!values.first_name) {
    error.first_name = toast.error("First name Required....!");
  } else if (!values.first_name.trim().length) {
    error.first_name = toast.error("Invalid First name...!");
  }

  return error;
}

function lastNameVerify(error: ErrorsType = {}, values: ValuesType) {
  if (!values.last_name) {
    error.last_name = toast.error("Last name Required....!");
  } else if (!values.last_name.trim().length) {
    error.last_name = toast.error("Invalid Last name...!");
  }

  return error;
}

function cityVerify(error: ErrorsType = {}, values: ValuesType) {
  if (!values.city) {
    error.city = toast.error("City Required....!");
  } else if (!values.city.trim().length) {
    error.city = toast.error("Invalid City...!");
  }

  return error;
}

function emailVerify(error: ErrorsType = {}, values: ValuesType) {
  if (!values.email) {
    error.email = toast.error("Email Required....!");
  } else if (!values.email.trim().length) {
    error.email = toast.error("Wrong email....!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}

function passwordVerify(error: ErrorsType = {}, values: ValuesType) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password...!");
  } else if (values.password.length < 6) {
    error.password = toast.error("Password must be more than 6 character...!");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special character....!");
  }

  return error;
}

export async function registerValidation(values: ValuesType) {
  let error = firstNameVerify({}, values);
  lastNameVerify(error, values);
  cityVerify(error, values);
  emailVerify(error, values);
  passwordVerify(error, values);

  if (values.password !== values.passwordConfirm) {
    error.exist = toast.error("Password not macth....!");
  }

  return error;
}

export async function loginValidation(values: ValuesType) {
  let error = emailVerify({}, values);
  passwordVerify(error, values);

  return error;
}

export async function emailForgotPassword(values: ValuesType) {
  const error = emailVerify({}, values);

  return error;
}

export async function forgotPassword(values: ValuesType) {
  const error = passwordVerify({}, values);

  if (values.password !== values.passwordConfirm) {
    error.exist = toast.error("Password not macth....!");
  }

  return error;
}

////////////////////////////////////////////////////////////
// FOR UPDATE

export async function updateProfile(values: ValuesType) {
  const error = firstNameVerify({}, values);
  lastNameVerify(error, values);
  cityVerify(error, values);

  return error;
}

////////////////////////////////////////////////////////////
// FOR CHANGE PASSWORD

export interface ChangePasswordType {
  current_password?: string;
  new_password?: string;
  confirm_new_password?: string;
}

interface ErrorChangePasswordType extends ChangePasswordType {
  exist?: string;
}

function changePasswordVerify(
  error: ErrorChangePasswordType = {},
  values: ChangePasswordType
) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.new_password) {
    error.new_password = toast.error("Password Required...!");
  } else if (values.new_password.includes(" ")) {
    error.new_password = toast.error("Invalid Password...!");
  } else if (values.new_password.length < 6) {
    error.new_password = toast.error(
      "Password must be more than 6 character...!"
    );
  } else if (!specialChars.test(values.new_password)) {
    error.new_password = toast.error(
      "Password must have special character....!"
    );
  }

  return error;
}

export async function changePasswordValidate(values: ChangePasswordType) {
  const error = changePasswordVerify({}, values);

  if (values.new_password !== values.confirm_new_password) {
    error.exist = toast.error("Password not macth....!");
  }

  return error;
}
