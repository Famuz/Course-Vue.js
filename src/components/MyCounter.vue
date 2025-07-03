<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

// Interface
interface Props {
  value: number;
}

// Props
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);
// functions
// const addOne = () => {
//   counter.value++;
// };

// const reduceOne = () => {
//   counter.value--;
// };
</script>

<style scoped>
@reference "tailwindcss";

.btn {
  @apply p-2 bg-blue-500 hover:bg-amber-700 rounded mr-2;
}
</style>
