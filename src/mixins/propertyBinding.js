/**
 * Two way binding with props for custom components e.g. custom <input>
 * With this mixin it is possible to bind with v-model e.g. <custom-input v-model="someValue"
 */
export default {
    data: () => ({
        /**
         * Bind this value to an element: e.g.: <input v-model="internalValue"
         */
        internalValue: undefined,
    }),

    props: {
        value: [String, Number, Date, Boolean, Object],
    },

    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.setInternalValue(value);
            },
        },

        internalValue(newVal) {
            this.$emit('input', newVal);
        },
    },

    methods: {
        setInternalValue(value) {
            this.internalValue = value;
        },
    },
};
