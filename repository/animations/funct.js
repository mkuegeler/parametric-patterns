////////////////////////////////////////////////////////////////////////////////
// helper functions
////////////////////////////////////////////////////////////////////////////////
// get position of canvas
// params = {boxw:boxw, width:width, boxh:boxh, height:height};
function position (params) {
	return {x:((params.boxw/2)-(params.width/2)), y:((params.boxh/2)-(params.height/2))};
}
////////////////////////////////////////////////////////////////////////////////
// setup list of coordinates for polyline element
// param = {p1:"0,0", p2:"0,0"};

// function coordinates(params) {
// 	var points = "";
// 	 for (var p in params) {points += " "+params[p]+" ";}
	
// 	return points;
// }

////////////////////////////////////////////////////////////////////////////////
// setup list of coordinates for polyline element
// params = [{x:0,y:0},{x:10,y:10}];

// function coordinates(params) {
// 	var points = "";	 
// 	params.forEach(function(p) { points += " "+p.x+","+p.y+" ";	});	
//   return points;
// }

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
function rect(params) {	
  
  var el = params.rect.el;
	delete params.rect.el;

  var layer = params.rect.layer;
	delete params.rect.layer;
	
	var _params = params.rect;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var rect = el.rect(_params);
  
  return {name:"rect", id:rect.id};
}
////////////////////////////////////////////////////////////////////////////////
function circle(params) {	
  
  var el = params.circle.el;
	delete params.circle.el;

  var layer = params.circle.layer;
	delete params.circle.layer;
	
	var _params = params.circle;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var circle = el.circle(_params);
  
  return {name:"circle", id:circle.id};
}
////////////////////////////////////////////////////////////////////////////////
function line(params) {	
  
  var el = params.line.el;
	delete params.line.el;

  var layer = params.line.layer;
	delete params.line.layer;
	
	var _params = params.line;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:((params.container.width/2)-(_params.x2/2)), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var line = el.line(_params);
  
  return {name:"line", id:line.id};
}
////////////////////////////////////////////////////////////////////////////////
function polygon(params) {	
  
  var el = params.polygon.el;
	delete params.polygon.el;

  var layer = params.polygon.layer;
	delete params.polygon.layer;
	
	var _params = params.polygon;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};	
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var polygon = el.polygon(_params);
  
  return {name:"polygon", id:polygon.id};
}
////////////////////////////////////////////////////////////////////////////////
function path(params) {	
  
  var el = params.path.el;
	delete params.path.el;

  var layer = params.path.layer;
	delete params.path.layer;
	
	var _params = params.path;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};	
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var path = el.path(_params);
  
  return {name:"path", id:path.id};
}
////////////////////////////////////////////////////////////////////////////////
function ellipse(params) {	
  
  var el = params.ellipse.el;
	delete params.ellipse.el;

  var layer = params.ellipse.layer;
	delete params.ellipse.layer;
	
	var _params = params.ellipse;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var ellipse = el.ellipse(_params);
  
  return {name:"ellipse", id:ellipse.id};
}
////////////////////////////////////////////////////////////////////////////////
function polyline(params) {	
  
  var el = params.polyline.el;
	delete params.polyline.el;

  var layer = params.polyline.layer;
	delete params.polyline.layer;
	
	var _params = params.polyline;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};	
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var polyline = el.polyline(_params);
  
  return {name:"polyline", id:polyline.id};
}
////////////////////////////////////////////////////////////////////////////////
function text(params) {	
  
  var el = params.text.el;
	delete params.text.el;

  var layer = params.text.layer;
	delete params.text.layer;
	
	var _params = params.text;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	// remove spaces in style string
	_params.style = _params.style.replace(/\s/g, '');
	
	// aproximate factor: font ratio (estimated). Depends on font and may needs to be customized
	var ratio = 1.547; 
	
	var height = parseInt(_params.style.match("font-size:(.*)pt")[1]);
	var length = _params.data.length;
	var width = Math.round((length*(height/ratio)));
	var newHeight = height;
	
	// check text length and if text too long for container, decrease font-size	
	if (width>=params.container.width) {	
			
		while (width>params.container.width) {newHeight--;  width = Math.round((length*(newHeight/ratio)));   }
		_params.style = _params.style.replace("font-size:"+height+"pt", "font-size:"+newHeight+"pt");
	}
	
	// center element
	
	var factor = {x:((params.container.width/2)-(width/2)), y:((params.container.height/2)+(height/2))};
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var text = el.text(_params);
		 
  return {name:"text", id:text.id};
}
////////////////////////////////////////////////////////////////////////////////
function linearGradient(params) {	
  
  var el = params.linearGradient.el;
	delete params.linearGradient.el;

  var layer = params.linearGradient.layer;
	delete params.linearGradient.layer;
	
	var _params = params.linearGradient;
	_params.layer = layer.find(function(layer) {return layer.name === "defs"; }).id;
	
	var linearGradient = el.linearGradient(_params);
	
	el.stop({layer:linearGradient.id});
    el.stop({layer:linearGradient.id, offset:"85%", color: "#0000ff", opacity:"0.5"});  
    
    // Sample rectangle
    
    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
    
    // center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	_params.style = "fill:url(#"+linearGradient.id+")";
	
	var rect = el.rect(_params);
  
  return {name:"linearGradient", id:linearGradient.id};
}
////////////////////////////////////////////////////////////////////////////////
function radialGradient(params) {	
  
  var el = params.radialGradient.el;
	delete params.radialGradient.el;

  var layer = params.radialGradient.layer;
	delete params.radialGradient.layer;
	
	var _params = params.radialGradient;
	_params.layer = layer.find(function(layer) {return layer.name === "defs"; }).id;
	
	var radialGradient = el.radialGradient(_params);
	
	el.stop({layer:radialGradient.id});
    el.stop({layer:radialGradient.id, offset:"85%", color: "#0000ff", opacity:"0.5"});  
    
    // Sample rectangle
    
    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
    
    // center element
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	_params.style = "fill:url(#"+radialGradient.id+")";
	
	var rect = el.rect(_params);
  
  return {name:"radialGradient", id:radialGradient.id};
}
////////////////////////////////////////////////////////////////////////////////
function pattern(params) {	
  
  var el = params.pattern.el;
	delete params.pattern.el;

  var layer = params.pattern.layer;
	delete params.pattern.layer;
	
	var _params = params.pattern;
	_params.layer = layer.find(function(layer) {return layer.name === "defs"; }).id;
	
	var pattern = el.pattern(_params);
	
	el.circle({layer: pattern.id, r: 10, cx : 10, cy: 10,  style: "fill:none;stroke:#999999;stroke-width:1px;"});
  	
	_params = {};
	_params.r = params.pattern.r;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	_params.style = "fill:url(#"+pattern.id+")";
	
	var circle = el.circle(_params);
	
  
  return {name:"pattern", id:pattern.id};
}
////////////////////////////////////////////////////////////////////////////////
function animate(params) {	
  
  var el = params.animate.el;
	delete params.animate.el;

  var layer = params.animate.layer;
	delete params.animate.layer;
	
	var _params = params.animate;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var animate_group = el.g({layer: _params.layer, transform: _params.transform});
	
	_params.layer = animate_group.id;
	// delete _params.style;
  var circle = el.circle({layer: animate_group.id, r:200, style:_params.style});
	
	_params.begin = circle.id+".click";
  var animate = el.animate(_params);
  
  return {name:"animate", id:animate.id};
}
////////////////////////////////////////////////////////////////////////////////
function animateTransform(params) {	
  
  var el = params.animateTransform.el;
	delete params.animateTransform.el;

  var layer = params.animateTransform.layer;
	delete params.animateTransform.layer;
	
	var _params = params.animateTransform;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var animateTransform_group = el.g({layer: _params.layer, transform: _params.transform});
	
	_params.layer = animateTransform_group.id;
	// delete _params.style;
  var animateTransform_circle = el.circle({layer: animateTransform_group.id, r:50, style:_params.style});
  // var animateTransform = el.animateTransform(_params);
	
	_params.begin = animateTransform_circle.id+".click";
	_params.from = factor.x+","+factor.y;
	_params.to = (factor.x*1.5)+","+factor.y;
	
	var animateTransform = el.animateTransform(_params);
  
  return {name:"animateTransform", id:animateTransform.id};
}
////////////////////////////////////////////////////////////////////////////////
function set(params) {	
  
  var el = params.set.el;
	delete params.set.el;

  var layer = params.set.layer;
	delete params.set.layer;
	
	var _params = params.set;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	// center element
	var factor = {x:(params.container.width/2), y:(params.container.height/2)};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var set_group = el.g({layer: _params.layer, transform: _params.transform});
	
	_params.layer = set_group.id;
	
  var set_circle = el.circle({layer: set_group.id, r:50, style:_params.style});
	
  _params.layer = set_circle.id;
	//delete _params.style;
	_params.begin = set_circle.id+".click";
	var set = el.set(_params);
  
  return {name:"set", id:set.id};
}
////////////////////////////////////////////////////////////////////////////////
function animateMotion(params) {	
  
  var el = params.animateMotion.el;
	delete params.animateMotion.el;

  var layer = params.animateMotion.layer;
	delete params.animateMotion.layer;
	
	var style = params.animateMotion.style;
	//delete params.animateMotion.style;
	
	var _params = params.animateMotion;
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	var defs = layer.find(function(layer) {return layer.name === "defs"; }).id;	
	
	var start_button = el.circle({layer:_params.layer, r:12, transform:"translate(744,830)",style: "fill:#ffffff;stroke:none;"}); 	
	
	
	var channel_offset = (params.container.width/8);
	var channel_height = (params.container.height/4);	

	var main_points = [
		        {x:0,y:0}, // 1
						{x:((params.container.width/2)-channel_offset),y:0}, // 2
						{x:((params.container.width/2)-channel_offset),y:((params.container.height/4)-(channel_height/2))}, // 3
						{x:((params.container.width/2)+channel_offset),y:((params.container.height/4)-(channel_height/2))}, // 4
		        {x:((params.container.width/2)+channel_offset),y:0}, // 5
		        {x:params.container.width,y:0}, // 6
		        {x:params.container.width,y:params.container.height}, // 7
		        {x:((params.container.width/2)+channel_offset),y:params.container.height}, // 8
		        {x:((params.container.width/2)+channel_offset),y:(((params.container.height/2)+(params.container.height/4))+(channel_height/2))}, // 9
		        {x:((params.container.width/2)-channel_offset),y:(((params.container.height/2)+(params.container.height/4))+(channel_height/2))}, // 10
		        {x:((params.container.width/2)-channel_offset),y:params.container.height}, // 11
		        {x:0,y:params.container.height}, // 12
		        {x:0,y:0} // 13						
					 ];
	
	var main_frame = el.polyline({layer:_params.layer,style: "fill:none;stroke:#ffffff;stroke-width:0.5px;", points: el.coordinates(main_points)});
	
	var channel_points = [
		        {x:main_points[2].x, y:(main_points[2].y+channel_height)},
		        {x:main_points[3].x, y:(main_points[2].y+channel_height)},
		        {x:main_points[8].x, y:(main_points[8].y-channel_height)},
		        {x:main_points[9].x, y:(main_points[8].y-channel_height)},
		        {x:main_points[2].x, y:(main_points[2].y+channel_height)}
					 ];
	
	var channel_frame = el.polyline({layer:_params.layer,style: "fill:none;stroke:#ffffff;stroke-width:0.5px;", points: el.coordinates(channel_points)});
	
	var inner_offset = 20;
	
	var top_group = el.g({layer:_params.layer, transform:"translate(0,"+((channel_points[0].y/8)+(inner_offset/2))+")"});
	
	var topleft_side = el.rect({layer:top_group.id,style: "fill:none;stroke:#ffffff;stroke-width:1.5px;", x:(inner_offset/2),y:(inner_offset/2), 
													 width:(main_points[2].x-inner_offset),
													 height:(channel_points[0].y-inner_offset)
													 //transform:"translate("+(inner_offset/2)+","+(inner_offset/2)+")"
													});
	var topright_side = el.rect({layer:top_group.id,style: "fill:none;stroke:#ffffff;stroke-width:1.5px;", x:(inner_offset/2),y:(inner_offset/2), 
													 width:(main_points[2].x-inner_offset),
													 height:(channel_points[0].y-inner_offset),
													 transform:"translate("+main_points[3].x+",0)"
													});
	
	var buttom_group = el.g({layer:_params.layer, transform:"translate(0,"+(((channel_points[3].y/8)-(channel_points[3].y/4))+(inner_offset/2))+")"});
	
	var buttomright_side = el.rect({layer:buttom_group.id,style: "fill:none;stroke:#ffffff;stroke-width:1.5px;", x:(inner_offset/2),y:(inner_offset/2), 
													 width:(main_points[2].x-inner_offset),
													 height:(channel_points[0].y-inner_offset),
													 transform:"translate("+main_points[3].x+","+channel_points[2].y+")"
													});
	var buttomleft_side = el.rect({layer:buttom_group.id,style: "fill:none;stroke:#ffffff;stroke-width:1.5px;", x:(inner_offset/2),y:(inner_offset/2), 
													 width:(main_points[2].x-inner_offset),
													 height:(channel_points[0].y-inner_offset),
													 transform:"translate(0,"+channel_points[2].y+")"
													});
	
	var radius = (((channel_points[0].y/2)-inner_offset)/2);
	
	var path_style = "fill:none;stroke:#ff0000;stroke-width:2px; stroke-dasharray:5,5"; 
	var path_h =  "M0 0 L"+((params.container.width/2)+(params.container.width/8))+" 0";		
  var path_A = el.path({layer:top_group.id, d:path_h, style: path_style, transform:"translate("+(main_points[2].x/2)+","+(channel_points[0].y/2)+")" });
	
	var path_v =  "M0 0 L0 "+((params.container.height/2));		
	//var path_B = el.path({layer:top_group.id, d:path_v, style: path_style, transform:"translate("+((params.container.width/1.225))+","+(channel_points[0].y/2)+")" });
	
	var left_circle_A1 = el.circle({layer:top_group.id,style: "fill:none;stroke:#999999;stroke-width:10px;", r:radius, 
															 cx:(main_points[2].x/2),cy:(channel_points[0].y/2)});
	var left_circle_A = el.circle({layer:top_group.id,style: "fill:#cccccc;stroke:#999999;stroke-width:10px;", r:radius, 
															 cx:(main_points[2].x/2),cy:(channel_points[0].y/2)});
	
	var animateMotion_h = el.animateMotion({layer:left_circle_A.id, begin:start_button.id+".click", path:path_h, dur:3, repeatCount: 1});
	
	
	
	
	var left_circle_B = el.circle({layer:top_group.id,style: "fill:#cccccc;stroke:#999999;stroke-width:10px;", r:radius, transform:"translate(0,"+((params.container.height/2))+")",
															 cx:(main_points[2].x/2),cy:(channel_points[0].y/2)});														 
  var right_circle_A = el.circle({layer:top_group.id,style: "fill:none;stroke:#999999;stroke-width:10px;", r:radius, transform:"translate("+((params.container.width/2)+(params.container.width/8))+",0)",
															 cx:(main_points[2].x/2),cy:(channel_points[0].y/2)});
	var right_circle_B = el.circle({layer:top_group.id,style: "fill:none;stroke:#999999;stroke-width:10px;", r:radius, transform:"translate("+((params.container.width/2)+(params.container.width/8))+","+((params.container.height/2))+")",
															 cx:(main_points[2].x/2),cy:(channel_points[0].y/2)});

	
	// var leftRight_channel = el.rect({layer:_params.layer, width:280, height:100, ,style: "fill:none;stroke:#ffffff;stroke-width:1px;"}); 
	
	// var channel = el.symbol({layer:defs});	
	// el.line({layer:channel.id, x1 : 0, y1: 0, x2: 278, y2:0, style: "stroke:#ffffff;stroke-width:1px;"});	
	// el.line({layer:channel.id, x1 : 0, y1: 0, x2: 278, y2:0, style: "stroke:#ffffff;stroke-width:1px;", transform:"translate(0,60)"});	
	
	// el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,100)"});
	// el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,300)"});
	// el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,600)"});
	
	// var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};	
	
	// _params.transform = "translate("+factor.x+","+factor.y+")";
	
	
	
	//var animateMotion_group = el.g({layer: _params.layer, transform: _params.transform});
	
	//_params.layer = animateMotion_group.id;
	
	//var animateMotion_circle = el.circle({layer: animateMotion_group.id, r:50, style:style});
	
  //_params.layer = animateMotion_circle.id;
	
	//_params.begin = start_button.id+".click";
	
	//var animateMotion = el.animateMotion(_params);
  
  //return {name:"animateMotion", id:animateMotion.id};
	
	return null;
}
////////////////////////////////////////////////////////////////////////////////
function animateMotionFrame(params) {	
  
  var el = params.animateMotionFrame.el;
	delete params.animateMotionFrame.el;

  var layer = params.animateMotionFrame.layer;
	delete params.animateMotionFrame.layer;
	
	var style = params.animateMotionFrame.style;	
	
	var _params = params.animateMotionFrame;
	    _params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;	
	
	var defs = layer.find(function(layer) {return layer.name === "defs"; }).id;		
	
	var start_button_offset = 25;
	var start_button = el.circle({layer:_params.layer, r:12, transform:"translate("+(params.container.width/2)+","+(params.container.height+start_button_offset)+")",style: "fill:#ffffff;stroke:none;"}); 
	
	var box_style = "fill:none;stroke:#ffffff;stroke-width:1.5px;";
	
	// var box = el.rect({layer:_params.layer, style:box_style, height:params.container.height, width:params.container.width});
	
	// Level 1: Boundary Box
	var offset = _params.offset;
	var box_width = (params.container.width-offset);
	var box_height = (params.container.height-offset);
	
	var center = el.circle({layer:_params.layer,style: box_style, r:offset,cx:(params.container.width/2),cy:(params.container.height/2)});
	
	var box_points = [
		        {x:offset,y:offset}, 					
		        {x:box_width,y:offset}, 
		        {x:box_width,y:box_height},
		        {x:offset,y:box_height},
		        {x:offset,y:offset}
					 ];
	
	// var box_transform = "translate("+(offset/2)+","+(offset/2)+")";
	var box_frame = el.polyline({layer:_params.layer,style: box_style, points: el.coordinates(box_points)});
	
	// Level 2: Grid
	
	var vertical_mid_points = [
		       {x:(params.container.width/2),y:offset}, 				
		       {x:(params.container.width/2),y:box_height}
					 ];
	
	var vertical_mid_line = el.polyline({layer:_params.layer,style: box_style, points: el.coordinates(vertical_mid_points)});
	
	var horizontal_mid_points = [
		       {x:offset,y:(params.container.height/2)}, 				
		       {x:box_width,y:(params.container.height/2)}
					 ];
	
	var horizontal_mid_line = el.polyline({layer:_params.layer,style: box_style, points: el.coordinates(horizontal_mid_points)});
	
	// Level 3: Left / Right side. Depends on box_frame
	var inner_style = "fill:none;stroke:#ff0000;stroke-width:2px;";
	
	var inner_offset = offset;
	var left_points = [
		        {x:(box_points[0].x+inner_offset),y:(box_points[0].y+inner_offset)}, 					
		        {x:((params.container.width/2)-inner_offset),y:(box_points[1].y+inner_offset)},
		        {x:((params.container.width/2)-inner_offset),y:(box_points[2].y-inner_offset)},
		        {x:(box_points[0].x+inner_offset),y:(box_points[2].y-inner_offset)},
		        {x:(box_points[0].x+inner_offset),y:(box_points[0].y+inner_offset)}
					 ];
	
  var left_box = el.polyline({layer:_params.layer,style: inner_style, points: el.coordinates(left_points)});
	
	var right_points = [
		        {x:((params.container.width/2)+inner_offset),y:(box_points[0].y+inner_offset)}, 					
		        {x:(params.container.width-(inner_offset*2)),y:(box_points[1].y+inner_offset)},
		        {x:(params.container.width-(inner_offset*2)),y:(box_points[2].y-inner_offset)},
		        {x:((params.container.width/2)+inner_offset),y:(box_points[2].y-inner_offset)},
		        {x:((params.container.width/2)+inner_offset),y:(box_points[0].y+inner_offset)}
					 ];
	
  var right_box = el.polyline({layer:_params.layer,style: inner_style, points: el.coordinates(right_points)});
	
	return null;
}
////////////////////////////////////////////////////////////////////////////////
define({
slide: function (params) { return slide(params); },
defs: function (params) { return defs(params); },
container: function (params) { return container(params); },
rect: function (params) { return rect (params); },
circle: function (params) { return circle (params); },
line: function (params) { return line (params); },
polygon: function (params) { return polygon (params); },
path: function (params) { return path (params); },
ellipse: function (params) { return ellipse (params); },
polyline: function (params) { return polyline (params); },
text: function (params) { return text (params); },
linearGradient: function (params) { return linearGradient (params); },
radialGradient: function (params) { return radialGradient (params); },
pattern: function (params) { return pattern (params); },
animate: function (params) { return animate (params); },
animateTransform: function (params) { return animateTransform (params); },
set: function (params) { return set (params); },
animateMotion: function (params) { return animateMotion (params); },
animateMotionFrame: function (params) { return animateMotionFrame (params); }			
// EOF
});
