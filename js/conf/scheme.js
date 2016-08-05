//////////////////////////////////////////////////////////////////////////////////////////////
// HTML Site Content definition

var scheme = {
       chapter_id: "chapter_", 
          chapter: "Pattern ", 
  embedded_svg_id: "embedded_svg_00", 
  download_svg_id: "download_svg_00", 	
   full_screen_id: "full_screen_00",       
  collapse_svg_id: "collapse_svg_code_00", 
embedded_svg_code: "embedded_svg_code_00",
           svg_id: "svg_00",
        canvas_id: "canvas_00"
}; 
//////////////////////////////////////////////////////////////////////////////////////////////
function canvas (v) {

var content = [];

var element = {};
for (i=1; i<=v; i++) { 

for (var key in scheme) {
                  element[key] = scheme[key]+i; 
                   
}
content.push(element); 
element = {};   
}
return content;
}
//////////////////////////////////////////////////////////////////////////////////////////////

