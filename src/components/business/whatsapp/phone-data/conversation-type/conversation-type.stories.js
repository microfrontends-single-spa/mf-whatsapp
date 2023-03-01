import ConversationType from './conversation-type.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `CONVERSATION-TYPE`;

const SUMMARY = `
    El componente <strong>CONVERSATION-TYPE</strong> representa el tipo de conversaciones que el usuario desea filtrar, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: 300px">
    <conversation-type v-bind="args"></conversation-type>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/ConversationType',
    component: ConversationType,
}

const TemplateBase = args => ({
    components: { ConversationType },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}