<template>
    <form>
        <div class="w-full flex flex-wrap justify-center items-center gap-6 bg-white py-8">
            <div class="flex items-center">
                <span class="text-2xl text-black font-semibold">I am</span>
                <select
                    class="ml-2 text-2xl text-teal-700 font-semibold caret-teal-700 focus:outline focus:outline-teal-700 ">
                    <option>an individual</option>
                    <option>a corporate body</option>
                </select>
            </div>
            <div class="flex items-center">
                <span class="text-2xl text-black font-semibold">and I</span>
                <select
                    class="ml-2 text-2xl text-teal-700 font-semibold caret-teal-700 focus:outline focus:outline-teal-700 ">
                    <option>want to learn</option>
                    <option>want to buy</option>
                </select>
            </div>
            <div class="flex items-center">
                <button
                    class="bg-rose-900 text-white hover:bg-teal-700 font-bold px-6 py-2 rounded-3xl transition">
                    Start now</button>
            </div>
        </div>
    </form>
</template>
