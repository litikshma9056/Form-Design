function save() {
    let name = document.getElementById("name").value;
    console.log("Name:", name);
    localStorage.setItem("name", name)

    let cricketHobby = document.getElementById("cricketHobby").checked;
    console.log("Cricket Hobby:", cricketHobby);
    localStorage.setItem("Cricket Hobby:", cricketHobby)

    let chessHobby = document.getElementById("chessHobby").checked;
    console.log("Chess Hobby:", chessHobby);
    localStorage.setItem("Chess Hobby:", chessHobby)

    let paintingHobby = document.getElementById("paintingHobby").checked;
    console.log("Painting Hobby:", paintingHobby);
    localStorage.setItem("Painting Hobby:", paintingHobby);

    let city = document.getElementById("city").value;
    console.log("City:", city);
    localStorage.setItem("City:", city);

    let address = document.getElementById("address").value;
    console.log("Address:", address);
    localStorage.setItem("Address:", address);

    let age = document.getElementById("age").value;
    console.log("Age:", age);
    localStorage.setItem("Age:", age);

    let email = document.getElementById("email").value;
    console.log("Email:", email);
    localStorage.setItem("Email:", email);

    // let info={name:name,cricketHobby:cricketHobby,paintingHobby:paintingHobby,city:city,address:address,age:age,email:email}
    // let student =JSON.stringify(info)
    // console.log("student",student)
    // localStorage.setItem("student",student)


}
