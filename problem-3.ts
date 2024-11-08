{
  function countWordOccurrences(sentence: string, word: string): number {
    const LowerWord = word.toLocaleLowerCase();
    const LowerSentence = sentence.toLocaleLowerCase().split(' ');
    const totalMatch = LowerSentence.filter(word => word === LowerWord).length;
    return totalMatch;
  }
  const wordCount = countWordOccurrences('Hey from Level 2 : level', 'level');
  console.log(wordCount);
}
