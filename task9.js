// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:


let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


// That somewhat works, because Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.

// But because the sorting function is not meant to be used this way, not all permutations have the same probability.

// For instance, consider the code below. It runs shuffle 1000000 times and counts appearances of all possible results:

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }


//   The example output:

123: 166693
132: 166647
213: 166628
231: 167517
312: 166199
321: 166316
// Looks good now: all permutations appear with the same probability.

// Also, performance-wise the Fisher-Yates algorithm is much better, there’s no “sorting” overhead.