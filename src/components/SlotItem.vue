<template>
  <div class="slot">
    <div class="slot-display">{{ currentItem }}</div>
    <div class="slot-button">
      <button @click="stop" :disabled="!isSpinning" class="btn btn-secondary">
        STOP
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  items: string[];
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const currentItem = ref(props.modelValue ?? props.items[0]);
const isSpinning = ref(false);
let intervalId: number;

function spin() {
  isSpinning.value = true;
  intervalId = window.setInterval(() => {
    const currentIndex = props.items.indexOf(currentItem.value);
    const nextIndex = (currentIndex + 1) % props.items.length;
    currentItem.value = props.items[nextIndex];
  }, 50);
}

function stop() {
  emit('update:modelValue', currentItem.value);
  clearInterval(intervalId);
  isSpinning.value = false;
}

onMounted(() => {
  spin();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

watch(() => props.items, () => {
  currentItem.value = props.items[0];
  emit('update:modelValue', currentItem.value);
  if (isSpinning.value) {
    clearInterval(intervalId);
    spin();
  }
});
</script>

<style scoped>
.slot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slot-display {
  font-size: calc(1.2rem + 1.1vw);
  margin-bottom: 2rem;
  text-align: center;
}
</style>
