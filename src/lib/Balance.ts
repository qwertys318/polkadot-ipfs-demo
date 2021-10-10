import {u128} from "@polkadot/types";
import BigNumber from "bignumber.js";

export class Balance {
  raw: u128
  bn: BigNumber
  view: string

  constructor(raw: u128) {
    this.raw = raw;
    this.bn = new BigNumber(raw.toString());
    this.view = this.bn.dividedBy(10000000000).toFixed(2);
  }
}
