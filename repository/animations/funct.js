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
function animateMotionFrame1(params) {	
	
	var el = params.animateMotionFrame1.el;
	delete params.animateMotionFrame1.el;

  var layer = params.animateMotionFrame1.layer;
	delete params.animateMotionFrame1.layer;
		
	// Essential settings
	var _params = params.animateMotionFrame1;
	    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	var defs = layer.find(function(layer) {return layer.name === "defs"; }).id;		
	
	var start_button_offset = _params.start_button_offset;
	var start_button = el.circle({layer:_params.layer, r:_params.start_button_radius, transform:"translate("+(params.container.width/2)+","+(params.container.height+start_button_offset)+")",style: _params.start_button_style}); 
	
	var box_style = _params.box_style;
	var grid_style = _params.grid_style;
	
	// Composition settings
	// Level 1: Boundary Box
	var offset = {w:_params.offset,h:_params.offset};
	
	var width = params.container.width;
	var height = params.container.height;
	
	var m = getCenter(width,height);
	
	// var center = el.circle({layer:_params.layer,style: box_style, r:offset.w,cx:m.x,cy:m.y});
	
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
	
	// Grid
	for (var i=0; i<el.abstractGrid(g).length;i++) {       
        el.line({layer: _params.layer, x1 : el.abstractGrid(g)[i].x1, y1: el.abstractGrid(g)[i].y1, x2: el.abstractGrid(g)[i].x2, y2:el.abstractGrid(g)[i].y2, style: grid_style});
	  }	
	
	// Nodes 
	for (var j=0; j<el.abstractNodes(g).length;j++) {       
        el.circle({layer: _params.layer, r:(offset.w/2), cx : el.abstractNodes(g)[j].x1, cy: el.abstractNodes(g)[j].y1, style:box_style});		    
	  }	
	
	// Panels
	for (var k=0; k<el.abstractPanels(g).length;k++) { 
		   el.rect({layer: _params.layer, x : (el.abstractPanels(g)[k].x1+(panel_offset/2)), y: (el.abstractPanels(g)[k].y1+(panel_offset/2)), width:((g.width/AmountX)-panel_offset), height:((g.height/AmountY)-panel_offset), style:panel_style});
	  }	
	  
	
	return null;
}
////////////////////////////////////////////////////////////////////////////////
// Notes and description:
// Parametric Message Flow Animation
// Parameters: Left and right tenants (represented by left and right boxes)
// Each tenant consists of a sender and a receiver box
// The sender and the receiver box inhabits a grid which defines the amount of nodes (items) to be shared among the tenants.
// the sender and receiver boxes are connected by channels. The width of each channel defines the number of nodes which can be exchanged simultanously between boxes
// the exchange of nodes runs according particular rules
// defining the key parameter: grid

