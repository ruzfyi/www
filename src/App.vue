<script setup lang="ts">
import Link from './components/Link.vue'
</script>

<template>
      <header class="p-7 m-auto sm:max-w-lg">
            <div class="text-left">
                  <h1 class="text-3xl">links</h1>
                  <p class="text-sm">Links to my stuff</p>
                  <p class="text-sm"><a class="text-accent" href="mailto:chu@ruz.fyi">chu@ruz.fyi</a></p>
            </div>
      </header>
      <div class="px-7 flex flex-col m-auto my-3 sm:max-w-lg gap-3">
          <Link
              title="GitHub"
              url="https://github.com/ruzfyi"
          />
          <Link
                  title="Repositories"
                  url="https://github.com/ruzfyi?tab=repositories"
            />
            <Link
              title="LinkedIn"
              url="https://www.linkedin.com/in/jesus-ruiz-ramos-9591a5238"
            />
            <Link
              title="BlueSky"
              url="https://bsky.app/profile/ruz.fyi"
            />
            <Link
                  title="Mastodon"
                  url="https://mastodon.social/@ruzfyi"
            />
            <Link
                  title="Steam"
                  url="https://steamcommunity.com/id/magstermaster/"
            />
      </div>
      <footer class="px-7 font-mono text-sm text-left m-auto my-3 sm:max-w-lg">
                  <p>Made with <span class="text-accent"><a href="https://vuejs.org/" target="_blank">Vue</a></span> and <span class="text-accent"><a href="https://deno.com/" target="_blank">Deno</a></span></p>
                  <p>Source at <span class="text-accent"><a href="https://github.com/churuzfyi/link/" target="_blank">github.com/churuzfyi/link</a></span></p>
      </footer>

</template>
