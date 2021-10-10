<template>
  <v-card class="main" elevation="8" min-width="500">
    <v-card-title>Accounts</v-card-title>
    <v-card-text>
      <div v-if="0 === accounts.length" class="text-caption">No accounts added.</div>
      <div v-else v-for="(account, index) of accounts" :key="index">
        {{ account.address }} : {{account.balance.view}} DOT
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
import {computed} from "vue";

const store = useStore();

const accounts = computed(() => store.state.accounts);
</script>

<style lang="scss">
.main {
}
</style>
