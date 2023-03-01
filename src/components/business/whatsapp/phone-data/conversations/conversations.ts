import { defineComponent } from "vue";

import Contact from "../../../../../components/common/contact/contact.vue";

import { APP_PREFIX } from "../../../../../constants/app.constant";

export default defineComponent({
    components: {
        Contact
    },
    setup() {

        const conversations = [
            {
                "id": 1,
                "alias": "Lilia Wade",
                "unread": 1
            },
            {
                "id": 2,
                "alias": "Patricia Nuñez Hernandes",
                "unread": 2
            },
            {
                "id": 3,
                "alias": "David Maldonado Ortiz",
                "unread": 3
            },
            {
                "id": 4,
                "alias": "Frank Augusto Peña Vera"
            },
            {
                "id": 5,
                "alias": "Milagros Manchego Perez"
            },
            {
                "id": 6,
                "alias": "Margarita Rueda Cañahuire"
            },
            {
                "id": 7,
                "alias": "Reyna Gabriela Fernandez Espinoza"
            },
            {
                "id": 8,
                "alias": "Jennifer Rodriguez Calderon"
            },
            {
                "id": 9,
                "alias": "Jose Begazo Alarcon",
                "unread": 5
            },
            {
                "id": 10,
                "alias": "Yovanna Salazar Jarufe"
            },
            {
                "id": 11,
                "alias": "Fiorella Gomez Monteagudo"
            },
            {
                "id": 12,
                "alias": "Shiney Susan Delgado Moztajo",
                "unread": 5
            },
        ];

        return {
            APP_PREFIX,
            conversations
        }
    }
})