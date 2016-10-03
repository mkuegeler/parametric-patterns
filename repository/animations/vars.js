define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [

{  /// var1 start
  slide: {
    name: "animateMotion Frame element 1",
    description: "Description of element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#EBB249;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:none;stroke:#ffffff;stroke-width:1px; stroke-dasharray:5,5",
    AmountX:8,
    AmountY:8,
    width:1500,
    height:800,
    x:0,
    y:0,
    rx:0,
    ry:0,
    offset:0
  },
 
  animateMotionFrame1: {
    offset: 25,
    repeatCount: 1,
    dur: 3,
    AmountX: 4,
    AmountY: 4,
    box_style: "fill:none;stroke:#ffffff;stroke-width:1.5px;visibility:visible",
    start_button_offset:25,
    start_button_style: "fill:#ffffff;stroke:none;",
    start_button_radius: 12,
    grid_style:"stroke:#000000;stroke-width:1px",
    panel_offset:25,
	  panel_style: "fill:#00ffcc;stroke:#ff0000;stroke-width:2px"
  }  
}, /// var1 end
 ////////////////////////////////////////////////////////////////////////////////  
{  /// var2 start
  slide: {
    name: "animateMotion Frame element 2",
    description: "Description of element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#465E8A;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:none;stroke:#ffffff;stroke-width:1px; stroke-dasharray:5,5",
    AmountX:8,
    AmountY:8,
    width:1500,
    height:800,
    x:0,
    y:0,
    rx:0,
    ry:0,
    offset:0
  },
  
  animateMotionFrame2: {
    offset: 25,
    repeatCount: 1,
    dur: 3,
    AmountX: 4,
    AmountY: 4
 
  }  
} /// var2 end
////////////////////////////////////////////////////////////////////////////////  
]
// EOF
});
