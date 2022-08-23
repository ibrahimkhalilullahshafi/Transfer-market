const selected = []
function addPlayer(players) {
    const playerName = players.parentNode.children[0].innerText;
    selected.push(playerName);
    display(selected);
    players.disabled = true;

}
function display(selectedPlayer) {
    console.log(selectedPlayer)
    const listedPlayer = document.getElementById("selected-list");
    listedPlayer.innerHTML = "";
    for (let i = 0; i < selectedPlayer.length; i++) {
        if (i >= 5) {
            return alert('you can not select more than 5 players')
        }
        else {
            const name = selected[i]
            const list = document.createElement("li");
            list.innerText = name;
            listedPlayer.appendChild(list);
        }
    }
}
// common function-----------------------------------------

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue
}


document.getElementById('calculate').addEventListener('click', function () {
    const expense = getInputFieldValueById('inputPerPlayer');
    const playerNumber = document.getElementById('selected-list').children.length;
    const playerExpenses = expense * playerNumber;
    const playerExpensesTotal = document.getElementById('playerExpense');
    playerExpensesTotal.innerText = playerExpenses;
})
