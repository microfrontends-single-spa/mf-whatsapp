import ConversationMessage from './conversation-message.vue';
import { PLANTILLA_HTML } from "../../../../../../../constants/storybook.constant";

const TITULO = `CONVERSATION-MESSAGE`;

const SUMMARY = `
    El componente <strong>CONVERSATION-MESSAGE</strong> representa un mensaje de tipo conversación; en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    <li><strong>multimediaMessage</strong>: Objeto con la información del mensaje</li>
`;

const COMPONENT_BASE = `
<div style="width: auto; background-color: #f5f6f6">
    <conversation-message v-bind="args"></conversation-message>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/ConversationHistory/MessageHistory/ConversationMessage',
    component: ConversationMessage,
}

const TemplateBase = args => ({
    components: { ConversationMessage },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {
    "multimediaMessage": {
        "id": 1,
        "fromMe": true,
        "messageContent": "Muy buenas noches, ¡Hoy jueves tienes promoción en pollos a la brasa 3x1!",
        "type": "conversation",
        "date": "16:12",
        "readStatus": "read"
    }
}