export interface Product {
  code?: number;
  name: String;
  description: String;
  amount: number;
  dealerCode?: number | null;
}
