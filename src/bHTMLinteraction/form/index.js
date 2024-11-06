function myFunct() {
    const form = document.querySelector('.form'); // Get by the class
    const answer = document.querySelector('.answer');

    const persons = [];

    function recieveFormData(event) {
        event.preventDefault();

        const name = form.querySelector(".Name");
        const lastname = form.querySelector(".LastName");
        const weight = form.querySelector(".Weight");
        const height = form.querySelector(".Height");

        persons.push({

            name: name.value,
            lastname: lastname.value,
            weight: Number(weight.value),
            height: Number(height.value)

        });

        console.log(persons);


        answer.innerHTML += `<p>
        Name: ${name.value}<br>
        LastName: ${lastname.value}<br>
        Weight: ${Number(weight.value).toFixed(2)}Kg<br>
        Height: ${Number(height.value).toFixed(2)}m<br>
        </p>`

    }
    
    form.addEventListener('submit', recieveFormData);

}

myFunct();