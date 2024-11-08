{
  function sumArray(NumberArr: number[]): number {
    return NumberArr.reduce((acc, curr) => acc + curr, 0);
  }
  const total = sumArray([2, 3, 4, 5]);
  console.log(total);
}
