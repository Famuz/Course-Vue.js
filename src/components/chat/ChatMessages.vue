<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Start ChatMessages -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image" -->
      <!-- End ChatMessages -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>();

watch(props, () => {
  console.log('Update de messages');

  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
