<template>
  <aside
    class="flex flex-col gap-2 w-60 min-h-screen p-4 bg-[#F6F8F9] drop-shadow-md"
    v-if="isSelectedNodes"
  >
    <PropertiesStart
      v-if="selectedNode.type === 'start'"
      :node-id="selectedNode.id"
    />
    <div v-if="selectedNode.type === 'command'">test</div>
    <div v-if="selectedNode.type === 'message'">test</div>
    <div v-if="selectedNode.type === 'timeout'">test</div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useVueFlow } from '@vue-flow/core';

import PropertiesStart from './PropertiesNode/PropertiesStart.vue';

const { getSelectedNodes } = useVueFlow();

const isSelectedNodes = computed(() => getSelectedNodes.value.length !== 0);
const selectedNode = computed(() => getSelectedNodes.value[0]);
</script>

<style scoped></style>
