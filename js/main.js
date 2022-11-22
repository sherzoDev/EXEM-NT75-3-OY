let $form = document.querySelector(".form");
// let $input = document.querySelector(".form");
let $list = document.querySelector(".list");

let newArr = [{
    id: 1,
    name: 'Sherzod',
    phone: "+998901111111",
    email: "eshmat@gmail.com",
    thickness: "Medium",
    size: "25sm",
    pizza: "Tomato, Pickled",
    add: "Peper",
}]

$form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let {
        user_name,
        user_phone,
        user_email,
        user_select,
        pizza_size,
    } = evt.target.elements

    let newObj = {
        id: newArr.length + 1,
        name: user_name.value.trim(),
        phone: user_phone.value.trim(),
        email: user_email.value.trim(),
        size: pizza_size.value.trim(),
        select: user_select.value.trim(),
    }

    newArr.push(newObj);
    renderFnc(newArr, $list)
})

let renderFnc = function (array, element) {
    element.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
            <li>
                <h5 class="mt-3">Order: ${array[i].id}</h5>
                <p><strong>Name:</strong> ${array[i].name}</p>
                <p><strong>Phone:</strong> ${array[i].phone}</p>
                <p><strong>Addres:</strong> ${array[i].email}</p>
                <p><strong>Size:</strong> ${array[i].email}</p>
                <p><strong>On Pizza:</strong> ${array[i].select}</p>
                <p><strong>Pizza Size:</strong> ${array[i].size}</p>
            </li>
        `
    }
}