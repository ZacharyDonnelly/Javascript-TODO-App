const list = document.querySelector('#My-UL');
const input = document.querySelector(".add__description");

(function()  {
    document.querySelector(".add__btn").addEventListener("click", function(e) {
        e.preventDefault();
        list.innerHTML += '<li>' + input.value + '</li>';
        store();
        if (input.value === "") {
            alert("Please enter something");
        }
        input.value = "";
    },false);
    list.addEventListener("click", function(e) {
        let t = e.target;
        if (t.classList.contains('checked')){
            t.parentNode.removeChild(t)
        }else {
            t.classList.add('checked')
        }
        store();
    },false);

    function store() { 
        window.localStorage.myItems = list.innerHTML;
     }

     function getValues() { 
         let storedValue = window.localStorage.myItems;
         if(!storedValue){
             list.innerHTML = '<li>Welcome to my todo list!</li>' + '<li>In order to delete an item</li>' + '<li>Just double click the item you would like to delete!</li>';
         }else {
              list.innerHTML = storedValue;
         }
      }
      getValues();




})();
// document.querySelector('body').addEventListener('DOMContentLoaded', mainContent())



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