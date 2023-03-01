<template>
  <div :class="`${APP_PREFIX}-header-phone-data`">
    <div class="profile-image">
      <img
        class="image"
        :src="`data:image/png;base64,${image}`"
      />
    </div>
    <span>{{ alias }}</span>
  </div>
</template>

<script src="./header-phone-data.ts" lang="ts"/>
<style src="./header-phone-data.scss" lang="scss" scoped/>