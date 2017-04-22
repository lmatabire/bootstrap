namespace Lesson06.Home {
  Configuration.$inject = [
    '$stateProvider'
  ];

   export function Configuration(
     $stateProvider:
     ng.ui.IStateProvider
  ){
      $stateProvider
      .state('Home', <ng.ui.IState>{
         url:'/',
         templateUrl: 'javascripts/home/home.view.html',
         controller: 'HomeController',
         controllerAs: 'vm'
      });
    }
  }
