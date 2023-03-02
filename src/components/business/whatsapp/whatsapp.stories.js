import Whatsapp from './whatsapp.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `WHATSAPP`;

const SUMMARY = `
    El componente <strong>WHATSAPP</strong> representa el chat de whatsapp de un usuario, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: auto">
    <whatsapp v-bind="args"></whatsapp>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp',
    component: Whatsapp,
}

const TemplateBase = args => ({
    components: { Whatsapp },
    setup() {
        return { args }
    },
    //template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
    template: COMPONENT_BASE
})

export const Base = TemplateBase.bind({});
Base.args = {

}