<template>
    <div :class="`${APP_PREFIX}-conversation-type`">
        <div class="conversation-type" :class="{'selected': itemSelected == 1}" @click="select(1)">
            <span>CHATS</span>
        </div>
        <div class="conversation-type" :class="{'selected': itemSelected == 2}" @click="select(2)">
            <span>CHATS NO LEIDOS</span>
        </div>
    </div>
</template>

<script src="./conversation-type.ts" lang="ts"/>
<style src="./conversation-type.scss" lang="scss" scoped/>