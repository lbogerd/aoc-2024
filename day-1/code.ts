// PART 1
const data = await Deno.readFile("day-1/input.txt");

const parsed = new TextDecoder("utf-8").decode(data);

const leftArray = [];
const rightArray = [];

const lines = parsed.split("\n");

for (const line of lines) {
  const [left, right] = line.split("   ");

  leftArray.push(parseInt(left));
  rightArray.push(parseInt(right));
}

leftArray.sort();
rightArray.sort();

const differences = [];
for (let i = 0; i < leftArray.length; i++) {
  const left = leftArray[i];
  const right = rightArray[i];

  let difference = left - right;
  if (difference < 0) difference = -difference;

  differences.push(difference);
}

const totalDifference = differences.reduce((prev, next) => prev + next, 0);
console.log(totalDifference);

// PART 2
const similarities = [];
for (let i = 0; i < leftArray.length; i++) {
  const left = leftArray[i];
  const similarity = left * rightArray.filter((n) => n === left).length;

  similarities.push(similarity);
}

const totalSimilarity = similarities.reduce((prev, next) => prev + next, 0);
console.log(totalSimilarity);
