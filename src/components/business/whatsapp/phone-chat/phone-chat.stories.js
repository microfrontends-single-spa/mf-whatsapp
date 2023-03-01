import PhoneChat from './phone-chat.vue';
import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";

const TITULO = `PHONE-CHAT`;

const SUMMARY = `
    El componente <strong>PHONE-CHAT</strong> representa el lado derecho donde se visualiza el historial de conversaciones, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: auto">
    <phone-chat v-bind="args"></phone-chat>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat',
    component: PhoneChat,
}

const TemplateBase = args => ({
    components: { PhoneChat },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}