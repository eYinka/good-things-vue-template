<template>
    <!-- Top bar -->
    <section class="w-full bg-white border-b">
        <div class="container">
            <div class="flex justify-between">
                <div class="flex items-center space-x-3 px-5 py-2 border-x">
                    <!-- Search Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span class="text-base text-black font-semibold">Search</span>
                </div>
                <div class="flex items-center">
                    <button
                        class="inline-flex justify-center bg-white hover:bg-gray-100 text-black font-semibold border-x border-x-gray-100 border-b-4 border-teal-700 py-2 px-5 transition">
                        {{topBarLinks[0].title}}
                    </button>
                    <button
                        class="inline-flex justify-center bg-rose-900 hover:bg-teal-700 text-white border-b-4 border-rose-900 hover:border-teal-700 font-semibold py-2 px-5">
                        {{topBarLinks[1].title}}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// Invoke the store to access the state
const {state} = useStore();
// Get the navbar links from the store
const topBarLinks = computed(() => state.topBarLinks)
</script>
