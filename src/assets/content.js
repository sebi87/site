// eslint-disable-next-line no-unused-vars
const required = (key, field) => {
    field.validationMessage = !!field[key] && field[key] !== '' ? undefined : ` is required`
};

// eslint-disable-next-line no-unused-vars
const email = (key, field) => {
    field.validationMessage = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(field[key]) ? undefined : ` is invalid`
}
// eslint-disable-next-line no-unused-vars
const tel = (key, field) => {
    field.validationMessage = /\+.[0-9](\s\d+)+/.test(field[key]) ? undefined : ` invalid format. e.g.: +49 221 54914479`
}


// eslint-disable-next-line no-unused-vars
export const validator = (object) => {
    Object.entries(object.validation)
        .forEach(([key, val]) => {
            Object.entries(val)
                // eslint-disable-next-line no-unused-vars
                .forEach(([k,validator]) => validator(key, object))
        })
    return object
}

const content = {
    home: {
        title: '7 Ligen 160 Fahrer',
        subtitle: 'F1 Rennfreunde',
        paragraph: 'Du zockst gerne F1 auf der PS4/5? Du hast Lust dich mit anderen Fahrern zu messen? Du willst dein Team nach vorne bringen und möglichst viele Punkte sammeln? Dann bewirb dich bei der geilsten Community im Netz!',
        cta: 'Mitmachen!'
    },
    form: [
        {id: "name", label: "Vorname", value: undefined, validation: {value: {required}}},
        {id: "psn", label: "PSN-ID", value: undefined, validation: {value: {required}}},
        {id: "tel", label: "Mobilnummer", value: undefined, validation: {value: {required, tel}}},
        {id: "email", label: "E-Mail", value: undefined, validation: {value: {required, email}}},
    ]
}

export function getForm() {
    return content.form
}

export function getHome() {
    return content.home
}

export default {
    getHome,
    getForm
}
