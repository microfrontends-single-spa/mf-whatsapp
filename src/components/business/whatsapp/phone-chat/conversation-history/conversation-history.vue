<template>
  <div :class="`${APP_PREFIX}-conversation-history`">
    <message-history
      v-for="message of messagesHistory"
      :key="message.id"
      :multimediaMessage="message"
    />
  </div>
</template>

<script src="./conversation-history.ts" lang="ts"/>
<style src="./conversation-history.scss" lang="scss" scoped/>