<template>
  <v-app>
    <v-main>
      <div class="container">
        <Main v-if="isConnected"/>
        <Connect v-else/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import Connect from "./components/Connect.vue";
import Main from "./components/Main.vue";
import {useStore} from 'vuex'

const store = useStore();

const isConnected = computed(() => store.state.connected);
</script>

<style lang="scss">
.container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
