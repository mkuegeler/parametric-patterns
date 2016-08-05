////////////////////////////////////////////////////////////////////////////////
// Create the object: AbstractGrid
////////////////////////////////////////////////////////////////////////////////
function createAbstractGrid (params) {

	//params: x,y,height,width,AmountX,AmountY

	var x = params.x;
	var y = params.y;
	var height = params.height;
	var width = params.width;
	var AmountX = params.AmountX;
	var AmountY = params.AmountY;

	var i,j;
	var x1 = x;
	var y1 = y;
	var x2;
	var y2;
	var pm = 0;
	var all = 0;
	var offset = 0;
	var border = 0;

	var grid = new Array();

  for (i=0;i <= (AmountX) ;i++) {

	        pm = ((width/AmountX)*i);
	        x1 = (x+pm);
	        y1 = y;

					x2 = x1;
	        y2 = (y+height);

					grid[all] = {x1: x1, y1: y1, x2: x2, y2: y2};
	        all++;

   }

	 for (j=0;j <= (AmountY) ;j++) {

         pm = ((height/AmountY)*j);
				 x1 = x;
				 y1 = (y+pm);

				 x2 = (x+width);
				 y2 = y1;

		     grid[all] = {x1: x1, y1: y1, x2: x2, y2: y2};
		     all++;

	 }

return grid;

}
///////////////////////////////////////////////////////////////////////////////
//Create the object: Grid
///////////////////////////////////////////////////////////////////////////////

function createGrid (params) {


	  var el = params.el;
		var layer = params.layer;
		var transform = params.transform;
		var x = params.x;
  	var y = params.y;
		var height = params.height;
		var width = params.width;
		var AmountX = params.AmountX;
		var AmountY = params.AmountY;
		var style = params.style;



		params = {x:x,y:y,height:height,width:width,AmountX:AmountX,AmountY:AmountY};
	  var AbstractGrid =createAbstractGrid(params);


		var grid = el.g({layer:layer, transform:transform});


    for (i=0; i<AbstractGrid.length;i++) {

        params = {layer: grid.id, x1 : AbstractGrid[i].x1, y1: AbstractGrid[i].y1, x2: AbstractGrid[i].x2, y2:AbstractGrid[i].y2, style: style};
        el.line(params);

	}

    return grid;
}

////////////////////////////////////////////////////////////////////////////////
//creates a list of abstract grid points (horizontal and vertical)
//returns a hash array with two coordinates

function createAbstractGridNodes (params) {

	 /////////////////////////////////

	 var x = params.x;
 	 var y = params.y;
 	 var height = params.height;
 	 var width = params.width;
 	 var AmountX = params.AmountX;
 	 var AmountY = params.AmountY;

	 /////////////////////////////////



		var i,j;
    var x1 = x;
    var y1 = y;
    var pm = 0;
    var all = 0;
    var offset = 0;
    var border = 0;

		var grid = new Array();

for (j=offset;j <= (AmountY+border) ;j++) {

    for (i=offset;i <= (AmountX+border) ;i++) {

        pm = ((width/AmountX)*i);
        x1 = (x+pm);
        y1 = (y+((height/AmountY)*j));

        grid[all] = {x1: x1, y1: y1};
        all++;

     }

}

return grid;

}
////////////////////////////////////////////////////////////////////////////////
function createGridNodes (params) {

	var el = params.el;
	var layer = params.layer;
	var transform = params.transform;
	var x = 0;
	var y = 0;
	var height = params.height;
	var width = params.width;
	var AmountX = params.AmountX;
	var AmountY = params.AmountY;
	var style = params.style;

  var r = params.r;

	params = {x:x,y:y,height:height,width:width,AmountX:AmountX,AmountY:AmountY};
	var AbstractGridNodes =createAbstractGridNodes(params);

	var gridNodes = el.g({layer:layer, transform:transform});


	for (i=0; i<AbstractGridNodes.length;i++) {

			params = {layer: gridNodes.id, r:r, cx : AbstractGridNodes[i].x1, cy: AbstractGridNodes[i].y1, style: style};
			el.circle(params);

	}

	return gridNodes;


}
////////////////////////////////////////////////////////////////////////////////
//creates a list of abstract grid points (horizontal and vertical)
//returns a hash array with two coordinates

