import { defineComponent, ref } from "vue";

import ConversationType from "./conversation-type/conversation-type.vue";
import Conversations from "./conversations/conversations.vue";
import HeaderPhoneData from "./header-phone-data/header-phone-data.vue";

import { APP_PREFIX } from "../../../../constants/app.constant";

export default defineComponent({
    components: {
        Conversations,
        ConversationType,
        HeaderPhoneData        
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
});