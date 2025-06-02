
export const convertDate = (dateStr, locale = 'en-US', options = {}) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleString(locale, options);
};
