<template>
  <button class="btn btn-primary" @click="share">
    結果を共有
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps<{
  modelValue: string[];
}>();

const share = async () => {
  try {
    await navigator.share({
      title: props.modelValue.join(''),
      text: props.modelValue.join(''),
      url: window.location.href,
    })
  } catch (error) {
    location.href = tweetUrl.value;
  }
}

const tweetUrl = computed(
  () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.modelValue.join(''))}&url=${window.location.href}`
);
</script>