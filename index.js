let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            //json'dan okunan verinin data array'ine atanması
            data = responseData;

            //veri geldikten sonra filtreleme butonu görünür olsun
            let filterButton = document.querySelector("#filterButton");
            filterButton.setAttribute("style", "");

            //verinin html içerisinde listelendiği fonksiyon
            listData(responseData);
        })
        .catch(err => {
            //hata yönetimi
            alert("Merhaba" + err + "hatası oluştu.")
        })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>name:</span> ${element.age}
            <span class='bold'>email:</span> ${element.isActive}
        </li>
        `;
    })
}


//verinin filtrelenmesini sağlayan fonksiyon
//TODO
let inputage = document.querySelector("#ageInput")
let inputisactive = document.querySelector("#isactiveInput")
let inputfirstletter = document.querySelector("#firstletterInput")

function filterData() {
    
    if (inputage.checked) {
        let filtereddata = data.filter(element => element.age > 17)
        listData(filtereddata);
    }
    if (inputisactive.checked) {
        let filtereddata = data.filter(element => element.isActive === true)
        listData(filtereddata);
    }

    if (inputage.checked && inputisactive.checked) {
        let filtereddata = data.filter(element => element.isActive === true && element.age > 17)
        listData(filtereddata);
    }

    if (inputage.checked && inputfirstletter.value != "") {
        let filtereddata = data.filter(element => element.age > 17 && element.name.charAt(0) === inputfirstletter.value)
        listData(filtereddata);
    }

    if (inputisactive.checked && inputfirstletter.value != ""){
        let filtereddata = data.filter(element => element.isActive === true && element.name.charAt(0) === inputfirstletter.value)
        listData(filtereddata);
    }

    if (inputfirstletter.value != "" && inputage.checked && inputisactive.checked){
        let filtereddata = data.filter(element => element.isActive === true && element.age > 17 && element.name.charAt(0) === inputfirstletter.value)
        listData(filtereddata);
    }

    if (inputfirstletter.value != "") {
        let filtereddata = data.filter(element => element.name.charAt(0) === inputfirstletter.value)
        listData(filtereddata);
    }

}