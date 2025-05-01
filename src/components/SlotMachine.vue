<template>
  <div class="slot-machine-container">
    <SlotItem v-for="(_, index) in modelValue" :key="index"
      :items="items"
      v-model="modelValue[index]"
      class="slot-machine-items"
    ></SlotItem>
  </div>
</template>

<script setup lang="ts">
import SlotItem from './SlotItem.vue'
import { watchEffect } from 'vue'

const props = defineProps<{
  modelValue: string[];
}>();

const items = ['しゅ', 'か', 'しゅー'];

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
  (e: 'finish'): void;
}>();

watchEffect(() => {
  emit('update:modelValue', props.modelValue);
  if (props.modelValue.every((item) => item !== '')) {
    emit('finish');
  }
});
</script>

<style scoped>
.slot-machine-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slot-machine-items {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>