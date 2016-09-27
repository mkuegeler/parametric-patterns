define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [

{  /// var1 start
  slide: {
    name: "animateMotion element",
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
    offset:25
  },
  ////////////////////////////////////////////////////////////////////////////////
  animateMotion: {
    style: "fill:#e8e8e8;stroke:#999999;stroke-width:4px;",
    path_style: "fill:none;stroke:#999999;stroke-width:4px;",
    path: "M 0,0 A300,300 0 100,100 300,0",
    repeatCount: 1,
    dur: 3,
    width: -600,
    height: 100
   
  }  
}, /// var1 end
{  /// var2 start
  slide: {
    name: "animateMotion Frame element",
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
  ////////////////////////////////////////////////////////////////////////////////
  animateMotionFrame: {
    offset: 25,
    repeatCount: 1,
    dur: 3,
    AmountX: 4,
    AmountY: 4
 
  }  
} /// var2 end    
]
// EOF
});
