<template>
  <div
    :class="[
      `${APP_PREFIX}-contact`,
      { selected: +contactSelect?.id === +contact?.id },
    ]"
    @click="select(contact)"
  >
    <span>{{ contact.alias }}</span>
    <div class="circle-count-unread" v-if="contact.unread">
      <span>{{ contact.unread }}</span>
    </div>
  </div>
</template>

<script src="./contact.ts" lang="ts"/>
<style src="./contact.scss" lang="scss" scoped/>