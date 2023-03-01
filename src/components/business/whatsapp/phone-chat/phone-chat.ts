import { defineComponent } from "vue";

import ConversationHistory from "./conversation-history/conversation-history.vue";
import FooterPhoneChat from "./footer-phone-chat/footer-phone-chat.vue";
import HeaderPhoneChat from "./header-phone-chat/header-phone-chat.vue"

import { APP_PREFIX } from "../../../../constants/app.constant";

export default defineComponent({
    components: {
        ConversationHistory,
        FooterPhoneChat,
        HeaderPhoneChat
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
})