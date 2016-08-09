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

  return {name:"container", id:container.id};

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
	
	var rect = el.circle(_params);
  
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
	
	var height = parseInt(_params.style.match("font-size:(.*)pt")[1]);
	
	// var nh = 100;
	
	// remove spaces in style string
	_params.style = _params.style.replace(/\s/g, '');
	
	// var newstyle = style.replace("font-size:"+height+"pt", "font-size:"+nh+"pt"); 
	
	// alert(newstyle);
	
	// center element
	var factor = {x:(params.container.width/4), y:((params.container.height/2)+(height/2))};
	
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	var text = el.text(_params);
	
	var length = Math.round(document.getElementById(text.id).getComputedTextLength()); 
	
	//var style = _params.style;
	
	//var testRE = style.match("font-size:(.*)pt");
	
	//alert(testRE[1]);
	
	//var height = document.getElementById(text.id).getBBox();	
	//alert(height);
	
	
	
	if (length>=params.container.width) {
		
										//alert("Text too long");	
		
 		                var style;
		
 		                var newHeight;
		                var oldHeight = height;
		                
 		                //for (var i=length; i--; i > params.container.width)  {
 				 						//	    newHeight = (oldHeight-1);
		                      newHeight = (oldHeight-10);
											    style = _params.style.replace("font-size:"+oldHeight+"pt", "font-size:"+newHeight+"pt");
 				 						//	    oldHeight = newHeight;
											
 											    el.setAttribute(text.id,"style", style);
																						
 											    length = Math.round(document.getElementById(text.id).getComputedTextLength()); 
											
											   	
											// alert(length);
											
 										// }
		// alert(length);
		
	}
	
	el.setAttribute(text.id,"transform", "translate("+((params.container.width/2)-(length/2))+","+factor.y+")");
	
		 
  return {name:"text", id:text.id};
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
text: function (params) { return text (params); }		
// EOF
});
