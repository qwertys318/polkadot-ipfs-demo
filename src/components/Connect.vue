<template>
    <v-card class="connect" elevation="8" min-width="500">
      <v-card-title>Connect to extension</v-card-title>
      <v-card-text class="text-center ma-5">
        <v-btn @click="connect" color="secondary" :disabled="loading"
          >Connect polkadot{.js}</v-btn
        >
        <div class="text-error ma-2">{{ error }}</div>
      </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { useStore } from 'vuex'

const store = useStore();

const error = ref('');
const loading = ref(false);

async function connect() {
  error.value = '';
  loading.value = true;
  try {
    const allInjected = await web3Enable("Polka IPFS Demo");
    if (0 === allInjected.length) {
      error.value = "Install polkadot{.js} extension";
      return;
    }

    const accounts = await web3Accounts();
    await store.dispatch('connected', accounts);
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss">
.connect {
}
</style>
