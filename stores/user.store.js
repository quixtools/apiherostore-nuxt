export const useUserStore = defineStore('userstore', () => {
  const { getUser } = useUserServices();
  const { getOrders } = useProductServices();

  const { data } = useAuth();
  const userData = ref({});
  const userOrders = ref({});

  const getUserData = async () => {
    const response = await getUser(data.value.user.accessToken || '');
    if (response?.success) {
      userData.value = response?.data || {};
    } else {
      console.log('STORE ERROR(getUserData): ', response?.error);
    }
  };
  const getUserOrders = async () => {
    const response = await getOrders(data.value.user.accessToken || '');
    if (response?.success) {
      userOrders.value = response?.data || {};
    } else {
      console.log('STORE ERROR(getUserOrders): ', response?.error);
    }
  };

  return {
    userData,
    userOrders,
    getUserData,
    getUserOrders,
  };
});
