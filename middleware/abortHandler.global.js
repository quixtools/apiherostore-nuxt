import { handleCallState } from '@/utils/handleCallState';

export default defineNuxtRouteMiddleware(() => {
  handleCallState.abortAll();
});
