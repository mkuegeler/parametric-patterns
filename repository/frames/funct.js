////////////////////////////////////////////////////////////////////////////////
// helper functions
////////////////////////////////////////////////////////////////////////////////
// get position of canvas
// params = {boxw:boxw, width:width, boxh:boxh, height:height};
function position (params) {
	return {x:((params.boxw/2)-(params.width/2)), y:((params.boxh/2)-(params.height/2))};
}
////////////////////////////////////////////////////////////////////////////////
// returns center point of a rectangle
function getCenter (w,h) {
	return {x:(w/2),y:(h/2)};
}
////////////////////////////////////////////////////////////////////////////////
// creates a rectangle based on a center point
// factor = offset factor
// return points array. 
// return [{x:0,y:0},{x:0,y:0}]
function frame (cx,cy,w,h,f) {
	
w = (w-f.w);
h = (h-f.h);

	return [
		        {x:(cx-(w/2)),y:(cy-(h/2))}, 					
		        {x:(cx+(w/2)),y:(cy-(h/2))}, 
		        {x:(cx+(w/2)),y:(cy+(h/2))},
		        {x:(cx-(w/2)),y:(cy+(h/2))},
		        {x:(cx-(w/2)),y:(cy-(h/2))}
	];

}
////////////////////////////////////////////////////////////////////////////////
// get interior center points of a rectangle
// return [{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}]

function getCenterList (cx,cy,w,h,f) {
	
w = (w-f.w);
h = (h-f.h);

	return [
		        {x:(cx-(w/4)),y:(cy-(h/4))}, 					
		        {x:(cx+(w/4)),y:(cy-(h/4))}, 
		        {x:(cx+(w/4)),y:(cy+(h/4))},
		        {x:(cx-(w/4)),y:(cy+(h/4))},
		        {x:(cx-(w/4)),y:(cy-(h/4))}
		       
	];
	
}
////////////////////////////////////////////////////////////////////////////////
// create path for animations
// requires point array: [{x:0,y:0},{x:0,y:0}]
// returns a string of format: "M0 0 L10 10"
function getPath (params) {
	
	var points = "M"+params[0].x+" "+params[0].y;	 	
	params.shift();	
	params.forEach(function(p) { points += " L"+p.x+" "+p.y+" ";	});	
  return points;
}
////////////////////////////////////////////////////////////////////////////////
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
  for (var e in params.slide) {
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
  for (var e in params.defs) {
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

  return {name:"container", id:container.id, frame:frame.id};

}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
function Frame1(params) {	
	
	var el = params.Frame1.el;
	delete params.Frame1.el;

  var layer = params.Frame1.layer;
	delete params.Frame1.layer;
		
	// Essential settings
	var _params = params.Frame1;
	    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	var defs = layer.find(function(layer) {return layer.name === "defs"; }).id;		
	
	var box_style = _params.box_style;
	var grid_style = _params.grid_style;
	
	// Composition settings
	// Level 1: Boundary Box
	var offset = {w:_params.offset,h:_params.offset};
	
	var width = params.container.width;
	var height = params.container.height;
	
	var m = getCenter(width,height);
	
	var center = el.circle({layer:_params.layer,style: box_style, r:offset.w,cx:m.x,cy:m.y});
	
	var box_frame = el.polyline({layer:_params.layer,style: box_style, points: el.coordinates(frame(m.x,m.y,width,height,offset))});
	
	// Level 2: Grid
	// defined in vars.js
	
	var x = m.x;
	var y = m.y;
	
	var AmountX = _params.AmountX;
	var AmountY = _params.AmountY;
	
  var g = {x:x,y:y,height:(height-offset.h), width:(width-offset.w), AmountX:AmountX,AmountY:AmountY};
	
	var panel_offset = _params.panel_offset;
	var panel_style = _params.panel_style;
	
	// var p = {layer:_params.layer,x:x,y:y,height:(height-offset.h),width:(width-offset.w),offset:offset,AmountX:AmountX,AmountY:AmountY,style:grid_style};
	
	var d = [
		{layer:_params.layer,x:x,y:y,height:(height-offset.h),width:(width-offset.w),offset:offset,AmountX:AmountX,AmountY:AmountY,style:grid_style}		
					];
		
	var grid = [
		el.grid(d[0])
	];
	
	var p = [
		{layer:_params.layer,x:x,y:y,height:(height-offset.h),width:(width-offset.w),offset:panel_offset,AmountX:AmountX,AmountY:AmountY,style:panel_style}		
					];
		
	var panel = [
		el.panel(p[0])
	];
	
	
	
	
		
	return null;
}
////////////////////////////////////////////////////////////////////////////////
define({
slide: function (params) { return slide(params); },
defs: function (params) { return defs(params); },
container: function (params) { return container(params); },
Frame1: function (params) { return Frame1 (params); }
// EOF
});
