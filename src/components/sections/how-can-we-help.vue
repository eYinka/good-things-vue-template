<template>
    <section class="w-full bg-gray-300 py-14">
        <div class="container flex flex-col space-y-8">
            <h3 class="text-3xl md:text-4xl text-black font-bold">How can we help you?</h3>
            <p class="text-base md:text-xl text-black font-medium">Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
            <HelpForm />
        </div>
    </section>
</template>
<script setup>
import HelpForm from "@/components/forms/help.vue"
</script>