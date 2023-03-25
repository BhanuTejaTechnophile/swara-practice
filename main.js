let numberToSwara = {
 '1': "Sa",
 '2': "Ri",
 '3': "Ga",
 '4': "Ma",
 '5': "Pa",
 '6': "Da",
 '7': "Ni",
 '8': "Så"
};

let swaraToNumber = {
 "Sa": '1',
 "Ri": '2',
 "Ga": '3',
 "Ma": '4',
 "Pa": '5',
 "Da": '6',
 "Ni": '7',
 "Så": '8'
}

const validKeys = Object.keys(numberToSwara);

const fetchRandomPattern = () => {
  let combinationPattern = document.getElementById("input-pattern").value;
  let countHeader = document.getElementById("pattern");
  countHeader.innerHTML = getRamdonPattern(combinationPattern.length || 8);
  let currentPattern = getSwaraPattern();
  document.getElementById("input-pattern").value = currentPattern;
}

const fetchPattern = () => {
  let combinationPattern = document.getElementById("input-pattern").value;
  let countHeader = document.getElementById("pattern");
  countHeader.innerHTML = getPattern(combinationPattern);
}

const fetchNext = () => {
  let countHeader = document.getElementById("pattern");
  countHeader.innerHTML = getNextPattern();
}

const getSwaraPattern = () => {
  let currentPattern = document.getElementById("pattern").innerText;
  let swaras = currentPattern.split(" ");
  return swaras.map(e => swaraToNumber[e]).join("");
}

const getNextPattern = () => {
  let currentPattern = getSwaraPattern();
  do {
    currentPattern++;
  } while(!currentPattern.toString().split('').every(e => validKeys.includes(e.toString())));
  document.getElementById("input-pattern").value = currentPattern;
  return getPattern(currentPattern.toString());
}

const getPattern = (pattern) => {
  var string = '';
  for (var i=0; i < pattern.length; i++) {
    string += numberToSwara[pattern[i]] + " ";
  }
  return string;
}

const getRamdonPattern = (size) => {
  var string = '';
  for (var i=0; i<size; i++) {
    string += numberToSwara[Math.floor(Math.random()*size) + 1] + " ";
  }
  return string;
}
