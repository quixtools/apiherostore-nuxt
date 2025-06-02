export const useAppStore = defineStore('appstore', () => {

  const isMobile = ref(false);
  const userAgent = ref('');
  const pageTypeByURL = ref({});

  const checkIsMobile = () => {
    userAgent.value = navigator.userAgent || window.opera;
    isMobile.value = /android|avantgo|blackberry|bada\/|bb10|iemobile|kindle|midp|mmp|opera mini|palm os|phone|pocket pc|psp|symbian|windows ce|windows phone/i.test(userAgent.value) || (typeof window !== 'undefined' && window.innerWidth <= 768);
  };

  return {
    isMobile,
    userAgent,
    pageTypeByURL,
    checkIsMobile,
  };
});
