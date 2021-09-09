async function getResults(name) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  let data = await res.json();
  // console.log("data:", data.meals);
  return data.meals;
}

async function getvalue() {
  let name = document.getElementById("food_name").value;
  let results = await getResults(name);
  let data = document.getElementById("data");
  // console.log("data:", data);
  // console.log(results);
  results.forEach(({ strMealThumb, strMeal, strCategory, strArea }) => {
    // console.log(element);
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = strMealThumb;
    div1.append(img);
    let div2 = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = strMeal;
    let p = document.createElement("p");
    p.innerText = strCategory;
    let p1 = document.createElement("p");
    p1.innerText = strArea;
    div2.append(h3, p, p1);
    div.append(div1, div2);
    data.append(div);
  });
}

export default getvalue;
