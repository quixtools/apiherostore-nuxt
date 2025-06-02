export const useProductStore = defineStore('productstore', () => {
  const { getBrands, getSales, getProducts, getProduct, searchAllData } = useProductServices();
  const saleList = ref([]);
  const bestSellerList = ref([]);
  const productList = ref([]);
  const productDetail = ref({});
  const searchResult = ref({});
  const productListRequest = ref({});
  const brandList = ref([]);
  const selectedBrands = ref([]);

  const getBrandList = async () => {
    if (brandList.value && brandList.value.length > 0) return;
    const response = await getBrands();
    if (response?.success) {
      brandList.value = response?.data;
    } else {
      console.log('STORE ERROR(getBrandList): ', response?.error);
    }
  };
  const getSaleList = async () => {
    const response = await getSales();
    if (response?.success) {
      saleList.value = response?.data;
    } else {
      console.log('STORE ERROR(getSaleList): ', response?.error);
    }
  };
  const getBestSellers = async () => {
    const request = {
      sortBy: 'sold',
      order: 'desc',
      pager: { page: 1, size: 4 },
    };
    const response = await getProducts(request);
    if (response?.success) {
      bestSellerList.value = response?.data?.productData || [];
    } else {
      console.log('STORE ERROR(getBestSellers): ', response?.error);
    }
  };
  const getProductList = async () => {
    productDetail.value = [];
    const response = await getProducts(productListRequest.value);
    if (response?.success) {
      productList.value = response?.data?.productData || [];
    } else {
      console.log('STORE ERROR(getProductList): ', response?.error);
    }
  };
  const getProductDetail = async (id) => {
    productDetail.value = {};
    const response = await getProduct(id);
    if (response?.success) {
      productDetail.value = response?.data || [];
    } else {
      console.log('STORE ERROR(getProductList): ', response?.error);
    }
  };
  const searchData = async (request) => {
    const response = await searchAllData(request);
    if (response?.success) {
      searchResult.value = response?.data || [];
    } else {
      console.log('STORE ERROR(searchData): ', response?.error);
    }
  };
  const resetSearchData = () => {
    searchResult.value = {};
  };
  const resetPorductListRequest = () => {
    productListRequest.value = {};
  };

  return {
    saleList,
    bestSellerList,
    productList,
    productDetail,
    searchResult,
    productListRequest,
    brandList,
    selectedBrands,
    getBrandList,
    getSaleList,
    getBestSellers,
    getProductList,
    getProductDetail,
    searchData,
    resetSearchData,
    resetPorductListRequest,
  };
});
