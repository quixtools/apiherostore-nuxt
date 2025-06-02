import { handleCallState } from '@/utils/handleCallState';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: { 'Accept': 'application/json' },
  });
  function get(endpoint, payload = {}, options = {}) {
    return apiCall('GET', endpoint, { query: payload }, options);
  };
  function post(endpoint, payload = {}, options = {}) {
    return apiCall('POST', endpoint, { body: payload }, options);
  };
  function put(endpoint, payload = {}, options = {}) {
    return apiCall('PUT', endpoint, { body: payload }, options);
  };
  function del(endpoint, payload = {}, options = {}) {
    return apiCall('DELETE', endpoint, { query: payload }, options);
  };
  async function apiCall(method, endpoint, payload, options) {
    let callKey, noAbort;
    try {
      const abortController = new AbortController();
      callKey = options.callKey;
      noAbort = options.noAbort || false;
      delete options.callKey;
      delete options.noAbort;
      handleCallState.setSending(callKey, abortController, noAbort);
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      };
      delete options.headers;
      const callRequest = {
        method,
        headers,
        ...payload,
        ...options,
        signal: abortController.signal,
      };
      const { success, data } = await api(endpoint, callRequest);
      handleCallState.setComplete(callKey);
      return { success, data, error: '' };
    } catch(e) {
      const response = e?.response?.data || e?.data || {};
      const error = response.userMessage || response.message || e?.message || e?.toString() || 'Unknown Error';
      handleCallState.setError(callKey, error);
      if (e.status === 401 || error === 'Invalid token.') {
        const { status, signOut } = useAuth();
        if (status.value === 'authenticated') signOut();
      }
      return { success: false, data: null, error };
    }
  }

  return {
    provide: {
      get,
      post,
      put,
      del,
    },
  };
});
