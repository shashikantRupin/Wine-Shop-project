function Navbar(){
    return `<div id="main">
    <div>
        <p>Mine Wine</p>
    </div>
    <div>
            <ul class="menu">
              <li><a href="#">CATEGORY</a>
                <ul class="submenu">
                  <li><a href="#">Red Wine</a></li>
                  <li><a href="#">Rose Wine</a></li>
                  <li><a href="#">White Wine</a></li>
                  <li><a href="#">Sparkling Wine</a></li>
                </ul>
              </li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">SETS & GIFTS</a></li>
              <li><a href="#">PROMOTIONS</a></li>
            </ul>              
        <input type="text" name="" id="navbar_inp" oninput="debounc(getdata,1000)" placeholder="Type To Search....">
    </div>
    <div>
        <button><i class="fa-solid fa-user"></i></button>
        <button><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div id="hamburger">
        <button><i class="fa-solid fa-bars"></i></button>
    </div>
</div>
<div id="debouncdata">

</div>`
}
export default Navbar;