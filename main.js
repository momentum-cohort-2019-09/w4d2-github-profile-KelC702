fetch("https://swapi.co/api/people/14/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#name').innerHTML = data.name
        return fetch(data.homeworld)
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('#homeworld').innerHTML = data.name
    })
const myForm = document.getElementById("myForm")
const myField = document.getElementById("myField")
myForm.addEventListener("submit", function() {
    event.preventDefault()
    const value = myField.value

    fetch(`https://swapi.co/api/people/?search=${value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#value').innerHTML = data.any
            const name = data.name
            const height = data.height
            const mass = data.mass
            const hairColor = data.hairColor
            const skinColor = data.skinColor


        })



})