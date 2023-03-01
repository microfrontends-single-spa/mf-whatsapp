import { createStore } from 'vuex'

import contactStore from './common/contact.store';

export default createStore({
  modules: {
    contactStore
  }
})
