export function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    if (prices[i] - minPrice > profit) profit = prices[i] - minPrice;
  }

  return profit;
}
