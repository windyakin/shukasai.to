<script setup lang="ts">
import { computed, ref } from 'vue'
import SlotMachine from './components/SlotMachine.vue'
import ShareButton from './components/ShareButton.vue'

const result = ref<string[]>(['', '', ''])
const finished = ref(false)

const reset = () => {
  result.value = ['', '', '']
  finished.value = false;
}

const finish = () => {
  finished.value = true
}

const isVideo = computed(() => {
  switch (result.value.join('')) {
    case 'しゅかしゅー':
      return 'R3pd6h_wU6Y'
    case 'しゅしゅしゅ':
      return 'YWYDFT-IAtA'
    default:
      return false
  }
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col mt-4 text-center">
        <h1>shukasai.to</h1>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-4 offset-md-4 my-3 text-center">
        <div class="card">
          <div class="card-body py-5">
            <SlotMachine
              v-model="result"
              @finish="finish"
              class="slot-machine"
            ></SlotMachine>
            <iframe
              v-if="isVideo"
              class="media"
              :src="`https://www.youtube-nocookie.com/embed/${isVideo}?controls=0`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="finished" class="col my-2 text-center">
        <div class="d-flex justify-content-center align-items-center" style="gap: 0.5rem;">
          <ShareButton
            v-model="result"
          ></ShareButton>
          <button class="btn btn-outline-secondary" @click="reset">
            リセット
          </button>
        </div>
        <div class="mt-3">
          <span class="text-muted small">
            このウェブサイトは<a href="https://www.saitoshuka.jp/">斉藤朱夏</a>さんとは一切関係ありません
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--bs-card-border-radius);
}
</style>