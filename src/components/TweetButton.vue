<template>
  <a class="btn btn-primary" :href="tweetUrl">
    結果をツイート
  </a>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps<{
  modelValue: string[];
}>();

const tweetUrl = computed(
  () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.modelValue.join(''))}&url=${window.location.href}`
);
</script>