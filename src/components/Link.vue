<script setup lang="ts">
      defineProps<{
            title?: string,
            description?: string,
            url?: string,
      }>();
</script>
<template>
      <div class="link-container">
            <a :href=url target="_blank">
                  <div>
                        <h1 class="link-title">{{title}}</h1>
                        <hr class="link-horizontal"/>
                        <p class="link-description">{{description}}</p>
                  </div>
            </a>
      </div>      
</template>
<style scoped>
@reference "tailwindcss";
.link-title {
      @apply text-xl font-mono font-bold;
}
.link-description {
      @apply font-mono text-sm;
}
.link-horizontal {
      @apply border-gray-400 border;
}
.link-container {
      @apply font-mono border-2 border-black p-3 hover:bg-blue-800 hover:text-white hover:border-white transition-all;
}
</style>
