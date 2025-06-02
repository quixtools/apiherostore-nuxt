export const useUserServices = () => {
  const { $get } = useNuxtApp();

  const getUser = async (token) => {
    return await $get(`/authentication/getUser`, {}, {
      callKey: 'store.getUser',
      noAbort: true,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  };

  return { getUser };
};
