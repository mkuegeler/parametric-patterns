define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [
{  /// var1 start
  slide: {
    name: "rect element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#cccccc;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:none;stroke:#000000;stroke-width:1px; stroke-dasharray:5,5",
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
  rect: {
    style: "fill:none;stroke:#999999;stroke-width:2px;",
    width:600, 
    height:600
  }
}, /// var1 end

{  /// var2 start
  slide: {
    name: "circle element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#cccccc;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:none;stroke:#000000;stroke-width:1px; stroke-dasharray:5,5",
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
  circle: {
    style: "fill:none;stroke:#999999;stroke-width:2px;",
    r:350
  }
  
} /// var2 end  




]
// EOF
});
