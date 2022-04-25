// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let p =  localStorage.getItem("amount") || 0; 
let w = document.getElementById("wallet")
w.innerText=p;


let movies = document.getElementById("movie")
let data = JSON.parse(localStorage.getItem("movie"));
//  console.log(data.Title);
 
    let image = document.createElement("img");
    image.src= data.Poster;
    image.style.alignContent = "center"
    
    let name = document.createElement("p");
    name.innerText= data.Title;
     
    movies.append(name,image);
 

    function booking(){
        let quantity = document.getElementById("number_of_seats").value;
        let total = 100*(+quantity);
        if(total<=p){
            p=p-total;
            localStorage.setItem("amount", JSON.stringify(p));
            location.reload(); 
            console.log(p);
            alert("Booking successful!");

        }
        else if (total>p)
        alert("Insufficient Balance!");
       
    }