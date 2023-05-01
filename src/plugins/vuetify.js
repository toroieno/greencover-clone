import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#893ff2',
        backgroundColor: '#f4ecfd',
        backgroundColor2: '#f7f3f8'
      }
    }
  }
});
