var Lesson06;
(function (Lesson06) {
    var Home;
    (function (Home) {
        Configuration.$inject = [
            '$stateProvider'
        ];
        function Configuration($stateProvider) {
            $stateProvider
                .state('Home', {
                url: '/',
                templateUrl: 'javascripts/home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
        }
        Home.Configuration = Configuration;
    })(Home = Lesson06.Home || (Lesson06.Home = {}));
})(Lesson06 || (Lesson06 = {}));
//# sourceMappingURL=home.config.js.map