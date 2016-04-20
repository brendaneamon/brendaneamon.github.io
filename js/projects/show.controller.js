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
    var vm = this;
    vm.projects = Project.get();
    console.dir(vm.projects);
    Project.get({title: $stateParams.title}, function(title){
      console.log($stateParams.title);
      vm.title = title;
    });
  }
}());
