function isEmpty(value) {
  if (value === null || value === undefined || value === '') { return true; }
  if (Array.isArray(value) && value.length === 0) { return true; }
  return false;
}

export const emailValidator = (value) => {
  // eslint-disable-next-line no-useless-escape
  const emailRegEx = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  if (isEmpty(value)) { return true; }
  if (Array.isArray(value)) { return false; }
  return emailRegEx.test(value);
};

export const minLength = (value, min) => {
  if (Array.isArray(value)) { return false; }
  return value.length >= min;
};
