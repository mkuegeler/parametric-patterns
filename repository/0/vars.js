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
  
}, /// var2 end

{  /// var3 start
  slide: {
    name: "line element",
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
  line: {
    style: "stroke:#999999;stroke-width:5px;",
    x2:750
  }
  
}, /// var3 end    

{  /// var4 start
  slide: {
    name: "polygon element",
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
  polygon: {
    style: "fill:none;stroke:#999999;stroke-width:2px;",
    points: "0,0 0,400 400,400 400,0",
    width: 400,
    height: 400
  }
  
}, /// var4 end   

{  /// var5 start
  slide: {
    name: "path element",
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
  path: {
    style: "fill:none;stroke:#999999;stroke-width:2px;",
    d: "M 0,0 A300,300 0 100,100 300,0",
    width: -600,
    height: 100
  }
  
}, /// var5 end  

{  /// var6 start
  slide: {
    name: "path element",
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
  path: {
    style: "fill:none;stroke:#999999;stroke-width:2px;",
    d: "M0 0 L200 0 L200 200 L400 200 L400 400 L200 400 L200 600 L0 600 L0 400 L-200 400 L-200 200 L0 200 Z",    
    width: 200,
    height: 600
  }
  
}, /// var6 end  

{  /// var7 start
  slide: {
    name: "ellipse element",
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
  ellipse: {
    style: "fill:none;stroke:#999999;stroke-width:2px;", 
    rx:400, 
    ry:200
    
  }
  
}, /// var7 end 
{  /// var8 start
  slide: {
    name: "polyline element",
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
  polyline: {
    style: "fill:none;stroke:#999999;stroke-width:2px;", 
    points: "0,0 200,0 200,200 400,200 400,400 200,400 200,600 0,600 0,400 -200,400 -200,200 0,200 0,0",
    width: 200,
    height: 600    
  }
  
}, /// var8 end
{  /// var9 start
  slide: {
    name: "text element",
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
  text: {
    style: "stroke:none; fill:#000000;font-size: 140pt;",
    data: "Medigeist Elements"
  }
  
} /// var9 end   
  



]
// EOF
});
