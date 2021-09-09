function navbar() {
  return `
    <nav>
      <div id="navbar">
        <div>
          <h1><a href="./index.html">food ME</a></h1>
        </div>
        <div>
          <div>
            <input type="text" id="food_name" placeholder="Enter Recepie" />
          </div>
        </div>
        <div>
          <ul>
          <li><a href="./index.html">HOME</a></li>
            <li><a href="./feature.html">FEATURE</a></li>
            <li><a href="./latest.html">LATEST</a></li>
          </ul>
        </div>
      </div>
    </nav>
    `;
}

export default navbar;
