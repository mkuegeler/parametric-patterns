function medigeist (def) {
		
	this.id =  (def.id) ? def.id: (Math.random().toString().replace(/\./g , "x")).substr(0, 8);
	this.name =  (def.name) ? def.name: undefined;
	
	// the html node where the svg is located. Usually, it is a div element.
	this.root = (def.root) ? def.root: document.body;
	
	this.def = def;        

}
///////////////////////////////////////////////////////////////////////////////
// get and set methods
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setID = function(value)
{
            this.id = value;
};
medigeist.prototype.getID = function()
{
            return this.id;
};
///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setRoot = function(value)
{
            this.root = value;
};
medigeist.prototype.getRoot = function()
{
            return this.root;
};

///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.setDef = function(value)
{
            this.def = value;
};
medigeist.prototype.getDef = function()
{
            return this.def;
};

///////////////////////////////////////////////////////////////////////////////
// Support functions
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// return name of method
medigeist.prototype.getNameOfCall = function(f) {
    for(var p in this)
        if(this[p] === f)
            return p;
    throw "Callback not in object.";
};
///////////////////////////////////////////////////////////////////////////////

/// create a random string used as an unique identifier
medigeist.prototype.createID = function(length)
{
    
	var minimalLength = this.getDef().idLength;
	
	var randomString = Math.random().toString().replace(/\./g , "x");
	
	if(length) { 		
		if (length<minimalLength) { length = minimalLength; }
		    randomString = randomString.substr(0, length); 	
	}
		
	return "id_"+randomString;
};
///////////////////////////////////////////////////////////////////////////////
// validate custom parameters against default parameters
// rules: c object leads def object. If a key nonexists in c, the default value of this key is taken from def.

medigeist.prototype.validate = function(c,def) {
	
    var params = {}; 
	
	for (var ckey in c) {
		
		params[ckey] = c[ckey];
		
		for (var dkey in def) {
	
		    if(!(dkey in c )) { params[dkey] = def[dkey]; }
   
	    }
	
	      
    }
	
	return params;
	
};
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// function to create geometric core elements: i.e. svg, circle, rect, polyline
medigeist.prototype.geometry = function (params) {
	
	var def = this.getDef();
	var svg = def.svg;
	var type = params.type;
	
	// type in params is no longer needed, therefore delete it
  delete params.type;
    
    // set id value if not in params
	// the first element of the array is the primary element, therefore it needs an unique identifier.
	// the id value is set at run time and not in defs.js to avoid rendundancies
	if(!params.id) { params.id = this.createID(this.getDef().idLength);  }
	
	// set layer value if not in params
	// default parent element is the SVG root element of the document. Only the first element of the params array needs a layer attribute.
	// All subqequent elements are children of the first element.
	var layer;
	
	if(!params.layer) {
		
		if (type === "svg") {layer = this.getRoot(); }
		      else { layer = document.getElementsByTagName("svg").item(0).id; }
	} else {layer = params.layer; delete params.layer; }
	
	
	// validate the values and structure
	// compare given parameters against default values
	
	var attributes = this.validate(params,def[type]);
	
	var el = document.createElementNS(svg.xmlns,type);
	
	var key_name; 
	
    for (var key in attributes) {
		// special case: stop elements
		if ((key == "color") || (key == "opacity")) { key_name = "stop-"+key; } else {key_name = key;}
			 el.setAttribute(key_name, attributes[key] );
			
		// special case: xmlns:xlink. Use xmlns_xlink instead of xmlns:xlink. colons are not accepted in json keys
		if (key == "xmlns_xlink") { key_name = "xmlns:xlink"; } else {key_name = key;}	    
		
		// special case: xlink:href. Use xlink_href instead of xlink:href. colons are not accepted in json keys
		if (key == "xlink_href") { key_name = "xlink:href"; attributes[key] = "#"+attributes[key]; el.setAttributeNS(svg.xmlns_xlink, key_name, attributes[key] ); } 
	
	}
	
	document.getElementById(layer).appendChild(el);
	// special case: text element. Add text content
	if (attributes.data) {el.appendChild(document.createTextNode(attributes.data));}
	
	
	return attributes;
	
}; 
///////////////////////////////////////////////////////////////////////////////
// SVG DOM support functions: get and set element attributes
///////////////////////////////////////////////////////////////////////////////
medigeist.prototype.setAttribute = function (id,attribute,value) {
	
	document.getElementById(id).setAttribute(attribute,value);	
};
///////////////////////////////////////////////////////////////////////////////
medigeist.prototype.getAttribute = function (id,attribute) {
	
	return document.getElementById(id).getAttribute(attribute);	
};
///////////////////////////////////////////////////////////////////////////////
// support function: generate plain SVG Code
///////////////////////////////////////////////////////////////////////////////

medigeist.prototype.writeCode = function (code_area) {
	
	var svgout = document.getElementById(this.getDef().root).innerHTML;

	var display_svg = svgout.replace(/</g, "&lt;");	
		display_svg = display_svg.replace(/>/g, "&gt;\n");
		display_svg = display_svg.replace(/"/g, "&quot;");
		//display_svg = display_svg.replace(/id=/g, "\nid=");			
	
	document.getElementById(code_area).innerHTML = display_svg;	

	
};
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Elements: Start
///////////////////////////////////////////////////////////////////////////////
// The svg root element
medigeist.prototype.svg = function(params)
{
// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
     
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.defs = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.desc = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.g = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.use = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.symbol = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.circle = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.rect = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.line = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.polygon = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.path = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.ellipse = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.polyline = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.text = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.linearGradient = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.stop = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.radialGradient = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.pattern = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.animate = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.animateTransform = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.animateColor = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.set = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.animateMotion = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// wrapper function 
medigeist.prototype.mpath = function (params) {

// if no params: set an empty hash array
if (!params) { params = {}; } 
// add the element identifier (type) to params array
params.type = this.getNameOfCall(arguments.callee);	
return this.geometry(params);
		 
};
///////////////////////////////////////////////////////////////////////////////
// EOF
///////////////////////////////////////////////////////////////////////////////
