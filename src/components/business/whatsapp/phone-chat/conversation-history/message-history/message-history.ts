import { defineComponent } from "vue";

import ConversationMessage from "./conversation-message/conversation-message.vue";
import ImageMessage from "./image-message/image-message.vue";
import ReadConfirmation from "../../../../../common/read-confirmation/read-confirmation.vue";

import { TypeMessageHistoryEnum } from "../../../../../../enums/type-message-history.enum";

import { APP_PREFIX } from "../../../../../../constants/app.constant";

export default defineComponent({
    components: {
        ConversationMessage,
        ImageMessage,
        ReadConfirmation
    },
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup() {
        return {
            APP_PREFIX,
            TypeMessageHistoryEnum
        }
    }
})