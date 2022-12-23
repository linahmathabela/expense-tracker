//grab elements
const form = document.getElementById('form');
const addBtn =document.getElementById('add');
const display = document.getElementById('list')
//submit form and display
form.addEventListener('submit', (e) => {
    event.preventDefault()
    let nameInput = document.getElementById('name').value
    const dateInput = document.getElementById('date').value
    const amountInput = document.getElementById('amount').value
    
    const addExpense = document.createElement('tr');
    addExpense.innerHTML = `
    <td>${nameInput}</td>
    <td>${dateInput}</td>
    <td>${amountInput}</td>
    <td><button class="delete">X</button></td>`;
    display.appendChild(addExpense)
    
})

//delete table
function deleteExpense (el){
    if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
}

display.addEventListener('click', (e) =>{
    deleteExpense(e.target)
})