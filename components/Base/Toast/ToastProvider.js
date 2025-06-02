export const toastProvider = reactive({
  handlerList: [],
  add(variant = 'primary', title = '', detail = '', duration = 3000) {
    this.handlerList.push({ id: Date.now().toString(36) + Math.random().toString(36), variant, title, detail, duration });
  },
  remove(idToRmove) {
    this.handlerList = this.handlerList.filter(item => item.id !== idToRmove);
  },
});
