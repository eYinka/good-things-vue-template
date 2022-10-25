<template>
    <TopBar />
    <header class="w-full py-4">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="w-auto">
                    <img src="@/assets/img/logo.png" class="h-14" alt="Logo"/>
                </div>
                <Navbar />
            </div>
        </div>
    </header>
</template>
<script setup>
import TopBar from "@/components/sections/topbar.vue";
import Navbar from "@/components/sections/navbar.vue";

</script>
