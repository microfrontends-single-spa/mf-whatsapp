<template>
  <div :class="`${APP_PREFIX}-icon-message`">
    <img v-if="readStatus === TypeReadConfirmationEnum.SENT" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAtElEQVR4Aa3Tw4IDYAwA4axt27Zt47Q267z/vVO7XeTwXSc/ZXp9568KIdn8NVwPF7as48V4huLSOn4KxRtKLeNzUHjQbHnmHfBBMQ6xilfiC4p9iFW8ANdQ3KHwN/EGLCAPksY2FN+ohvwm/gbFQZoBI1D40AP5bXwQXiiO4gY0wA3FMuQvcUE/PFCcoDzpo+T9OR7WCw80zitKIf+Kh3XHDXCjCWISD+uCG2MQ03hYCeS//Cw/A/4G4fyhAAAAAElFTkSuQmCC"/>
    <img v-if="readStatus === TypeReadConfirmationEnum.DELIVERED" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAABFklEQVR4AZ3TQ5NFMRiE4Yxt27Zt27b1//fTi/dWfZVhzuK56CSdQ9c9PhNVop8hXhLEEQTLl2eZsjk25UKyCIIks/iDImcMkb9ILmGQVQquJdXk1fLOWEuUy9LH4lcpNnmWPDA2QxZUXmGOrN27scfkh5IQWp4p9xTMe2Pz5PfMcyHlCXJAwbH3CLaTv0ulOL+8QAYkjtA3TcGDZJu8WF4Z64/lfvk1Exa+2aDFHFmNyVPNujWyb8sb5Y2JS2aDAnkhHyZzjG+RX0jyb+VO6s0prki696KkyLLkyyj5C//dr+WoNRvEXEmqDNgcTeJ+4wfVZoMXKSJPjT3LmBIXVI4qitu8PIVHcl8SIpUjxc8Q7z3nv/oEp9wUR4vNRgAAAAAASUVORK5CYII="/>
    <img v-if="readStatus === TypeReadConfirmationEnum.READ" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAABLElEQVR4AZ3MM6AQABQAwJdtu5bs2rNtu/YlLrk9bmHJWuKepj9nbdnW68ZvDbdeDL/2sboaEMVRh3pEdeO+fGI/UUgNrvCA7tWJm3KP5DJRyDaSr/SqalyD8yTPaU0QTOQPyXKiqvkGkh8MJwi685bkEFHVfCR/SNYRBA0oILlD3armnXlJcpQo5AjJKzoTVcnrcoukgAYEwVqSP4whiucD2UJNguIOkLylB0EwnB8kmwigUP6U5Bi1iEKWkvxlEkHQmmckF6lRVj6f3yQnqEUwkK8k2wmCWlwnuU8zoqw8mM1PkjN04AHJVVpwiv7sIflKP6L8HKbxkyzkCS3ZQgKwiKhcDhP5TvKNoQStKSBJ9hFVy2EcX1lFFNKc29ykbvVyaE5QXB0aElC+/zJuAp2L4xArAAAAAElFTkSuQmCC"/>
  </div>
</template>

<script src="./read-confirmation.ts" lang="ts"/>
<style src="./read-confirmation.scss" lang="scss" scoped/>