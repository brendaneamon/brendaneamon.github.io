(function(){
  "use strict";

  angular
  .module("projects")
  .controller("IndexController", [
    "Project",
    IndexController
  ]);

  function IndexController (Project, $state){
    this.projects = Project.query();
    this.goToIndex = function(){
      $state.go("projectIndex");
    };
  }
}());
