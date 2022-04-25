// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies_div = document.getElementById("movies");
let id;

let p =  localStorage.getItem("amount") || 0; 
let w = document.getElementById("wallet")
w.innerText=p;


async function searchMovies(){
  try{
   const query = document.getElementById("search").value; 
   const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=ae1a2bd8`);
   const data = await res.json();
    
   console.log(data);
    //  console.log(image);
  const movies = data.Search;
 
  console.log(movies);
  return movies;


}catch(err){
    console.log(err);
}
}

function appendMovies(data){
    movies_div.innerHTML = null;
    data.forEach(function(el){
        let image = document.createElement("img");
        image.src= el.Poster;
         
        let p = document.createElement("p");
        p.innerText= el.Title;
        let btn = document.createElement("button");
        btn.innerText = "Book Now"
        btn.className = "book_now";
        
        btn.onclick = function addToList(){
            localStorage.setItem("movie", JSON.stringify(el));
            window.location.href="checkout.html";
             
        }
         
        let div = document.createElement("div");
        div.className="Movie_Tab";
        div.append(image,p,btn);
        movies_div.append(div);

    



    });

}


async function main(){
    let data = await searchMovies();
    if(data === undefined){
        return false;
    }

    appendMovies(data);
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}

