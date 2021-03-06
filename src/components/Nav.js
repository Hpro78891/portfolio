import React from 'react'

function Nav() {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          Rishabh
        </a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#home" class="nav__link">
                <i class="uil uil-estate nav__icon"></i> home
              </a>{" "}
            </li>

            <li class="nav__item">
              <a href="#user" class="nav__link">
                <i class="uil uil-user nav__icon"></i>user
              </a>{" "}
            </li>

            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>{" "}
            </li>

            <li class="nav__item">
              <a href="#services" class="nav__link">
                <i class="uil uil-briefcase nav__icon"></i> Services
              </a>{" "}
            </li>

            <li class="nav__item">
              <a href="#protfolio" class="nav__link">
                <i class="uil uil-scenery nav__icon"></i> Portfolio
              </a>{" "}
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="uil uil-message nav__icon"></i> contact
              </a>{" "}
            </li>
          </ul>

          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div class="nav__btns">
          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps "></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

git