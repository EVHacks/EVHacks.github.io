import angular from 'angular';
import router from 'angular-new-router';
import {app} from '../module.js';
import '../components/home/home';
import '../components/navbar/navbar';
import '../components/footer/footer';
import '../components/header/header';

class AppController {
  constructor($router){
    $router.config([
      {path: '/home/:section', components: {
        'header': 'header',
        'main': 'home',
        'nav': 'navbar',
        'footer': 'footer'
      }, as: 'home'},
      {path: '/', redirectTo: '/home/0'}
    ]);
    this.world = 'Hello, world!';
  }
}
// app.config(['$locationProvider', function($locationProvider) {
//        $locationProvider.html5Mode(true);
//    }]);
app.controller('AppController', ['$router', AppController]);
