import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle';
const Header = () => {
  return (

    <nav class ='header' className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#about" class="nav-link"> &nbsp;About</a></li>
            <li class="nav-item"><a href="/Contacts" class="nav-link"> &nbsp;Contact</a></li>
        </ul>
    </div>
    </nav>
  );
};

export default Header;