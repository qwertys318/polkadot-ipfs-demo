import {createStore} from 'vuex'
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import {ApiPromise, WsProvider} from "@polkadot/api";
import {FrameSystemAccountInfo} from "@polkadot/types/lookup";
import {Balance} from "@/lib/Balance";

let api: ApiPromise | null = null;

async function getApi(): Promise<ApiPromise> {
  if (null === api) {
    const provider = new WsProvider('wss://rpc.polkadot.io');
    api = await ApiPromise.create({provider});
  }
  return api;
}

type Account = {
  address: string,
  balance: Balance
}
type State = {
  connected: boolean
  accounts: Account[]
};
const state: State = {
  connected: false,
  accounts: [],
};

export default createStore({
  state,
  actions: {
    async connected({state}, accounts: InjectedAccountWithMeta[]) {
      const api = await getApi();
      for (const account of accounts) {
        const data = await api.query.system.account<FrameSystemAccountInfo>(account.address);
        state.accounts.push({
          address: account.address,
          balance: new Balance(data.data.free)
        });
      }
      state.connected = true;
    },
  },
})
