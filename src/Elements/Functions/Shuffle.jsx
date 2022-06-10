export function Shuffle(r) {
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = r[i];
    r[i] = r[j];
    r[j] = temp;
  }
  return r;
}

export function Reshuffled(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Used like so
// var arr = [2, 11, 37, 42];
// Shuffle(arr);
// console.log(arr);

// Shuffle(CarData);
// console.log(CarData);

