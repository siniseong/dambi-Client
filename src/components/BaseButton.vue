<template>
  <button 
    class="w-full h-[50px] rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
