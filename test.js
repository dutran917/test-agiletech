const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20, 60, 70, 70, 80, 10];
//10 10 10 10 20 20 20 30 50
const new_arr = arr.sort();

const pairOfSock = () => {
  let result = 0;
  let index = 0;
  while (index < new_arr.length - 1) {
    if (new_arr[index] === new_arr[index + 1]) {
      result++;
      index += 2;
    } else index += 1;
  }
  return result;
};

console.log(pairOfSock());
