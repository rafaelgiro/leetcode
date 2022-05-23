export function maxArea(height: number[]): number {
  let maxValue = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (rightIndex > leftIndex) {
    const leftColumn = height[leftIndex];
    const rightColumn = height[rightIndex];
    const smallestColumn = Math.min(leftColumn, rightColumn);
    const columnsDistance = rightIndex - leftIndex;
    const currentArea = smallestColumn * columnsDistance;

    maxValue = Math.max(maxValue, currentArea);

    if (leftColumn < rightColumn) leftIndex += 1;
    else rightIndex -= 1;
  }

  return maxValue;
}
