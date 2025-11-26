const puzzles = [
  [8, 8, 4, 2, 1],
  [9, 7, 3, 4, 2],
  [6, 6, 5, 4, 3],
  [10, 9, 5, 3],
  [12, 8, 6, 3],
  [7, 7, 7, 2, 1],
  [15, 5, 4, 1],
  [20, 4, 3, 2],
  [11, 9, 3, 2]
];
let currentPuzzle = 0;
let numbers = puzzles[currentPuzzle];
const target = 67;

function createDropdown(options) {
  const select = document.createElement("select");
  options.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.value;
    opt.textContent = o.label;
    select.appendChild(opt);
  });
  select.addEventListener("change", calculate);
  return select;
}

function loadPuzzle(index) {
  currentPuzzle = index;
  numbers = puzzles[index];
  document.getElementById("puzzle").innerHTML = "";
  buildPuzzleUI();
  calculate();
}

function buildPuzzleUI() {
  const puzzle = document.getElementById("puzzle");
  for (let i = 0; i < numbers.length; i++) {

    // LEFT PARENTHESIS "("
    puzzle.appendChild(
      createDropdown([
        { value: "", label: "" },
        { value: "(", label: "(" }
      ])
    );

    // NUMBER
    const span = document.createElement("span");
    span.textContent = numbers[i];
    puzzle.appendChild(span);

    // RIGHT PARENTHESIS ")"
    puzzle.appendChild(
      createDropdown([
        { value: "", label: "" },
        { value: ")", label: ")" }
      ])
    );

    // OPERATOR (except after last)
    if (i < numbers.length - 1) {
      puzzle.appendChild(
        createDropdown([
          { value: "+", label: "+" },
          { value: "-", label: "-" },
          { value: "*", label: "×" },
          { value: "/", label: "÷" }
        ])
      );
    }
  }
}

function calculate() {
  const puzzle = document.getElementById("puzzle");
  const selects = [...puzzle.querySelectorAll("select")];

  let expr = "";
  let i = 0;

  for (let n = 0; n < numbers.length; n++) {
    const leftP = selects[i++].value;
    expr += leftP;

    expr += numbers[n];

    const rightP = selects[i++].value;
    expr += rightP;

    if (n < numbers.length - 1) {
      const op = selects[i++].value;
      expr += op;
    }
  }

  // Safety: avoid eval() errors on broken parentheses
  try {
    let value = eval(expr);
    const div = document.getElementById("result");

    if (value === target) {
      div.innerHTML = `Expression: ${expr}<br>Result: <b class="correct">${value}</b>`;
    } else {
      div.innerHTML = `Expression: ${expr}<br>Result: <b class="wrong">${value}</b>`;
    }
  } catch (err) {
    document.getElementById("result").innerHTML =
      `<span class="wrong">Invalid expression</span>`;
  }
}

buildPuzzleUI();
calculate();