function Todo(id, task) {
    this.id = id;
    this.task = task;
}

var newArray = {
    listArray: [],
    deleteArray: []
};

function createItem() {
    document.querySelector(".add__btn").addEventListener("click", function() {
        // Create paragraph
        var createP, text, textnode, ID;
        createP = document.createElement("p");
        createP.className = "list-items";
        createP.id = newArray.listArray.push(createP);
        text = document.querySelector(".add__description").value;
        textnode = document.createTextNode(text);
        createP.appendChild(textnode);
        document.getElementById("My-UL").appendChild(createP);

        // Create Delete button
        var delButton = document.createElement("button");
        delButton.className = "delete-button";
        delButton.id = newArray.deleteArray.push(delButton);
        var delBtnData = document.createTextNode("delete");
        delButton.appendChild(delBtnData);
        document.getElementById("My-UL").appendChild(delButton);
        delButton.addEventListener(
            "click",
            function() {
                createP.parentNode.removeChild(createP);
            },
            false
        );
        createP.appendChild(delButton);
        // createLI.ID = newArray.listArray[newArray.listArray.length + 1];
        if (text === "") {
            alert("Please enter something");
        }
    });
}

// function deleteButton() {
//     document.querySelector(".add__btn").addEventListener("click", function() {
//         var delButton = document.createElement("button");
//         delButton.className = "delete-button";
//         delButton.id = newArray.deleteArray.push(delButton);
//         var delBtnData = document.createTextNode("delete");
//         delButton.appendChild(delBtnData);
//         document.getElementById("My-UL").appendChild(delButton);
//     });
// }

createItem();
// deleteButton();
console.log("error check");