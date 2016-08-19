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
////////////////////////////////////////////////////////////////////////////////
// Custom Elements
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
function pattern_a(params) {	
  
  var el = params.pattern_a.el;
	delete params.pattern_a.el;

  var layer = params.pattern_a.layer;
	delete params.pattern_a.layer;
	
	var _params = params.pattern_a;
	_params.layer = layer.find(function(layer) {return layer.name === "defs"; }).id;
	
	_params.x = _params.r;
	_params.y = _params.r;
	_params.width = (_params.r*2);
	_params.height = (_params.r*2);
	
	var pattern_a = el.pattern(_params);
	
	var radialGradient = el.radialGradient();
	
	el.stop({layer:radialGradient.id, offset:"15%", color: "#ffffff", opacity:"0.5"});
  el.stop({layer:radialGradient.id, offset:"85%", color: "#B34020", opacity:"0.5"}); 
	
	
	el.circle({layer: pattern_a.id, r: _params.r, cx : _params.x, cy: _params.y,  style: "fill:url(#"+radialGradient.id+")"});
  	
	_params = {};
	
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element	
	var offset = 25;
	_params.width = (params.container.width+offset), _params.height = (params.container.height+offset);
	
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	_params.style = "fill:url(#"+pattern_a.id+")";
	
	var rect = el.rect({layer:_params.layer, style:_params.style, width:_params.width, height:_params.height, transform:_params.transform});	
  
  return {name:"pattern_a", id:pattern_a.id};
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function pattern_b(params) {	
  
  var el = params.pattern_b.el;
	delete params.pattern_b.el;

  var layer = params.pattern_b.layer;
	delete params.pattern_b.layer;
	
	var _params = params.pattern_b;
	_params.layer = layer.find(function(layer) {return layer.name === "defs"; }).id;
	
	_params.x = _params.r;
	_params.y = _params.r;
	_params.width = (_params.r*2);
	_params.height = (_params.r*2);
	var f = 2;
	
	var pattern_b = el.pattern(_params);
	
	var radialGradient = el.radialGradient();
	
	el.stop({layer:radialGradient.id, offset:"15%", color: "#ffffff", opacity:"0.5"});
  el.stop({layer:radialGradient.id, offset:"85%", color: "#000000", opacity:"0.5"}); 
	
	
	el.rect({layer: pattern_b.id, width:(_params.width-f), height:(_params.height-f),  style: "fill:url(#"+radialGradient.id+")"});
  	
	_params = {};
	
	_params.layer = layer.find(function(layer) {return layer.name === "container"; }).id;
	
	// center element	
	var offset = 25;
	_params.width = (params.container.width+offset), _params.height = (params.container.height+offset);
	
	var factor = {x:((params.container.width/2)-(_params.width/2)), y:((params.container.height/2)-(_params.height/2))};
	_params.transform = "translate("+factor.x+","+factor.y+")";
	
	_params.style = "fill:url(#"+pattern_b.id+")";
	
	var rect = el.rect({layer:_params.layer, style:_params.style, width:_params.width, height:_params.height, transform:_params.transform});	
  
  return {name:"pattern_b", id:pattern_b.id};
}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
define({
slide: function (params) { return slide(params); },
defs: function (params) { return defs(params); },
container: function (params) { return container(params); },
pattern: function (params) { return pattern (params); },
pattern_a: function (params) { return pattern_a (params); },
pattern_b: function (params) { return pattern_b (params); }		
// EOF
});
