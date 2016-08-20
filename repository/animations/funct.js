////////////////////////////////////////////////////////////////////////////////
// helper functions
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
	
	var left_frame = el.rect({layer:_params.layer, width:600, height:780, transform:"translate(10,10)",style: "fill:none;stroke:#ffffff;stroke-width:1px;"});  
	
	var right_frame = el.rect({layer:_params.layer, width:600, height:780, transform:"translate(890,10)",style: "fill:none;stroke:#ffffff;stroke-width:1px;"}); 
	
	// var leftRight_channel = el.rect({layer:_params.layer, width:280, height:100, ,style: "fill:none;stroke:#ffffff;stroke-width:1px;"}); 
	
	var channel = el.symbol({layer:defs});	
	el.line({layer:channel.id, x1 : 0, y1: 0, x2: 278, y2:0, style: "stroke:#ffffff;stroke-width:1px;"});	
	el.line({layer:channel.id, x1 : 0, y1: 0, x2: 278, y2:0, style: "stroke:#ffffff;stroke-width:1px;", transform:"translate(0,60)"});	
	
	el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,100)"});
	el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,300)"});
	el.use({layer:_params.layer, xlink_href:channel.id, height:80, x:0, y:0, transform:"translate(610,600)"});
	
	// var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};	
	
	// _params.transform = "translate("+factor.x+","+factor.y+")";
	
  //var path = el.path({layer:_params.layer, d:_params.path, style: _params.path_style, transform:_params.transform });
	
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
animateMotion: function (params) { return animateMotion (params); }		
// EOF
});
