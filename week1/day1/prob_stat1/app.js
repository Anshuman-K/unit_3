//then catch
// const getData = () => {
//   let movie = document.getElementById("movie_name").value;

//   fetch(`https://www.omdbapi.com/?s=${movie}&apikey=e37dcc9e`)
//     .then((res) => {
//       let data = res.json();
//       data.then((res) => {
//         console.log(res.Search);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   movie.value = "";
// };

// async await

const getData = async () => {
  let movie = document.getElementById("movie_name").value;
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?s=${movie}&apikey=e37dcc9e`
    );
    let data = await res.json();
    let movArr = data.Search;
    console.log("movArr:", movArr);
    movArr.forEach((el) => {
      console.log(el);
      let main_div = document.getElementById("content");
      let card = document.createElement("div");
      let img_div = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.Poster;
      img_div.appendChild(img);
      let con_div = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.innerText = el.Title;
      con_div.append(h2);
      card.append(img_div, con_div);
      main_div.appendChild(card);
    });

    movie.innerText = "";
  } catch (err) {
    console.log("Error:", err);
  }
};

let getMovie = document.getElementById("getMovie");
getMovie.addEventListener("click", getData);
