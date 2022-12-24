<template>
  <main class="px-4 flex flex-grow">
    <VueFlow @drop="onDrop" @dragover="onDragOver">
      <Panel :position="PanelPosition.TopRight" class="controls">
        <button
          style="background-color: #113285; color: white"
          title="Reset Transform"
        >
          <svg width="16" height="16" viewBox="0 0 32 32">
            <path
              fill="#FFFFFB"
              d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
            />
          </svg>
        </button>
      </Panel>

      <template #node-start="props">
        <div
          class="flex flex-col items-start p-4 gap-3 bg-white rounded-md shadow"
        >
          <div>Команда: /{{ props.type }}</div>
          <div>
            <div>{{ props.data }}</div>
            <div>props.data.photo</div>
            <div>props.data.message</div>
            <div>props.data.buttons</div>
          </div>
        </div>
      </template>

      <template #node-command="props">
        <div>{{ props }}</div>
      </template>

      <template #node-message="props">
        <div>{{ props }}</div>
      </template>

      <template #node-timeout="props">
        <div>{{ props }}</div>
      </template>

      <Background :variant="BackgroundVariant.Dots" pattern-color="#000" />
    </VueFlow>
  </main>
  <PropertiesSidebar />
  <NodesSidebar />
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue';
import { VueFlow, useVueFlow, Panel, PanelPosition } from '@vue-flow/core';
import { Background, BackgroundVariant } from '@vue-flow/background';
import { v4 as uuidv4 } from 'uuid';

import NodesSidebar from '../components/NodesSidebar.vue';
import PropertiesSidebar from '../components/PropertiesSidebar.vue';

const { addNodes, findNode, project, vueFlowRef } = useVueFlow({
  nodes: [
    {
      id: '1',
      type: 'output',
      label: 'test',
      position: { x: 350, y: 200 },
    },
  ],
});

const onDragOver = (event: DragEvent) => {
  event.preventDefault();

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move';
  }
};

const onDrop = (event: DragEvent) => {
  const type = event.dataTransfer?.getData('application/vueflow');

  const { left, top } = vueFlowRef.value.getBoundingClientRect();

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  });

  const newNode = {
    id: uuidv4(),
    type,
    position,
    label: `${type} node`,
  };

  addNodes([newNode]);

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node = findNode(newNode.id);
    if (node) {
      const stop = watch(
        () => node.dimensions,
        (dimensions) => {
          if (dimensions.width > 0 && dimensions.height > 0) {
            node.position = {
              x: node.position.x - node.dimensions.width / 2,
              y: node.position.y - node.dimensions.height / 2,
            };
            stop();
          }
        },
        { deep: true, flush: 'post' }
      );
    }
  });
};

onMounted(() => {
  addNodes([
    {
      id: '2',
      position: { x: 150, y: 50 },
      label: 'Node 2',
      data: { replies: [], buttons: [] },
      type: 'start',
    },
  ]);
});
</script>

<style scoped></style>
