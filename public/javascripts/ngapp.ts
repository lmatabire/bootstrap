namespace Lesson06 {
  let module:ng.IModule = angular.module('app', [
      'ui.router', 'app.home'
  ]);

  module.config(Lesson06.Configuration);
}
