<template>
  <div :class="`${APP_PREFIX}-conversations`">
    <contact v-for="contact of conversations" :key="contact.id" :contact="contact"/>
  </div>
</template>

<script src="./conversations.ts" lang="ts"/>
<style src="./conversations.scss" lang="scss" scoped/>