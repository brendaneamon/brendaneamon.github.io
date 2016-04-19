(function(){
  "use strict";

  angular
  .module("projects")
  .controller("ShowController", [
    "Project",
    "$stateParams",
    ShowController
  ]);

  function ShowController(ProjectFactory, $stateParams){
    this.project = ProjectFactory.get({title: $stateParams.title});
  }
}());
