<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
    searchIcon: {
        required: false,
    },
    iconPosition: {
        type: String,
        default: 'left',
        validator: value => ['left', 'right'].includes(value),
    },
    placeholder: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="nav-search-container d-flex d-items-center d-gap-1">
        <label class="nav-search-label" for="nav-search" v-if="iconPosition === 'left' && searchIcon">
            <FontAwesomeIcon :icon="searchIcon" />
        </label>
        <input :placeholder="placeholder" />
        <label class="nav-search-label" for="nav-search" v-if="iconPosition === 'right' && searchIcon">
            <FontAwesomeIcon :icon="searchIcon" />
        </label>
    </div>
</template>

<style scoped>
.nav-search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 4px;
    color: #999999;
    border: 1px solid var(--color-gray-light);
}

.nav-search-container:hover {
    border: 1px solid var(--color-gray-dark);
    background-color: var(--color-gray-light);
    cursor: pointer;
}

.nav-search-label {
    padding: 0;
    margin: 0;
}

input {
    padding: 0;
    margin: 0;
    border: none;
    min-width: 280px;
    background-color: transparent;
}

input:hover {
    background-color: transparent;
}

input:focus {
    outline: none;
    box-shadow: none;
}
</style>
