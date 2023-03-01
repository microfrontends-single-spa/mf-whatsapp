<template>
  <div :class="`${APP_PREFIX}-phone-chat`">
    <header-phone-chat/>
    <conversation-history/>
    <footer-phone-chat/>
  </div>
</template>

<script src="./phone-chat.ts" lang="ts"/>
<style src="./phone-chat.scss" lang="scss" scoped/>