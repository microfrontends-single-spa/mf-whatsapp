<template>
  <div :class="`${APP_PREFIX}-phone-data`">
    <header-phone-data/>
    <conversation-type/>
    <conversations/>
  </div>
</template>

<script src="./phone-data.ts" lang="ts"/>
<style src="./phone-data.scss" lang="scss" scoped/>