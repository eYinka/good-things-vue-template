<template>
    <footer class="w-full flex justify-center py-6 bg-gray-100">
        <p class="text-base text-gray-600 text-center">{{copyrightText}}</p>
    </footer>
</template>
<script setup>
import { computed } from "vue"
import { useStore } from "vuex";

const { state } = useStore();
const copyrightText = computed(() => state.copyright)
</script>