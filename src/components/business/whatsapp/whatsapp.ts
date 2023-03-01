import { defineComponent, onMounted, onUnmounted, ref } from "vue";

import PhoneData from './phone-data/phone-data.vue';
import PhoneChat from './phone-chat/phone-chat.vue';

import { APP_PREFIX } from "../../../constants/app.constant";

export default defineComponent({
    components: {
        PhoneChat,
        PhoneData
    },
    setup() {
        const isHide = ref(false);

        const handleEventOpenCloseWhatsapp: any = (event: any) => {
            const detail = event["detail"];
            if (detail) {
                isHide.value = detail.isOpenWhatsapp
            }
        };

        onMounted(() => {
            window.addEventListener(
                "evt-open-microfront-whatsapp",
                handleEventOpenCloseWhatsapp
            );
        })

        onUnmounted(() => {
            window.removeEventListener("evt-open-microfront-whatsapp",
                handleEventOpenCloseWhatsapp);
        })

        return {
            APP_PREFIX,
            isHide
        }
    }
})