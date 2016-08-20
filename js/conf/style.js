///////////////////////////////////////////////////////////////////////////
// Style default definitions for svg elements
// DO NOT CHANGE!
///////////////////////////////////////////////////////////////////////////
// global values
var root_name = "embedded_svg";
var default_style = "fill:#cccccc;stroke:#999999;stroke-width:0.10px;";
///////////////////////////////////////////////////////////////////////////
define({

// the parent element of the svg node
root: root_name,

layer: undefined,

// default digits of random id
idLength: 8,

// display format (screen or file)
display: "screen",

// svg root element
svg:
{
xmlns: "http://www.w3.org/2000/svg", // mandatory
xlinkNS: "http://www.w3.org/1999/xlink", // mandatory
xmlns_xlink: "http://www.w3.org/1999/xlink",  // mandatory: use element 
preserveAspectRatio: "xMidYMid meet",
// preserveAspectRatio: "none",
viewBox: "-1 -1 60 40",
// style: "background-image: url(background.svg)"
style: "background-color:#e8e8e8;"
},
// svg core elements
// placeholder for group element
g: {},
// placeholder for defs element
defs: {},
// placeholder for desc element
desc: {}, 
// placeholder for use. Use xlink_href instead of xlink:href. colons are not accepted in json keys
use: {},
// symbol placeholder
symbol: {},  
// core svg elements
circle: {r: 1, cx : 0, cy: 0, style: default_style},
rect: {x : 0, y: 0, width:1, height:1, rx:0.1, ry:0.1, style: "fill:#cccccc;stroke:#999999;stroke-width:0.01px;"},
line: {x1 : 0, y1: 0, x2: 1, y2:0, style: "stroke:#000000;stroke-width:0.10px;"},
polygon: {points: "0,0 1,1 2,0", style: default_style},
path: {d: "M 0,0 A1,1 0 1,1 4,0", style: default_style},
ellipse: {cx:0, cy:0, rx:2, ry:1, style:default_style},
polyline: {points: "0,0 1,0 1,1 2,1 2,2 0,0", style:"fill:none;stroke:#999999;stroke-width:0.10px;"},
text: {x : 0, y: 0, style: "stroke:none; fill:#ff0000;font-size: 1pt;", data: "sample text"},

linearGradient: {},
// stop: {offset:"5%",  color: "#ff0000", opacity:"0.3"},
stop: {offset:"5%",  color: "#ff0000"},

radialGradient: {},
// radialGradient: {fx: "50%", fy:"50%", r:"95%", spreadMethod: "pad"},

pattern: {x: 0, y:0, width:1, height:1, patternUnits: "userSpaceOnUse"},

animate: {attributeType:"CSS", attributeName:"visibility", from:"visible", to:"hidden",dur:2, repeatCount: 4},

animateTransform: {attributeType: 'XML', attributeName: 'transform', type: 'translate', from:'0,0', to:'15,0', begin: 0, dur:5, repeatCount: 2},

animateColor: { attributeType: 'CSS', attributeName:"fill", from:"#ff0000", to:"#ff00ff", dur:2, repeatCount: 2},

set: { attributeType:"CSS", attributeName:"fill", from:"#ff0000", to:"#0000ff", dur:2, repeatCount: 2},

animateMotion: { path: "M 0,0 A1,1 0 1,1 4,0", dur:2, repeatCount: 4},
  
// the mpath sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
mpath: {}

///////////////////////////////////////////////////////////////////////////

// EOF
});
