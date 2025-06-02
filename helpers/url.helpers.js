export const getCategoryAsUrl = (name = '', id = '') => {
  return `/${name.toLowerCase().replace(' ', '-')}-${id}-c`;
};
export const getSubCategoryAsUrl = (name = '', id = '') => {
  return `/${name.toLowerCase().replace(' ', '-')}-${id}-sc`;
};
export const getProductAsUrl = (name = '', id = '') => {
  return `/${name.toLowerCase().replace(' ', '-')}-${id}-p`;
};

export const getProductPageDataType = (param = '') => {
  const paramSplited = param.split('-');
  let id;
  if (paramSplited.at(-1) === 'c' || paramSplited.at(-1) === 'p') {
    id = paramSplited.at(-2);
  } else if (paramSplited.at(-1) === 'sc') {
    id = `${paramSplited.at(-3)}-${paramSplited.at(-2)}`;
  }
  return {
    type: paramSplited.at(-1),
    id,
  };
};
