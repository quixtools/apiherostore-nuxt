export async function useAsyncDataWrapper(key, fn, params) {
  return await useAsyncData(key, async () => {
    await fn(params);
    return true;
  });
};
