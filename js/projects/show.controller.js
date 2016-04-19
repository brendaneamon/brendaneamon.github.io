(function(){
  "use strict";

  angular
  .module("projects")
  .controller("ShowController", [
    "Project",
    "$stateParams",
    ShowController
  ]);

  function ShowController(Project, $stateParams){
    this.project = ProjectFactory.get({title: $stateParams.title});
  }
}());
