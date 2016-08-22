requirejs.config({
    //By default load configuration
    baseUrl: '../../js/conf',
    //except, if the module ID starts with "app",
    //load it from the scripts/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
		    repo: '../../repository/1'
    }
});


requirejs(['comp', 'style', 'repo/funct', 'repo/vars', 'app/svg'],
function (comp,style,funct,vars) {

style.assembler = function (params,el) {
  var i = 0; var layer = [];
  for (var p in params) {
       params[p].el = el; params[p].layer = layer; layer[i] = funct[p](params); i++;
  } return el;
}

var library = [], canvas;
vars.variants.forEach(function(v) {

   library.push(
     function (s) {
               return s.assembler(v,new medigeist(s));
           }
   );
});


comp.compose(library);
comp.session(library,style);


//////////////////////////////////////////////////////////////////////////////////////////////

});
