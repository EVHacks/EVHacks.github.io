import {app} from '../../module.js';

let NAVHEIGHT = 108;

class HomeController {
  constructor($routeParams) {
    this.routeParams = $routeParams;
    this.map = {
      center: {
        latitude: 37.323098,
        longitude: -121.778666
      },
      zoom: 14,
      options: {
        scrollwheel: false
      }
    };
    this.marker = {
      idKey: 128,
      coords: {
        latitude: 37.323098,
        longitude: -121.778666
      }
    }
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
