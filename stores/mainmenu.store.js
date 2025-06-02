export const useMainMenuStore = defineStore('mainmenu', () => {
  const { getCategories, getSubCategories } = useCategoryServices();
  const mainmenuList = ref([]);
  const subCategoryList = ref([]);

  const getMainMenuList = async () => {
    if (mainmenuList.value.length > 0) return;
    const response = await getCategories();
    if (response?.success) {
      mainmenuList.value = response?.data;
    } else {
      console.log('STORE ERROR: ', response?.error);
    }
  };
  const getSubCategorList = async (id) => {
    const response = await getSubCategories(id);
    if (response?.success) {
      subCategoryList.value = response?.data;
    } else {
      console.log('STORE ERROR: ', response?.error);
    }
  };
  const getCategoryName = (id) => {
    if (!mainmenuList || mainmenuList.value.length < 1) return '';
    return mainmenuList.value.find(item => item.categoryId === id).categoryName;
  };
  const getSubCategoryName = (categoryId, subCategoryId) => {
    if (!mainmenuList || mainmenuList.value.length < 1) return '';
    const categoryItem = mainmenuList.value.find(item => item.categoryId === categoryId);
    return categoryItem.subcategories.find(item => item.subCategoryId === subCategoryId).subCategoryName;
  };

  return {
    mainmenuList,
    getMainMenuList,
    getSubCategorList,
    getCategoryName,
    getSubCategoryName,
  };
});
