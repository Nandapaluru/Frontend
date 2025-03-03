// lodashDeclaringMethod.ts
import { chunk } from "lodash";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(numbers, 3);

console.log(chunkedArray); // Output: [[1,2,3], [4,5,6], [7,8]]
