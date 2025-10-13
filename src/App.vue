<script setup lang="ts">
import Link from './components/Link.vue'
</script>

<template>
      <div class="p-7 font-mono">
            <h1 class="text-xl text-blue-800">churuz</h1>
            <h1 class="text-3xl">link.chu.fyi</h1>
            <p class="text-sm">Links to my stuff</p>
      </div>
      <hr class="border-2 border-black"/>
      <div class="m-7 flex flex-col gap-3">
            <Link
                  title="GitHub"
                  description="My GitHub where all my projects are stored"
                  url="https://github.com/churuzzz"
            />
            <Link
                  title="Twitter"
                  description="I might say something, probably won't"
                  url="https://x.com/churruzzz"
                  />
            <Link
                  title="BlueSky"
                  description="I check Twitter but I don't really post on it"
                  url="https://bsky.app/profile/chu.ruzzz.dev"
                  />
            <Link
                  title="Steam"
                  description="Check out what I play or friend me"
                  url="https://steamcommunity.com/profiles/76561198297138653/"
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
      <div class="font-mono text-sm text-center">
            <p>Made with <span class="text-blue-800"><a href="https://vuejs.org/" target="_blank">Vue</a></span> and <span class="text-blue-800"><a href="https://deno.com/" target="_blank">Deno</a></span></p>
            <p>Source at <span class="text-blue-800"><a href="https://github.com/churuzzz/link/" target="_blank">github.com/churuzzz/link</a></span></p>
      </div>
</template>
