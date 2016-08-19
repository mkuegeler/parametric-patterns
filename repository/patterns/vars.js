define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [

{  /// var1 start
  slide: {
    name: "pattern element",
    description: "Description of element",
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
  pattern: {
    x:10,
    y:10,
    width:20, 
    height:20,
    r:350
  }  
}, /// var1 end
{  /// var2 start
  slide: {
    name: "pattern element",
    description: "Description of element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#FCBB42;",
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
  pattern_a: {    
    r:58.5,
    patternTransform: "translate(61.5,61.5)"
  }  
}, /// var2 end
{  /// var3 start
  slide: {
    name: "pattern element",
    description: "Description of element",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#21AEB5;",
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
  pattern_b: {    
    r:58.5,
    patternTransform: "translate(61.5,62.5)"    
  }  
} /// var3 end  
]
// EOF
});
