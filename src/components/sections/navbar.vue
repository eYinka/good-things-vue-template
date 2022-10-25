<template>
    <nav>
        <ul class="hidden lg:flex space-x-4">
            <li v-for="link in menuLinks">
                <router-link :to="{name: link.route}"><span
                        class="text-base font-semibold text-black hover:text-teal-700 transition">{{ link.title
                        }}</span>
                </router-link>
            </li>
        </ul>
        <!-- Hamrburger for mobile menu -->
        <div class="flex lg:hidden cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>

    </nav>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// Invoke the store to access the state
const {state} = useStore();
// Get the navbar links from the store
const menuLinks = computed(() => state.menuLinks)
</script>
