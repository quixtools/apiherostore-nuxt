export const handleCallState = reactive({
  states: {},
  is(callKey) {
    return this.states[callKey] || { sending: false, hasError: false, error: '' };
  },
  setSending(callKey, abortController, noAbort = false) {
    this.states[callKey] = { sending: true, hasError: false, error: '', abortController, noAbort };
  },
  setError(callKey, error) {
    this.states[callKey] = { sending: false, hasError: true, error: error };
  },
  setComplete(callKey) {
    this.states[callKey] = { sending: false, hasError: false, error: '' };
  },
  abortRequest(callKey, reason = '') {
    const request = this.states[callKey];
    if (request?.sending && request.abortController && !request.noAbort) {
      request.abortController.abort(reason);
      this.setComplete(callKey);
    }
  },
  abortAll(reason = '') {
    for (const key in this.states) {
      this.abortRequest(key, reason);
    }
  },
});
