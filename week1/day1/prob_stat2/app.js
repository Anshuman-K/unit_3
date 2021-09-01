function removePrev() {
  if (document.querySelector("#content>div") != null) {
    document.querySelector("#content>div").remove();
  }

  if (document.getElementById("error_div") !== null) {
    document.querySelector("#error_div").remove();
  }
}

//creating card using dom
function createCard(el) {
  removePrev();
  let main_div = document.getElementById("content");
  let card = document.createElement("div");
  main_div.appendChild(card);
  let img_div = document.createElement("div");
  let img = document.createElement("img");
  img.src = el.Poster;
  img_div.appendChild(img);
  let con_div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerText = `Title: ${el.Title}`;
  let p = document.createElement("p");
  p.innerText = `Releasing Year: ${el.Year}`;
  let rating = document.createElement("h4");
  rating.innerText = `Rating: ${el.Ratings[0].Value}`;
  let lead_actors = document.createElement("p");
  lead_actors.innerText = `Actors: ${el.Actors}`;
  con_div.append(h2, p, rating, lead_actors);
  card.append(img_div, con_div);
}

//create error page
function createError() {
  removePrev();
  let body = document.body;
  let divs = document.createElement("div");
  divs.setAttribute("id", "error_div");
  let inside = document.createElement("div");
  let img = document.createElement("img");
  img.src =
    "https://www.hotstar.com/assets/034501045372cd256031ea4bc0e78d23.svg";
  let h3 = document.createElement("h3");
  h3.innerText = "Nothing found!";
  let p = document.createElement("p");
  p.innerText = "Try searching for something else";
  body.appendChild(divs);
  divs.append(inside);
  inside.append(img, h3, p);
}

// async await fetching data
const getData = async () => {
  let movie = document.getElementById("movie_name").value;
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?t=${movie}&apikey=e37dcc9e`
    );
    let data = await res.json();
    // console.log(data);
    if (data.Response === "False") {
      createError();
    } else {
      createCard(data);
    }
    document.getElementById("movie_name").value = " ";
  } catch (err) {
    console.log("Error:", err);
  }
};

let getMovie = document.getElementById("getMovie");
getMovie.addEventListener("click", getData);
