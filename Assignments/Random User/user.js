const profileImageElement = document.getElementById("profile-image");
const userNameElement = document.getElementById("user-name");
const infoButtons = document.querySelectorAll(".additional-info-button");
const additionalInfoElement = document.getElementById("additional-info");
const getUserButton = document.getElementById('get-user');

// console.log(infoButtons);

// fetch call to the api --fetch()
const fetchUser = () => {
    fetch("https://randomuser.me/api/")
    .then((res) => {
    return res.json();
    })
    .then((data) => {
        // console.log(data);
        // console.log(data.results[0]);
        const {
        email,
        phone,
        name: { title, first, last },
        dob: { age },
        picture: { large },
        } = data.results[0];

        const additionalInfo = { age: age, email: email, phone: phone };

        // console.log("title", title);
        // console.log("first", first);
        // console.log("email", email);
        // console.log("last", last);
        // console.log("phone", phone);
        // console.log("age", age);
        // console.log("large", large);

        // setting Image
        profileImageElement.setAttribute("src", large);

        // setting Name
        userNameElement.textContent = `${title} ${first} ${last}`;

        infoButtons.forEach((button) => {
        button.addEventListener("click", (ev) => {
            console.log(ev.target.dataset.attr2);
            additionalInfoElement.textContent = additionalInfo[ev.target.dataset.attr]
        });
        });
    })
}

fetchUser();

getUserButton.addEventListener('click', fetchUser )