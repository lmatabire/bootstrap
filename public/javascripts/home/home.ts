namespace Lesson06.Home {
  let module:ng.IModule = angular.module('app.home', []);

  module.config(Home.Configuration);

  module.controller('HomeController', Home.HomeController);

}
