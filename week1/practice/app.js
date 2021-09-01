// fetch("https://reqres.in/api/users?page=2")
//   .then((res) => {
//     // console.log(res.headers);
//     let data = res.json();
//     // console.log(data);
//     data
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const makeRequest = async () => {
  let data = await fetch("https://reqres.in/api/users?page=2");
  console.log("data:", data);

  let data1 = await data.json();
  console.log(data1.data);
};

// request();

const request = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  // console.log("data:", data);

  let data1 = await data.json();
  console.log(data1);
};

// request();

const getWeather = async () => {
  try {
    let city = document.getElementById("city").value;
    let temp = document.getElementById("temp");
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0bcd1604a4ad595f4d8a77db8ef40dd`
    );

    let data1 = await data.json();
    temp.innerText = data1.main.temp;
    console.log(data1);
  } catch (e) {
    console.log("Error:", e);
  }
};

// weather();
