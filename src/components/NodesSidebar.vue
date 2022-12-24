<template>
  <aside
    class="flex flex-col gap-2 w-60 min-h-screen p-4 bg-[#F6F8F9] drop-shadow-md"
    v-if="!isSelectedNodes"
  >
    <div
      class="p-4 bg-white rounded-md shadow"
      :draggable="true"
      @dragstart="onDragStart($event, 'command')"
    >
      Команда
    </div>
    <div
      class="p-4 bg-white rounded-md shadow"
      :draggable="true"
      @dragstart="onDragStart($event, 'message')"
    >
      Сообщение
    </div>
    <div
      class="p-4 bg-white rounded-md shadow"
      :draggable="true"
      @dragstart="onDragStart($event, 'timeout')"
    >
      Таймаут
    </div>
    <div
      class="p-4 bg-white rounded-md shadow"
      :draggable="true"
      @dragstart="onDragStart($event, 'command')"
    >
      Сообщение
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useVueFlow } from '@vue-flow/core';

const { getSelectedNodes } = useVueFlow();

const isSelectedNodes = computed(() => getSelectedNodes.value.length !== 0);

const onDragStart = (event: DragEvent, nodeType: string) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  }
};
</script>

<style scoped></style>