function createAbstractGridPanels (params) {

	 /////////////////////////////////
	 var x = params.x;
 	 var y = params.y;
 	 var height = params.height;
 	 var width = params.width;
 	 var AmountX = params.AmountX;
 	 var AmountY = params.AmountY;

	 /////////////////////////////////



	var i,j;
    var x1 = x;
    var y1 = y;
    var pm = 0;
    var all = 0;

		var grid = new Array();


for (j=0;j < (AmountY) ;j++) {

    for (i=0;i < (AmountX) ;i++) {

        pm = ((width/AmountX)*i);

        x1 = (x+pm);
        y1 = (y+((height/AmountY)*j));

        grid[all] = {x1: x1, y1: y1};
        all++;

     }

}

return grid;

}
////////////////////////////////////////////////////////////////////////////////
function createGridPanels (params) {

	var el = params.el;
	var layer = params.layer;
	var transform = params.transform;

	var x = params.x;
	var y = params.y;
    
	var rx = params.rx;
	var ry = params.ry;
	var height = params.height;
	var width = params.width;
	var AmountX = params.AmountX;
	var AmountY = params.AmountY;
	var style = params.style;
    
    var offset = params.offset;

    var w = (width/AmountX);
	var h = (height/AmountY);
    
    w = (w-offset);
    h = (h-offset);

	params = {x:x,y:y,height:height,width:width,AmountX:AmountX,AmountY:AmountY};

	var AbstractGridPanels =createAbstractGridPanels(params);

	var GridPanels = el.g({layer:layer, transform:transform});
    
    // var rect_transform = "matrix(10,40,2,2,4,4)";
    // var rect_transform = "translate(40,40)";

    //  transform: rect_transform

	//for (i=0; i<AbstractGridPanels.length;i++) {
    //    params = {layer: GridPanels.id, x : AbstractGridPanels[i].x1, y: AbstractGridPanels[i].y1, width:w, height:h, rx:rx, ry:ry, style: style};
	//		el.rect(params);
	//}
    
    for (i=0; i<AbstractGridPanels.length;i++) {
        params = {layer: GridPanels.id, x : (AbstractGridPanels[i].x1+(offset/2)), y: (AbstractGridPanels[i].y1+(offset/2)), width:w, height:h, rx:rx, ry:ry, style: style};
        el.rect(params);
    }

	return GridPanels;

}
////////////////////////////////////////////////////////////////////////////////
// get position of canvas
// params = {boxw:boxw, width:width, boxh:boxh, height:height};
function position (params) {
	return {x:((params.boxw/2)-(params.width/2)), y:((params.boxh/2)-(params.height/2))};
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// main functions
function slide (params) {

  var el = params.slide.el;
  delete params.slide.el;

  // console.log(params.layer);
  // console.log(params);
  // params.layer.foreach(function (e) {console.log(e); } );
  delete params.slide.layer;

  // validate default parameters
  var _params = {};
  for (e in params.slide) {
    // console.log(e+":"+params[e]);
    _params[e] = params.slide[e];

  }

  var root = el.svg(_params);

  return {name:"slide", id:root.id};


}

////////////////////////////////////////////////////////////////////////////////
function defs (params) {

  var el = params.defs.el;
  delete params.defs.el;

  var layer = params.defs.layer;
  delete params.defs.layer;
  params.defs.layer = layer.find(function(layer) {return layer.name === "slide"; }).id;

  // validate default parameters
  var _params = {};
  for (e in params.defs) {
    // console.log(e+":"+params[e]);
    _params[e] = params.defs[e];

  }

  var defs = el.defs(_params);
  return {name:"defs", id:defs.id};

}
////////////////////////////////////////////////////////////////////////////////
function container (params) {

  var el = params.container.el;
  delete params.container.el;

  var layer = params.container.layer;
  delete params.container.layer;

  var _params = {
		  layer: layer.find(function(layer) {return layer.name === "slide"; }).id,
		      x: (params.container.x-(params.container.offset/2)),
		      y: (params.container.y-(params.container.offset/2)),
		  width: (params.container.width+params.container.offset),
		 height: (params.container.height+params.container.offset),
  transform: "translate("+position({boxw:params.slide.boxw, width:params.container.width,
		   boxh: params.slide.boxh, height:params.container.height}).x+","+position({boxw:params.slide.boxw, width:params.container.width,
			 boxh: params.slide.boxh, height:params.container.height}).y+")"
  };

  var container = el.g(_params);

  _params = {
      layer: container.id,
          x: _params.x,
          y: _params.y,
      width: _params.width,
     height: _params.height,
         rx: params.container.rx,
         ry: params.container.ry,
      style: params.container.style,
  transform: "translate("+params.container.x+","+params.container.y+")"
  };

  var frame = el.rect(_params);

  return {name:"container", id:container.id};

}
////////////////////////////////////////////////////////////////////////////////
function gridElement (params) {

  var el = params.gridElement.el;
  delete params.gridElement.el;

  var layer = params.gridElement.layer;
  delete params.gridElement.layer;

  params = {
		  layer: layer.find(function(layer) {return layer.name === "container"; }).id,
			   el: el,
		      x: params.container.x,
		      y: params.container.y,
		  width: params.container.width,
		 height: params.container.height,
	  AmountX: params.container.AmountX,
	  AmountY: params.container.AmountY,
		  style: params.gridElement.style,
  transform: "translate("+params.container.x+","+params.container.y+")"
  };
	var grid = createGrid(params);

  return {name:"grid", id:grid.id};

}
////////////////////////////////////////////////////////////////////////////////
function node (params) {

  var el = params.node.el;
  delete params.node.el;

  var layer = params.node.layer;
  delete params.node.layer;

  params = {
		  layer: layer.find(function(layer) {return layer.name === "container"; }).id,
			   el: el,
		      x: params.container.x,
		      r: params.node.r,
		  width: params.container.width,
		 height: params.container.height,
	  AmountX: params.container.AmountX,
	  AmountY: params.container.AmountY,
		  style: params.node.style,
  transform: "translate("+params.container.x+","+params.container.y+")"
  };
	var node = createGridNodes(params);

  return {name:"node", id:node.id};

}
////////////////////////////////////////////////////////////////////////////////
function panel (params) {

  var el = params.panel.el;
  delete params.panel.el;

  var layer = params.panel.layer;
  delete params.panel.layer;
    
  params = {
		  layer: layer.find(function(layer) {return layer.name === "container"; }).id,
			   el: el,
      
              x:  params.container.x,
		      y:  params.container.y,
				 rx: params.panel.rx,
				 ry: params.panel.ry,
		  
         width: params.container.width,
         height: params.container.height,
	  AmountX: params.container.AmountX,
	  AmountY: params.container.AmountY,
		  style: params.panel.style,
      
  transform: "translate("+params.container.x+","+params.container.y+")",
  offset: params.panel.offset
  };

	var panel = createGridPanels(params);

  return {name:"panel", id:panel.id};

}
////////////////////////////////////////////////////////////////////////////////
define({
slide: function (params) { return slide(params); },
defs: function (params) { return defs(params); },
container: function (params) { return container(params); },
gridElement: function (params) { return gridElement(params); },
panel: function (params) { return panel(params); },
node: function (params) { return node(params); }
// EOF
});
