<script setup lang="ts">
import { ref } from 'vue'
import SlotMachine from './components/SlotMachine.vue'
import TweetButton from './components/TweetButton.vue'

const result = ref<string>()
const finished = ref(false)

const finish = () => {
  finished.value = true
}
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
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="finished" class="col my-2 text-center">
        <TweetButton
          v-model="result"
        ></TweetButton>
        <div class="mt-3">
          <span class="text-muted small">
            このウェブサイトは<a href="https://www.saitoshuka.jp/">斉藤朱夏</a>さんとは一切関係ありません
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
