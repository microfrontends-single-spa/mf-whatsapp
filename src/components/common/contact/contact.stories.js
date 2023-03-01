import Contact from './contact.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `CONTACT`;

const SUMMARY = `
    El componente <strong>CONTACT</strong> representa un contacto de whatsapp, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    <li><strong>contact</strong>: Objeto que contiene información del contacto de whatsapp</li>
`;

const COMPONENT_BASE = `
<div style="width: 500px">
    <contact v-bind="args"></contact>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Commom/Contact',
    component: Contact,
}

const TemplateBase = args => ({
    components: { Contact },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {
    'contact': {
        "id": 11,
        "alias": "Fiorella Gomez Monteagudo"
    },
}

export const Unread = TemplateBase.bind({});
Unread.args = {
    'contact': {
        "id": 12,
        "alias": "Shiney Susan Delgado Moztajo",
        "unread": 5
    }
}