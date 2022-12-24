<template>
  <aside class="w-60 min-h-screen p-4 bg-[#F6F8F9] drop-shadow-md">
    <router-link
      class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-[#D7EDFF]"
      exact-active-class="bg-[#D7EDFF]"
      to="/"
    >
      <StatisticsIcon />
      <span class="text-[#252C32] font-normal text-sm tracking-tighter">
        Статистика
      </span>
    </router-link>
    <router-link
      class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-[#D7EDFF]"
      exact-active-class="bg-[#D7EDFF]"
      to="/flow"
    >
      <ConstructorIcon />
      <span class="text-[#252C32] font-normal text-sm tracking-tighter">
        Конструктор
      </span>
    </router-link>
    <router-link
      class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-[#D7EDFF]"
      exact-active-class="bg-[#D7EDFF]"
      to="/chat"
    >
      <ChatIcon />
      <span class="text-[#252C32] font-normal text-sm tracking-tighter">
        Чат
      </span>
    </router-link>
    <router-link
      class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-[#D7EDFF]"
      exact-active-class="bg-[#D7EDFF]"
      to="/settings"
    >
      <SettingsIcon />
      <span class="text-[#252C32] font-normal text-sm tracking-tighter">
        Настройки
      </span>
    </router-link>
  </aside>
</template>

<script setup lang="ts">
import StatisticsIcon from './icons/StatisticsIcon.vue';
import ConstructorIcon from './icons/ConstructorIcon.vue';
import ChatIcon from './icons/ChatIcon.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
</script>

<style scoped></style>
