(function(){
  "use strict";

  angular
  .module("portfolio", [
    "ui.router",
    "projects"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    Router
  ]);

  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("projectIndex", {
      url: "/projects",
      templateUrl: "js/projects/index.html",
      controller: "IndexController",
      controllerAs: "IndexVM"
    })
    .state("projectShow", {
      url: "/projects/:title",
      templateUrl: "js/projects/show.html",
      controller: "ShowController",
      controllerAs: "ShowVM"
    });
  }

})();
