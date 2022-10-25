<template>
    <main>
        <Header />
        <slot />
        <Footer />
    </main>
</template>

<script setup>
import Footer from './footer.vue';
import Header from './header.vue';
</script>