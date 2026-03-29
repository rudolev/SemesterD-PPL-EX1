import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = (s: string) => 
  s.toLowerCase()
   .split('')
   .filter(char => vowels.includes(char))
   .length;

/* Question 2.2 */
export const isPalindrome = R.pipe(
    (text: string) => stringToArray(text),
    R.map((char: string) => char.toLowerCase()),
    R.filter((char: string) => /[a-z0-9]/.test(char)),
    (arr: string[])=> arr.every((char: string, index: number, chars:string[]) => 
      char === chars[chars.length - 1 - index])
);


/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => 
    [t.root, ...t.children.map(treeToSentence)]
        .join(' ');
