var num = 5;
var doubleNum;

function timesTwo(number) {
  return (number x 2);
};

doubleNum = timesTwo(num);

var numbers;
numbers = [num, doubleNum];

for (var i=0; i < numbers.length; i++) {
  timesTwo(numbers[i]);
};

numbers = {};

numbers = {num: doubleNum};
