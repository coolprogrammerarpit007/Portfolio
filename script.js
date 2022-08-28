// Code for the responsive nav tag

let icon = document.getElementById('icon');
let x = document.getElementById('navbar');

icon.addEventListener('click',(e) =>{
    console.log('click me!!');
    
    if(x.className === "topnav"){
        // console.log('hello');
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
});

