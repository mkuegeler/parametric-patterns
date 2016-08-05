define({
////////////////////////////////////////////////////////////////////////////////
theme: "my grid",

description: "just a simple parametric pattern",

variants: [
{  /// var1 start
  slide: {
    name: "var1",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#ffcc00;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:#ccff00;stroke:#0000ff;stroke-width:2px;",
    AmountX:8,
    AmountY:8,
    width:800,
    height:800,
    x:0,
    y:0,
    rx:15,
    ry:15,
    offset:25
  },
  ////////////////////////////////////////////////////////////////////////////////
  gridElement: {
    style: "stroke:#000000;stroke-width:2px;"
  },
  
  // /////////////////////////////////////////////////////////////////////////////
  panel: {
    style: "fill:#ff00cc;stroke:#ff0000;stroke-width:2px;",
    rx:0,
    ry:0,
    offset:20
  },
  ////////////////////////////////////////////////////////////////////////////////
  node: {
    style: "stroke:none;fill:#ffff00;stroke:#000000;stroke-width:2px;",
     r:25
  }
}, /// var1 end
{  /// var2 start
  slide: {
    name: "var2",
    width:"100%",
    height:"100%",
    viewBox: "0 0 1600 900",
    style: "background-color:#ccff99;",
    scale:2,
    boxw: 1600,
    boxh: 900
  },
  defs: {
    name: "definitions"
  },
  container: {
    style: "fill:#ccffcc;stroke:#0000ff;stroke-width:2px;",
    AmountX:4,
    AmountY:4,
    width:800,
    height:800,
    x:0,
    y:0,
    rx:15,
    ry:15,
    offset:25
  },
  ////////////////////////////////////////////////////////////////////////////////
  gridElement: {
    style: "stroke:#ff0000;stroke-width:2px;"
  },
  
  // /////////////////////////////////////////////////////////////////////////////
  panel: {
    style: "fill:#66cccc;stroke:#cc0000;stroke-width:1px;",
    rx:0,
    ry:0,
    offset:20
  },
  ////////////////////////////////////////////////////////////////////////////////
  node: {
    style: "stroke:#ffcccc;fill:#00ff00;stroke:#0000ff;stroke-width:2px;",
     r:40
  }
} /// var2 end



]
// EOF
});
