<script>
export default {
  name: "LineMdBellLoop",
};
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
    >
      <g>
        <path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3V5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.05s"
            values="4;0"
          />
        </path>
        <path
          stroke-dasharray="28"
          stroke-dashoffset="28"
          d="M12 5C8.68629 5 6 7.68629 6 11L6 17C5 17 4 18 4 19H12M12 5C15.3137 5 18 7.68629 18 11L18 17C19 17 20 18 20 19H12"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.05s"
            dur="0.1s"
            values="28;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          begin="0.2s"
          dur="1.5s"
          keyTimes="0;0.05;0.15;0.2;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"
        />
      </g>
      <path
        stroke-dasharray="8"
        stroke-dashoffset="8"
        d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.15s"
          dur="0.05s"
          values="8;0"
        />
        <animateTransform
          attributeName="transform"
          begin="0.25s"
          dur="1.5s"
          keyTimes="0;0.05;0.15;0.2;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"
        />
      </path>
    </g>
  </svg>
</template>
