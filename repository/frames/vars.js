define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [

{  /// var1 start
  slide: {
    name: "Frame",
    description: "Description of element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#EBB249;",
    //scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:none;stroke:#ffffff;stroke-width:1px; stroke-dasharray:5,5",
    //AmountX:8,
    //AmountY:8,
    width:1500,
    height:800,
    x:0,
    y:0,
    rx:0,
    ry:0,
    offset:0
  },
 
  Frame: {
    offset: 25,
    AmountX: 4,
    AmountY: 4,
    box_style: "fill:none;stroke:#ffffff;stroke-width:3px;visibility:visible",
    grid_style:"stroke:#000000;stroke-width:1px",
    panel_offset:45,
	  panel_style: "fill:#ffffcc;stroke:#ff0000;stroke-width:2px",
		node_style: "fill:#00ff00;stroke:#ff00ff;stroke-width:1px"
  }  
} /// var1 end
////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////  	
]
// EOF
});