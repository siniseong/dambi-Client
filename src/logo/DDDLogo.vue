<script setup>
</script>

<template>
  <div class="logo-container">
    <svg class="writing-svg" viewBox="0 0 200 200">
      <defs>
        <g id="pen-icon">
          <g transform="translate(0, -20) rotate(30)">
             <rect x="-3" y="-35" width="6" height="35" rx="1.5" fill="#FFFFFF" />
             <path d="M -3 0 L 0 8 L 3 0 Z" fill="#EF88C8" />
             <rect x="-3" y="-10" width="6" height="10" fill="#f0f0f0" />
          </g>
        </g>
      </defs>

      <g class="letter-group" style="transform: translate(45px, 90px)">
        <path class="stroke-bg" d="M 22 18 A 11 11 0 1 0 22 18.1 L 22 -5 L 22 35" />
        <path class="stroke-fg d1-stroke" d="M 22 18 A 11 11 0 1 0 22 18.1 L 22 -5 L 22 35" />
        <g class="cursor-wrapper d1-cursor" style="offset-path: path('M 22 18 A 11 11 0 1 0 22 18.1 L 22 -5 L 22 35');">
             <use href="#pen-icon" />
        </g>
      </g>

      <g class="letter-group" style="transform: translate(82px, 90px)">
        <path class="stroke-bg" d="M 20 18 A 10 13 0 1 0 20 18.1 L 20 -8 L 20 35" />
        <path class="stroke-fg d2-stroke" d="M 20 18 A 10 13 0 1 0 20 18.1 L 20 -8 L 20 35" />
        <g class="cursor-wrapper d2-cursor" style="offset-path: path('M 20 18 A 10 13 0 1 0 20 18.1 L 20 -8 L 20 35');">
             <use href="#pen-icon" />
        </g>
      </g>

      <g class="letter-group" style="transform: translate(119px, 90px)">
        <path class="stroke-bg" d="M 18 20 A 9 9 0 1 0 18 20.1 L 18 -2 L 18 32" />
        <path class="stroke-fg d3-stroke" d="M 18 20 A 9 9 0 1 0 18 20.1 L 18 -2 L 18 32" />
        <g class="cursor-wrapper d3-cursor" style="offset-path: path('M 18 20 A 9 9 0 1 0 18 20.1 L 18 -2 L 18 32');">
             <use href="#pen-icon" />
        </g>
      </g>

      <g class="letter-group" style="transform: translate(152px, 90px)">
         <rect x="2" y="27" width="6" height="6" class="dot-bg" />
         <rect x="2" y="27" width="6" height="6" class="dot-fg" />
         <g class="cursor-wrapper dot-cursor" style="offset-path: path('M 5 -10 L 5 30');">
             <use href="#pen-icon" />
         </g>
      </g>
    </svg>

    <div class="final-logo">
      <span class="ddd-text">ddd</span>
      <div class="square-dot"></div>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(90px);
}

.writing-svg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: visible;
}

.stroke-bg {
  fill: none;
  stroke: rgba(255,255,255,0);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stroke-fg {
  fill: none;
  stroke: #fff;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 250;
  stroke-dashoffset: 250;
  filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
}

.dot-bg { fill: rgba(255,255,255,0); }

.dot-fg {
  fill: #fff;
  opacity: 0;
  filter: drop-shadow(0 0 2px rgba(255,255,255,0.5));
}

.cursor-wrapper {
  opacity: 0;
  filter: drop-shadow(2px 4px 4px rgba(0,0,0,0.2));
  offset-rotate: 0deg;
}

.d1-stroke { animation: draw 1.0s ease-in-out 0.0s forwards; }
.d2-stroke { animation: draw 1.0s ease-in-out 1.0s forwards; }
.d3-stroke { animation: draw 1.0s ease-in-out 2.0s forwards; }

.dot-fg { animation: dot-appear 0.1s linear 3.2s forwards; }

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes dot-appear {
  to { opacity: 1; }
}

.d1-cursor { animation: write-cursor 1.0s ease-in-out 0.0s forwards; }
.d2-cursor { animation: write-cursor 1.0s ease-in-out 1.0s forwards; }
.d3-cursor { animation: write-cursor 1.0s ease-in-out 2.0s forwards; }

.dot-cursor { animation: dot-cursor-anim 0.4s ease-out 3.0s forwards; }

@keyframes write-cursor {
  0% { offset-distance: 0%; opacity: 1; transform: translate(5px, -10px); }
  10% { transform: translate(0, 0); }
  90% { transform: translate(0, 0); }
  100% { offset-distance: 100%; opacity: 0; transform: translate(5px, -10px); }
}

@keyframes dot-cursor-anim {
  0% { offset-distance: 0%; opacity: 1; }
  50% { offset-distance: 100%; opacity: 1; transform: scale(0.9); }
  80% { offset-distance: 100%; opacity: 1; transform: scale(1); }
  100% { offset-distance: 100%; opacity: 0; transform: translate(5px, -10px); }
}

.writing-svg {
  animation: fade-out-move-up 0.8s cubic-bezier(0.65, 0, 0.35, 1) 3.6s forwards;
}

@keyframes fade-out-move-up {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
}

.final-logo {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-left: 10px;
  padding-top: 75px;
  opacity: 0;
  animation: logo-appear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 3.7s forwards;
}

.ddd-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 56px;
  color: white;
  line-height: 1;
  letter-spacing: -2px;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}

.square-dot {
  width: 8px;
  height: 8px;
  background-color: #EF88C8;
  margin-left: 5px;
  margin-bottom: 8px;
  box-shadow: 0 0 10px #EF88C8;
}

@keyframes logo-appear {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
