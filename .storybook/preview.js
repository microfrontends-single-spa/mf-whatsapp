import { app } from '@storybook/vue3';
import store from '../src/store';

import '../src/assets/styles/_variables.scss';

app.use(store);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}