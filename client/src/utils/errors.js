export const mapFirestoreErrors = errorCode => {
  const errors = {};

  switch (errorCode) {
    case 'auth/user-not-found':
      errors.email = 'Email is not registered';
      break;
    case 'auth/wrong-password':
      errors.password = 'Incorrect password';
      break;
    case 'auth/too-many-requests':
      errors.email = 'Too many requests. Please try later';
      errors.password = 'Too many requests. Please try later';
      break;
    case 'auth/email-already-in-use':
      errors.email = 'Email is already taken';
      break;
    default:
      break;
  }

  return errors;
};

export const generateCheckoutError = (source, message) => {
  const error = new Error(message.slice(0, -1));
  error.source = source;
  throw error;
};