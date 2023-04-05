import Vue from 'vue';

Vue.filter('date', (date) => {
  const value = new Date(date);
  return value.toLocaleDateString();
});

Vue.filter('datetime', (date) => {
  const value = new Date(date);
  return value.toLocaleTimeString();
});

export default Vue;
