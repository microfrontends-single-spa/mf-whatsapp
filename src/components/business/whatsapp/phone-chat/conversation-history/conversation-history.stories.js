import ConversationHistory from './conversation-history.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `CONVERSATION-HISTORY`;

const SUMMARY = `
    El componente <strong>CONVERSATION-HISTORY</strong> representa el historial de conversación, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: auto">
    <conversation-history v-bind="args"></conversation-history>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/ConversationHistory',
    component: ConversationHistory,
}

const TemplateBase = args => ({
    components: { ConversationHistory },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}