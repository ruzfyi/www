<script setup lang="ts">
      defineProps<{
            title?: string,
            description?: string,
            url?: string,
      }>();
</script>
<template>
      <a :href="url" target="_blank" class="link-container">
            <div>
                  <h1 class="link-title">{{ title }}</h1>
            </div>
      </a>
</template>
<style scoped>
@reference "tailwindcss";
.link-title {
      @apply text-xl font-mono font-bold inline-block;
}
.link-container {
      @apply block font-mono border-2 p-3 transition-all text-center rounded-sm no-underline;
      border-color: var(--color-accent);
      color: var(--color-on-surface);
      &:hover {
            background-color: var(--color-accent);
            color: var(--color-surface);
            border-color: var(--color-surface);
      }
}
</style>
