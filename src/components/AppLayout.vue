<script setup>
</script>

<template>
  <div class="w-full max-w-[500px] h-screen-safe bg-[#101013] relative flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] font-sans text-white mx-auto">
    <main class="flex-1 flex flex-col p-6">
      <slot></slot>
    </main>
  </div>
</template>