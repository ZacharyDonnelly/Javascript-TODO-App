const list = document.querySelector('#My-UL');
const input = document.querySelector(".add__description");

function mainContent()  {
    document.querySelector(".add__btn").addEventListener("click", function() {
        var createP, text, textnode;
        list.innerHTML = '<li>' + input.value + '</li>';

        list.addEventListener("click", function(e) {
                let t = e.target;
                if (t.classList.contains('checked')){
                    t.parentNode.removeChild(t)
                }else {
                    t.classList.add('checked')
                }
            }
        );
        // createLI.ID = newArray.listArray[newArray.listArray.length + 1];
        if (text === "") {
            alert("Please enter something");
        }
    });
}
document.querySelector('body').addEventListener('DOMContentLoaded', mainContent())



        // OLD CONTENT BELOW

        // createP = document.createElement("p");
        // createP.className = "list-items";
        // createP.id = newArray.listArray.push(createP);
        // text = document.querySelector(".add__description").value;
        // textnode = document.createTextNode(text);
        // createP.appendChild(textnode);
        // document.getElementById("My-UL").appendChild(createP);

        // Create Delete button
        // var delButton = document.querySelector(".delete-button");
        // delButton.className = "delete-button";
        // delButton.id = newArray.deleteArray.push(delButton);
        // var delBtnData = document.createTextNode("delete");
        // delButton.appendChild(delBtnData);
        // document.getElementById("My-UL").appendChild(delButton);