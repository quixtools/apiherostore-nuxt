export const useCategoryServices = () => {
  const { $get } = useNuxtApp();

  const getCategories = async () => {
    return await $get('/store/getCategories', {}, { callKey: 'store.getCategories'});

  };
  const getSubCategories = async (id) => {
    return await $get(`/store/getSubCategories${id}`, {}, { callKey: 'store.getSubCategories'});
  };

  return { getCategories, getSubCategories };
};
