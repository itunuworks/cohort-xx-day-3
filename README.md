# cohort-xx-day-3

## About the project

This repository holds my project lab for day 3. It contains 2 function projects including their test cases, dependencies and an HTML Lab. The function projects are `search` (which performs a binary search of a number on an array), it is dependent on three other functions `toTwenty`, `toForty` and `toOneThousand` and `findMissing` function project which takes in as argument, two arrays from which one has elements of the other, short by one. We are to find the missing element. For the HTML/CSS Lab, a simple clone UI is implemented with HTML and CSS.

- toTwenty 

  - This function is declared as a prototype of the **Array** Class and would return `[1, 2, 3, 4, 5 ... 20]` when called.

- toForty

  - This function is also declared as a prototype of the **Array** Class and would return `[2, 4, 6, 8, 10 ... 40]` when called.

- toOneThousand

  - This function is also declared as a prototype of the **Array** Class and would return `[10, 20, 30, 40, 50 ... 1000]` when called. 

- search

  - This function is also declared as a prototype of the **Array** Class and takes in one number as argument so that a statement in the form `arr.search(4)` would return the index position of number 4 in that array.
  For example 
  
  `[2, 3, 4, 8].search(3)` would return `1`
  
  and 
  
  `[2, 3, 4, 8].search(12)` would return `-1`

- findMissing
  
  - `findMissing(arr1, arr2)` takes in two arguments, both of which are arrays. One of the arrays will have one extra number. What this function does is to return that extra number.
  
  For example 
  
  `findMissing([2,5,9,3,21], [2,5,9,73,3,21])` would return `73`
  
  and 

  `findMissing([6,3,2,5,23,234,26,4], [6,3,2,5,23,234,26,4,100])` would return `100`.

- Google Homepage clone

  - Here, what we have is the clone of the Google homepage, complete with css code. Files can be found in `apps` folder

## How to install

1. Copy https://github.com/itunuworks/cohort-xx-day-3

2. Clone the repo on your local file system using 

   `git clone https://github.com/itunuworks/cohort-xx-day-3`

3. Navigate into the cloned directory using `cd cohort-xx-day-3`

4. Enter the command `npm install` to install all dependencies

## How to run tests

From the root directory, just enter the command `npm run test`