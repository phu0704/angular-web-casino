export interface option {
  img: string;
  name: string;
  option: string[];
  status: boolean;
}
export interface optionApi {
  img: string;
  name: string;
  option: string[];
}
export interface Bookie {
  id: number;
  status?: boolean;
  logo: string;
  color: string;
  name: string;
  Featured: boolean;
  Evaluate: number;
  PERFECT: boolean;
  Reputation: boolean;
  criteria: {
    playersFrom: boolean;
    englishWeb: boolean;
    englishSupport: boolean;
    liveChat: boolean;
    providers: number;
    paymentMethod: number;
    gameLicense: number;
    vpn: boolean;
  };
  exclusive: string;
  whyPlay: string[];
  bonus: {
    maxDeposit: string;
    match: string;
    minDeposit: string;
    wagerReq: string;
    excludeBonus: boolean;
    noDeposit: string;
  };
}
export interface Answer {
  safe: boolean;
  deposit: boolean;
  bonus: boolean;
  tax: boolean;
  free: boolean;
}
export interface Content {
  choose: boolean;
  criteria: boolean;
  writing: boolean;
  sort: boolean;
  find: boolean;
  filters: boolean;
  faq: boolean;
}
export interface User {
  id: number;
  username: string;
  password: string;
}
