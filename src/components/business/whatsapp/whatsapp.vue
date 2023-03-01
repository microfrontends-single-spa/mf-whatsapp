<template>
  <div :class="[`${APP_PREFIX}-container`, {'hide': isHide }]">
    <phone-data/>
    <phone-chat/>
  </div>
</template>

<script src="./whatsapp.ts" lang="ts"/>
<style src="./whatsapp.scss" lang="scss" scoped/>