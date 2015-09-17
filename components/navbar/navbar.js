import {app} from '../../module.js';

let NAVHEIGHT = 64;

class NavbarController {
  constructor() {

  }

  activate() {
    $(window).scroll(()=>{
      if($(window).scrollTop() < NAVHEIGHT){
        $('.main-navbar').addClass('main-navbar-fill-transparent').removeClass('main-navbar-fill-regular');
      } else {
        $('.main-navbar').addClass('main-navbar-fill-regular').removeClass('main-navbar-fill-transparent');
      }
    });
    $(window).scroll();
  }
}

app.controller('NavbarController', [NavbarController]);
