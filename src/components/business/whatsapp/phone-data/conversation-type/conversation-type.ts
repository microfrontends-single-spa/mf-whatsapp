import { defineComponent, ref } from "vue";

import { APP_PREFIX } from '../../../../../constants/app.constant';

export default defineComponent({
    setup() {
        const itemSelected = ref(1);

        const select = (id: number) => {
            itemSelected.value = id;
        }

        return {
            APP_PREFIX,
            itemSelected,
            select
        }
    }
})