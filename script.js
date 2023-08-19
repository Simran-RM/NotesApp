const button = document.querySelector('.btn');
const container = document.querySelector('.container')
const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');



button.addEventListener("click", () => {

    const input = document.createElement('textarea');

    input.type = "text"; // You can use "text", "password", "email", etc.
    input.placeholder = "Enter your text here";


    const delete_button = document.createElement('button');
    delete_button.classList.add('delete-button');

    delete_button.innerHTML = '<span class="material-icons">delete</span>'

    delete_button.setAttribute("data-target-input", input);

    delete_button.addEventListener("click", (e) => {
        inputContainer.removeChild(input); // Remove the associated textarea
        inputContainer.removeChild(delete_button);

    })

    inputContainer.appendChild(input);
    inputContainer.appendChild(delete_button);
    container.appendChild(inputContainer);

})