function animateMotionFrame2(params) {	
  
  var el = params.animateMotionFrame2.el;
	delete params.animateMotionFrame2.el;

  var layer = params.animateMotionFrame2.layer;
	delete params.animateMotionFrame2.layer;
		
	
	// Essential settings
	var _params = params.animateMotionFrame2;
	    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	var defs = layer.find(function(layer) {return layer.name === "defs"; }).id;		
	
	var start_button_offset = 25;
	var start_button = el.circle({layer:_params.layer, r:12, transform:"translate("+(params.container.width/2)+","+(params.container.height+start_button_offset)+")",style: "fill:#ffffff;stroke:none;"}); 
	
	var box_style = "fill:none;stroke:#ffffff;stroke-width:1.5px;visibility:visible";
		
	
	// Composition settings
	// Level 1: Boundary Box
	var offset = {w:_params.offset,h:_params.offset};
	var width = params.container.width;
	var height = params.container.height;
	
	// defined in vars.js
	var AmountX = _params.AmountX;
	var AmountY = _params.AmountY;
	
	var m = getCenter(params.container.width,params.container.height);
	
	// var center = el.circle({layer:_params.layer,style: box_style, r:offset.w,cx:m.x,cy:m.y});
	
	var box_frame = el.polyline({layer:_params.layer,style: box_style, points: el.coordinates(frame(m.x,m.y,width,height,offset))});
	
	var centerList = getCenterList(m.x,m.y,width,height,offset);
	
	var frame_style = "fill:none;stroke:#ff0000;stroke-width:1.5px;visibility:visible";
	
	var offset_1 = {w:100,h:100};
	
	var frame_1 = frame(centerList[0].x,centerList[0].y,(width/2),(height/2),offset_1);	
	var box_frame_1 = el.polyline({layer:_params.layer,style: frame_style, points: el.coordinates(frame_1)});
	
	var frame_2 = frame(centerList[1].x,centerList[1].y,(width/2),(height/2),offset_1);	
	var box_frame_2 = el.polyline({layer:_params.layer,style: frame_style, points: el.coordinates(frame_2)});
	
	var frame_3 = frame(centerList[2].x,centerList[2].y,(width/2),(height/2),offset_1);	
	var box_frame_3 = el.polyline({layer:_params.layer,style: frame_style, points: el.coordinates(frame_3)});
	
	var frame_4 = frame(centerList[3].x,centerList[3].y,(width/2),(height/2),offset_1);
	var box_frame_4 = el.polyline({layer:_params.layer,style: frame_style, points: el.coordinates(frame_4)});
	
	var inner_centerList =  [
 		       {x:centerList[0].x,y:(height/2)}, 				
 		       {x:(width/2),y:centerList[1].y},
		       {x:centerList[1].x,y:(height/2)},
		       {x:(width/2),y:centerList[2].y} 		
 			];
	
	var side_style = "fill:none;stroke:#ff00ff;stroke-width:1.5px;visibility:visible";
	
	var offset_2 = {w:50,h:50};
	
	var left_frame = el.polyline({layer:_params.layer,style: side_style, points: el.coordinates(frame(inner_centerList[0].x,inner_centerList[0].y,(width/2),height, offset_2))});
	
	var right_frame = el.polyline({layer:_params.layer,style: side_style, points: el.coordinates(frame(inner_centerList[2].x,inner_centerList[2].y,(width/2),height, offset_2))});
	
	
	// var h_style = "fill:none;stroke:#ffffff;stroke-width:1px;visibility:visible";
	
	var radialGradient_a = el.radialGradient();	
	     el.stop({layer:radialGradient_a.id, offset:"5%", color: "#ffffcc", opacity:"0.5"});
       el.stop({layer:radialGradient_a.id, offset:"85%", color: "#00ff00", opacity:"0.5"}); 
	
	var h_style = "fill:url(#"+radialGradient_a.id+")";
	
	var vw = (frame_2[0].x-frame_1[1].x);
	
	var vh = (frame_1[2].y-frame_1[0].y);
	
	var offset_3 = {w:2,h:(vh/2)};
	
  var top_channel = el.polyline({layer:_params.layer,style: h_style, points: el.coordinates(frame(inner_centerList[1].x,inner_centerList[1].y,vw,vh,offset_3))});	

	var bot_channel = el.polyline({layer:_params.layer,style: h_style, points: el.coordinates(frame(inner_centerList[3].x,inner_centerList[3].y,vw,vh,offset_3))});
	
		
	var hh = (frame_2[0].x-frame_1[1].x);
	
	var ww = (frame_1[1].x-frame_1[0].x);
	
	var offset_4 = {w:(ww/2),h:2};
	
	var left_channel = el.polyline({layer:_params.layer,style: h_style, points: el.coordinates(frame(inner_centerList[0].x,inner_centerList[0].y,ww,hh,offset_4))});

	var right_channel = el.polyline({layer:_params.layer,style: h_style, points: el.coordinates(frame(inner_centerList[2].x,inner_centerList[2].y,ww,hh,offset_4))});
	
	
	var p_style = "fill:none;stroke:#ffffff;stroke-width:1px;visibility:visible";
	var path = el.polyline({layer:_params.layer,style: p_style, points: el.coordinates(centerList)});
	
	// var path = el.path({layer:_params.layer,style: box_style, d:getPath(centerList)});
	
	var node = el.circle({layer:_params.layer,style: box_style, r:offset.w,cx:centerList[0].x,cy:centerList[0].y});
	
	var animPath =  [
 		       {x:0,y:0}, 				
 		       {x:(centerList[1].x-centerList[0].x),y:0},
		       {x:(centerList[1].x-centerList[0].x),y:(centerList[2].y-centerList[1].y)},
		       {x:0,y:(centerList[2].y-centerList[1].y)},
		       {x:0,y:0}
 			];
	
	var animateNode = el.animateMotion({layer:node.id, begin:start_button.id+".click", path:getPath(animPath), dur:10, repeatCount: 1});
	
	var grid_style = "stroke:#00ff00;stroke-width:0.5px";
	
	var grid = [{x:centerList[0].x,y:centerList[0].y,height:((height/2)-offset_1.h),width:((width/2)-offset_1.w),AmountX:AmountX,AmountY:AmountY},
						  {x:centerList[1].x,y:centerList[1].y,height:((height/2)-offset_1.h),width:((width/2)-offset_1.w),AmountX:AmountX,AmountY:AmountY},
							{x:centerList[2].x,y:centerList[2].y,height:((height/2)-offset_1.h),width:((width/2)-offset_1.w),AmountX:AmountX,AmountY:AmountY},
							{x:centerList[3].x,y:centerList[3].y,height:((height/2)-offset_1.h),width:((width/2)-offset_1.w),AmountX:AmountX,AmountY:AmountY}
						 ];
	
	grid.forEach(function(g) { 													 
		for (var i=0; i<el.abstractGrid(g).length;i++) {       
        el.line({layer: _params.layer, x1 : el.abstractGrid(g)[i].x1, y1: el.abstractGrid(g)[i].y1, x2: el.abstractGrid(g)[i].x2, y2:el.abstractGrid(g)[i].y2, style: grid_style});
	  }	
		
		// params = {layer: gridNodes.id, r:r, cx : AbstractGridNodes[i].x1, cy: AbstractGridNodes[i].y1, style: style};
		for (var j=0; j<el.abstractNodes(g).length;j++) {       
        el.circle({layer: _params.layer, r:(offset.w/2), cx : el.abstractNodes(g)[j].x1, cy: el.abstractNodes(g)[j].y1, style:box_style});
	  }	
	});	

	
	return null;
}
////////////////////////////////////////////////////////////////////////////////
define({
slide: function (params) { return slide(params); },
defs: function (params) { return defs(params); },
container: function (params) { return container(params); },
animateMotionFrame1: function (params) { return animateMotionFrame1 (params); },
animateMotionFrame2: function (params) { return animateMotionFrame2 (params); }			
// EOF
});
