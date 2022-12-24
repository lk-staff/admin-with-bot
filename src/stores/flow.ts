import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { FlowExportObject } from '@vue-flow/core';

export const useFlowStore = defineStore('flow', () => {
  const flow = ref<FlowExportObject>({
    nodes: [],
    edges: [],
    position: [0, 0],
    zoom: 0,
  });

  function getflow() {
    return flow.value;
  }

  function saveflow(rawFlow: FlowExportObject) {
    flow.value = rawFlow;
  }

  return { flow, getflow, saveflow };
});
