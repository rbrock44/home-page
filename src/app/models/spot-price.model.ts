export class SpotPrice {
  gold: number;
  silver: number;
  platinum: number;
  goldback: number;
  description: string;
  platinumSource: string;
  silverSource: string;
  goldSource: string;
  timeStamp: string;

  constructor(data?: any) {
    this.gold = data?.gold || 0;
    this.silver = data?.silver || 0;
    this.platinum = data?.platinum || 0;
    this.goldback = data?.goldback || 0;
    this.description = data?.description || '';
    this.platinumSource = data?.platinumSource || '';
    this.silverSource = data?.silverSource || '';
    this.goldSource = data?.goldSource || '';
    this.timeStamp = data?.timeStamp || '';
  }
}
