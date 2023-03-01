import { defineComponent } from "vue";

import Whatsapp from '../../components/business/whatsapp/whatsapp.vue';

import { APP_PREFIX } from "../../constants/app.constant";

export default defineComponent({
    components: {
        Whatsapp
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
})