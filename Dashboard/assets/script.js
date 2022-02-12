const iframe = document.querySelector('.map');
const sidebar_list = document.querySelector('.sidebar_list');

//-----------//
// Régional //
//----------//

// 1) Sidemenu - Button
//---------------------

// (0) general
const table = document.querySelector('#region')


// (1) 2017
var months = [ {"id":1,"name":"January"}, {"id":2,"name":"February"} ];

// Array
let result_2017 =
[
    {"id" : "premier_presidentielle",
    "iframe_src" : "/region(1er).html"},

    {"id" : "deuxieme_presidentielle",
    "iframe_src" : "/region(2eme).html"},         
    
]

// Button
const btn_premier_presidentielle = table.querySelector('#premier_presidentielle');
const btn_deuxieme_presidentielle = table.querySelector('#deuxieme_presidentielle');

// addEventListner for Button
btn_premier_presidentielle.addEventListener('click',showMap);
btn_deuxieme_presidentielle.addEventListener('click',showMap);

// Function
function showMap(event){
    id = event.path[0].id;

    result_2017.forEach(function(element) {
            if (element.id === id) {
                iframe.setAttribute("src", element.iframe_src);
            }
        }
        );
}