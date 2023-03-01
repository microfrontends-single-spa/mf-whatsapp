<template>
  <div :class="`${APP_PREFIX}-footer-phone-chat`">
    <div class="icon-footer">
      <em class="fa-solid fa-face-smile"></em>
    </div>
    <div class="icon-footer">
      <em class="fa-solid fa-paperclip"></em>
    </div>
    <div class="editor-message" contenteditable="true"></div>
    <div class="icon-footer">
      <em class="fa-solid fa-paper-plane"></em>
    </div>
  </div>
</template>

<script src="./footer-phone-chat.ts" lang="ts"/>
<style src="./footer-phone-chat.scss" lang="scss" scoped/>