import {app} from '../../module.js';

let NAVHEIGHT = 80;

class HomeController {
  constructor($routeParams) {
    this.routeParams = $routeParams;
  }

  activate() {
    let id = this.routeParams.section;
    if(id=='landing'){
      $("html, body").animate({ scrollTop: 0}, 125);
    } else {
      $("html, body").animate({ scrollTop: $('#homeSection-' + id).offset().top-NAVHEIGHT}, 125, ()=>{
        $(window).scroll();
      });
    }
  }
}

app.controller('HomeController', ['$routeParams', HomeController]);
