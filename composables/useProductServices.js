export const useProductServices = () => {
  const { $get, $post } = useNuxtApp();

  const getBrands = async () => {
    return await $get('/store/getBrands', {}, { callKey: 'store.getBrands'});
  };
  const getSales = async () => {
    return await $get('/store/getSales', {}, { callKey: 'store.getSales'});
  };
  const getProducts = async (payload) => {
    return await $post('/store/getProducts', payload, { callKey: 'store.getProducts'});
  };
  const getProduct = async (id) => {
    return await $get(`/store/getProduct/${id}`, {}, { callKey: 'store.getProduct'});
  };
  const searchAllData = async (payload) => {
    return await $post('/store/search', payload, { callKey: 'store.search'});
  };
  const getOrders = async (token) => {
    return await $get(`/store/getOrders`, {}, {
      callKey: 'store.getOrders',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  };

  return { getBrands, getSales, getProducts, getProduct, searchAllData, getOrders };
};
