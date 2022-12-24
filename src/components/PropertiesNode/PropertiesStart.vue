<template>
  <div>
    <div>
      <div v-for="(reply, index) in properties.replies" :key="index">
        <input type="text" v-model="properties.replies[index].message" />
      </div>
      <button @click="onClick">ADD</button>
    </div>
    <div>
      <div v-for="(button, index) in properties.buttons" :key="index">
        <input type="text" v-model="properties.buttons[index].text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useVueFlow } from '@vue-flow/core';

export interface PropertiesStartProps {
  nodeId: string;
}

const props = defineProps<PropertiesStartProps>();

const { findNode } = useVueFlow();

const node = findNode(props.nodeId);

const properties = ref<{
  replies: Array<{ type: string; message: string }>;
  buttons: Array<{ text: string; nextStep: string }>;
}>(node?.data);

watch(
  () => properties,
  () => {
    if (node) {
      node.data = properties;
    }
  }
);

const onClick = () => {
  properties.value.replies.push({ type: 'text', message: 'Сообщение...' });
};

console.log('node: ', node);
</script>

<style scoped></style>
