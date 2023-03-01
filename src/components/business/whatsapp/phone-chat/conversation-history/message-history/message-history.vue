<template>
  <div :class="`${APP_PREFIX}-message-history`">
    <span v-if="multimediaMessage.fromMe"></span>
    <div
      class="container-message"
      :class="{
        'from-me': multimediaMessage.fromMe,
        'no-from-me': !multimediaMessage.fromMe,
      }"
    >
      <conversation-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.CONVERSATION"
      />
      <image-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.IMAGE"
      />
      <div class="date">
        <span
          >{{ multimediaMessage.date }}
          <read-confirmation :readStatus="multimediaMessage.readStatus"
        /></span>
      </div>
    </div>
    <span v-if="!multimediaMessage.fromMe"></span>
  </div>
</template>

<script src="./message-history.ts" lang="ts"/>
<style src="./message-history.scss" lang="scss" scoped/>