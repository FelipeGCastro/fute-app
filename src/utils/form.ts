const validations = {
  regex: /^.+@.+$/,
  maxLength: 100,
  minLength: 3,
}

export const isValidEmail = (email: string) => {
  if (typeof email !== 'string') {
    return false
  }

  if (
    email.match(validations.regex) &&
    email.length > validations.minLength &&
    email.length <= validations.maxLength
  ) {
    return true
  }
}

export const emailProps = {
  autoCapitalize: 'none',
  autoComplete: 'email',
  autoCorrect: false,
  keyboardType: 'email-address',
  textContentType: 'emailAddress',
}

export const loginEmailProps = {
  ...emailProps,
  textContentType: 'username',
}

const commonPasswordProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  secureTextEntry: true,
}

export const loginPasswordProps = {
  ...commonPasswordProps,
  autoComplete: 'password',
  textContentType: 'password',
}

export const registerPasswordProps = {
  ...commonPasswordProps,
  autoComplete: 'password-new',
  textContentType: 'newPassword',
}

const commonNameProps = {
  autoCapitalize: 'words',
  autoCorrect: false,
}

export const fullNameProps = {
  ...commonNameProps,
  autoComplete: 'name-given',
  textContentType: 'givenName',
}
export const firstNameProps = {
  ...commonNameProps,
  autoComplete: 'name-given',
  textContentType: 'givenName',
}

export const lastNameProps = {
  ...commonNameProps,
  autoComplete: 'name-family',
  textContentType: 'familyName',
}

export const birthdate = {
  autoComplete: 'birthdate-full',
}

export const getInputProps = (
  type:
    | 'firstName'
    | 'lastName'
    | 'fullName'
    | 'email'
    | 'password'
    | 'birthdate'
    | 'newPassword',
) => {
  const types = {
    firstName: firstNameProps,
    lastName: lastNameProps,
    email: emailProps,
    loginEmail: loginEmailProps,
    password: loginPasswordProps,
    fullName: fullNameProps,
    birthdate: birthdate,
    newPassword: registerPasswordProps,
  }
  return types[type] || {}
}
