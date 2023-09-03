async function main() {
  const hypotenuse = await getLength(3, 4);
  console.log(hypotenuse, "hypotenuse");
  const hypotenuse1 = await getLength(3, 4, true);
  console.log(hypotenuse1, "hypotenuse1");
}
async function getLength(a, b, asyncTrue = false) {
  const squareA = square(a);
  const squareB = square(b);
  let sumOfSquares = squareA + squareB;
  if (asyncTrue) {
    try {
      const data = await getAsyncRequest(sumOfSquares);
      console.log(data, "dsdasd");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  return Math.sqrt(sumOfSquares);
}

const getAsyncRequest = (sumOfSquares) => {
  let ans;
  return new Promise((fulfill, reject) => {
    if (!sumOfSquares) {
      const err = new Error("sum not found");
      reject(err);
    }
    if (!validate()) {
      const err = new Error("sum not found valid");
      reject(err);
    }
    setTimeout(() => {
      sumOfSquares += 20;
      ans = Math.sqrt(sumOfSquares);
      fulfill(ans);
    }, 5000);
  });
};

const validate = () => {
  return true;
};

function square(number) {
  return number * number;
}
main();
