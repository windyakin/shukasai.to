<template>
  <div class="slot-machine-container">
    <SlotItem v-for="(_, index) in selectedItem" :key="index"
      :items="items"
      v-model="selectedItem[index]"
      class="slot-machine-items"
    ></SlotItem>
  </div>
</template>

<script setup lang="ts">
import SlotItem from './SlotItem.vue'
import { ref, watchEffect } from 'vue'

const selectedItem = ref(['', '', '']);
const items = ['しゅ', 'か', 'しゅー'];

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'finish'): void;
}>();

watchEffect(() => {
  emit('update:modelValue', selectedItem.value.join(''));
  if (selectedItem.value.every((item) => item !== '')) {
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