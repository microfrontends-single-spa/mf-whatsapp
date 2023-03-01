import HeaderPhoneChat from './header-phone-chat.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `HEADER-PHONE-CHAT`;

const SUMMARY = `
    El componente <strong>HEADER-PHONE-CHAT</strong> representa la barra superior del historial de conversación, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: 500px">
    <header-phone-chat v-bind="args"></header-phone-chat>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/HeaderPhonechat',
    component: HeaderPhoneChat,
}

const TemplateBase = args => ({
    components: { HeaderPhoneChat },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}