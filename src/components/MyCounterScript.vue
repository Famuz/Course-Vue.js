<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from '../composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
    };
  },
});

// import { computed, ref } from 'vue';

// // Interface
// interface Props {
//   value: number;
// }

// // Props
// const props = defineProps<Props>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);

// // functions
// const addOne = () => {
//   counter.value++;
// };

// const reduceOne = () => {
//   counter.value--;
// };
</script>
