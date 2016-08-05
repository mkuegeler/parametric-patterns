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
  rect: {width:10, height:10}
} /// var1 end




]
// EOF
});
