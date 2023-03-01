import { defineComponent } from "vue";

import useContact from "../../../composables/common/contact.composable"

import { APP_PREFIX } from "../../../constants/app.constant";

export default defineComponent({
    props: {
        contact: {
            type: Object,
            default: {}
        }
    },
    setup() {

        const { setContactSelect, getContactSelect } = useContact();
        const contactSelect = getContactSelect();

        const select = (contact: Object) => {
            setContactSelect(contact);
        }

        return {
            APP_PREFIX,
            contactSelect,
            select
        }
    }
})