const textAreaForm = document.getElementById("textAreaForm");
const resultTable = document.getElementById("resultTable");

textAreaForm.onsubmit = (event) => {
  event.preventDefault();
  const strInput = event.target.textInput.value;
  handleCharacterDuplicated(strInput);
};

const handleCharacterDuplicated = (strInput) => {
  const charCount = {};
  strInput.split("").map((char) => {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  });
  renderCharCountTable(charCount);
};

const renderCharCountTable = (charCount) => {
  resultTable.innerHTML = "";

  const headerRow = resultTable.insertRow(0);
  const headerCell1 = document.createElement("th");
  headerCell1.textContent = "Character";
  const headerCell2 = document.createElement("th");
  headerCell2.textContent = "Count";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  const objectKey = Object.keys(charCount);
  for (let i = 0; i < objectKey.length; i++) {
    const newRow = resultTable.insertRow(i + 1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    if (objectKey[i] === " ") {
      cell1.textContent = "space";
      cell2.textContent = charCount[objectKey[i]];
    } else {
      cell1.textContent = objectKey[i];
      cell2.textContent = charCount[objectKey[i]];
    }
  }
};
