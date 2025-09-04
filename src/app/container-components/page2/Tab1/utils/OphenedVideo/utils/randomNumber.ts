function randomNumber() {
  return (Math.random() * 9999 + 1).toFixed(2);
}

export {randomNumber}