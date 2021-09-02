// console.log("Hello");

// let obj = {
//   i: 1,
//   c: () => {
//     console.log(this.i, this);
//   },
//   b: function () {
//     console.log(this.i, this);
//   },
// };

// // console.log(obj);
// obj.c();
// obj.b();

// for of loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach((element, index) => {
//   console.log(element, index);
// });

// for (let el of arr) {
//   console.log(el);
// }

//Destructing

// let user = {
//   name: "Shubham",
//   age: 21,
//   city: "Ludhiana",
// };

// let name = user.name;
// console.log("name:", name);
// let age = user.age;
// console.log("age:", age);
// let city = user.city;
// console.log("city:", city);

// let { name, city, age } = user;
// console.log("name:", name);
// console.log("age:", age);
// console.log("city:", city);

// fetch("https://reqres.in/api/users?page=2").then((res) => {
//   return res.json().then((res) => {
//     let data = res.data;
//     let { first_name, last_name, email } = { ...data[0] };
//     console.log("email:", email);
//     console.log("last_name:", last_name);
//     console.log("first_name:", first_name);
//     console.log(data);
//   });
// });

// let country = async () => {
//   let res = await fetch("https://restcountries.eu/rest/v2/all");
//   let data = await res.json();
//   console.log(data);

//   for (let { name, capital, population, subregion } of data) {
//     // let { name, capital, population, subregion } = country;
//     console.log("country:", name, capital, population, subregion);
//   }
// };

// country();

// https://youtube.googleapis.com/youtube/v3/search?part=tesla&key=[YOUR_API_KEY]

async function getVideo() {
  let video = document.getElementById("video").value;

  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${video}$type=video&key=AIzaSyBc1vvVaO2HCoxToEX18cCYrDQ-R3-y4v0&maxResults=20`
  );

  let data = await res.json();
  console.log(data);
  for (let {
    id: { videoId },
  } of data.items) {
    let videoFrame = document.createElement("iframe");
    videoFrame.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    videoFrame.setAttribute("allowfullscreen", "");
    document.querySelector("#video-div").appendChild(videoFrame);
  }
}
