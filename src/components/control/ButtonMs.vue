<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    buttonIcon: {
        required: false,
    },
    iconPosition: {
        type: String,
        default: 'left',
        validator: value => ['left', 'right'].includes(value),
    },
    buttonText: {
        type: String,
        required: false,
    },
    buttonType: {
        type: String,
        required: true,
        validator: value =>
            ['plain', 'primary', 'secondary', 'outlined', 'destructive'].includes(value),
    },
    onClick: {
        type: Function,
        required: false,
    }
})

const buttonTypeFunc = (buttonType) => {
    switch (buttonType) {
        case 'plain': return 'button-plain'
        case 'primary': return 'button-primary'
        case 'secondary': return 'button-secondary'
        case 'outlined': return 'button-outlined'
        case 'destructive': return 'button-destructive'
        default: return ''
    }
}

</script>

<template>
    <button class="button d-flex d-items-center d-gap-1" :class="buttonTypeFunc(buttonType)" @click.prevent="onClick">
        <FontAwesomeIcon v-if="iconPosition === 'left' && buttonIcon" :icon="buttonIcon" />
        <p v-if="buttonText">{{ buttonText }}</p>
        <FontAwesomeIcon v-if="iconPosition === 'right' && buttonIcon" :icon="buttonIcon" />
    </button>
</template>

<style scoped>
.button {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    padding: 10px;
}

.button-plain {
    border: none;
    color: var(--color-gray-dark);
    background-color: transparent;
}

.button-plain:hover {
    background-color: var(--color-gray-light);
}

.button-primary {
    background-color: var(--color-blue-primary);
    color: #fff;
    border: none;
}

.button-primary:hover {
    opacity: 0.8;
}

.button-secondary {
    background-color: var(--color-secondary);
    color: #fff;
    border: none;
}

.button-secondary:hover {
    opacity: 0.8;
}

.button-outlined {
    background-color: transparent;
    border: 1px solid var(--color-gray-light);
    color: var(--color-gray-dark);
}

.button-outlined:hover {
    border: 1px solid var(--color-gray-dark);
    background-color: var(--color-gray-light);
}

.button-destructive {
    background-color: var(--color-destructive);
    color: #fff;
    border: none;
}

.button-destructive:hover {
    background-color: var(--color-destructive-dark);
}
</style>
