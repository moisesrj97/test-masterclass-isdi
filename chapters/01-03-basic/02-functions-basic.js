export const functionThatHatesCats = (animal) => {
  if (["cats", "cat"].includes(animal.toLowerCase())) {
    throw new Error("I HATE CATS!");
  } else {
    return `I love ${animal.toLowerCase()}!`;
  }
};
