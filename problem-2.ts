{
  function removeDuplicates(DuplicateArr: number[]): number[] {
    return [...new Set(DuplicateArr)];
  }
  const newArray = removeDuplicates([1, 1, 2, 3, 4, 4, 5, 5, 6]);
  console.log(newArray);
}
