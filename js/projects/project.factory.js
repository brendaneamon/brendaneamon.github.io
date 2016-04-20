(function(){
  "use strict";

  angular
    .module("projects")
    .factory( "Project", [
      "$resource",
      ProjectFactory
    ]);

  function ProjectFactory($resource){
    return $resource("db/data.js");
  }
}());
