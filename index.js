const list = document.querySelector('#My-UL');
const input = document.querySelector(".add__description");
const foot = document.querySelector(".footer");
const dated = new Date().toLocaleString();


(function()  {
    document.querySelector(".add__btn").addEventListener("click", function(e) {
        e.preventDefault();
        list.innerHTML += '<li>- ' + input.value + '</li>';
        store();
        input.value = "";
        // if (input.value === "") {
        //     alert("Please enter something");
        // }
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
             list.innerHTML = '<li>- Welcome to my todo list!</li>' + '<li>- In order to delete an item</li>' + '<li>- Just double click the item you would like to delete!</li>';
         }else {
              list.innerHTML = storedValue;
         }
      }
      getValues();
      foot.textContent = dated;
})();