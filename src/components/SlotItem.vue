<template>
  <div class="slot">
    <div class="slot-display">{{ display }}</div>
    <div class="slot-button">
      <button @click="stop" :disabled="!isSpinning" class="btn btn-outline-success">
        STOP
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  items: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const display = ref(props.modelValue);
const currentIndex = ref(0);
const isSpinning = computed(() => { 
  return props.modelValue === '';
});
let intervalId: number;

const spin = () => {
  currentIndex.value = Math.floor(Math.random() * props.items.length);
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
    display.value = props.items[currentIndex.value];
  }, 50);
}

const stop = () => {
  emit('update:modelValue', display.value);
  clearInterval(intervalId);
}

onMounted(() => {
  spin();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

watch(() => isSpinning.value, () => {
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
