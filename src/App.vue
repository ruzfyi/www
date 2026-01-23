<script setup lang="ts">
import Link from './components/Link.vue'
</script>

<template>
      <div class="p-7 dark:bg-black dark:text-white">
            <div>
                  <h1 class="text-xl reactive-blue-text">churuz</h1>
                  <h1 class="text-3xl">link</h1>
                  <p class="text-sm">Links to my stuff</p>
                  <p class="text-sm reactive-blue-text decoration-solid"><a href="mailto:chu@ruz.fyi">chu@ruz.fyi</a></p>
            </div>
      </div>
      <hr class="border-2 border-black dark:border-gray-400"/>
      <div class="m-7 sm:max-w-md flex flex-col gap-3 dark:bg-black">
            <Link
                  title="GitHub"
                  description="My GitHub where all my projects are stored"
                  url="https://github.com/churuzfyi"
            />
            <Link
                  title="GitHub Repos"
                  description="All the random stuff I work on"
                  url="https://github.com/churuzfyi?tab=repositories"
            />
            <Link
                  title="Twitter"
                  description="I might say something, probably won't"
                  url="https://x.com/churruz_fyi"
            />
            <Link
                  title="BlueSky"
                  description="I check Twitter but I don't really post on it"
                  url="https://bsky.app/profile/bsky.chu.ruz.fyi"
            />
            <Link
                  title="Steam"
                  description="Check out what I play or friend me"
                  url="https://steamcommunity.com/id/churuzfyi/"
            />
            <Link
                  title="Gunpla"
                  description="I post pictures of my gunpla on here sometimes"
                  url="https://www.instagram.com/z.chu.ruzzz/"
            />
            <Link
                  title="Photos"
                  description="I post photos I like here but I'll probably forget to"
                  url="https://www.instagram.com/photos.chu.ruzzz/"
            />
            <Link
                  title="YouTube Music"
                  description="I have a lot of playlists"
                  url="https://music.youtube.com/@chu.ruzzzz"
            />
      </div>
      <div class="font-mono text-sm text-center sm:text-left sm:m-7 dark:text-white dark:bg-black">
            <p>Made with <span class="reactive-blue-text"><a href="https://vuejs.org/" target="_blank">Vue</a></span> and <span class="reactive-blue-text"><a href="https://deno.com/" target="_blank">Deno</a></span></p>
            <p>Source at <span class="reactive-blue-text"><a href="https://github.com/churuzzz/link/" target="_blank">github.com/churuzzz/link</a></span></p>
      </div>
</template>

<style scoped>
@reference "tailwindcss";

.reactive-blue-text {
      @apply text-blue-800 dark:text-blue-400;
}
</style>
