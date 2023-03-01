import { defineComponent } from "vue";

import useContact from "../../../../../composables/common/contact.composable";

import { APP_PREFIX } from "../../../../../constants/app.constant";

export default defineComponent({
    setup() {

        const {
            getContactSelect
        } = useContact();

        const contactSelect = getContactSelect();

        return {
            APP_PREFIX,
            contactSelect
        }
    }
})