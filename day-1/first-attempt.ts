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

const leftSum = leftArray.reduce((prev, next) => prev + next, 0);
const rightSum = rightArray.reduce((prev, next) => prev + next, 0);

const difference = rightSum - leftSum;

console.log(difference < 0 ? -difference : difference);
