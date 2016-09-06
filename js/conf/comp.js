// templates and sessions
//////////////////////////////////////////////////////////////////////////////////////////////
function session (library,style) {
var v= 1;

for (var i=0; i<library.length; i++) {

		( function(i) {

		         if (style) {
					        style.root = scheme.download_svg_id+v;
								
					        library[i](style).writeCode(scheme.embedded_svg_code+v);

									style.root = scheme.embedded_svg_id+v;
					        
		              library[i](style); 

					  v++;
		       }

		})(i);
}
}
//////////////////////////////////////////////////////////////////////////////////////////////

function compose (library,vars) {

var templates = [
function (v) { return summary_hbs(v); },
function (v) { return canvas_hbs(v); },
function (v) { return scripts_hbs(v); }
];

var hb_template; var siteTemplate_name; var hb_template_value;

for (var i=0; i<templates.length; i++) {

hb_template = document.createElement("script");
hb_template.setAttribute("type", "text/x-handlebars-template");
siteTemplate_name = "siteTemplate_0"+(i+1);

hb_template.setAttribute("id", siteTemplate_name);

hb_template_value = document.createTextNode(templates[i](vars));
hb_template.appendChild(hb_template_value);
document.getElementById("tmpl_placeholder").appendChild(hb_template);

}
// hbs_templates is defined in the html file respectively
var script = "data = {canvas: canvas("+library.length+")}; hbs_templates(data,"+templates.length+");";

var dbPlaceholder = document.createElement("script");
dbPlaceholder.setAttribute("type", "text/javascript");
var dbValue = document.createTextNode(script);
dbPlaceholder.appendChild(dbValue);
document.getElementById("data_placeholder").appendChild(dbPlaceholder);

}

//////////////////////////////////////////////////////////////////////////////////////////////
function summary_hbs (vars) {

var template ="", i = 1;

vars.variants.forEach( function(v) { 
template += '<li class="list-group-item"><a href="#chapter_'+i+'">'+i+'.'+v.slide.name+'</a><p class="list-description">'+v.slide.description+'</p></li>';
	i++;
}
);

// var template = '{{#each canvas}}<li class="list-group-item">Chapter: {{this.chapter}} <p class="list-description">'+v.variants[0].slide.name+'</p></li>{{/each}}';

return template;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function canvas_hbs (vars) {
	
var template ="", i = 1;

vars.variants.forEach( function(v) { 
// template += '<li class="list-group-item"><a href="#">'+v.slide.name+'</a><p class="list-description">'+v.slide.description+'</p></li>';
	
 template +=
 '<div id="chapter_'+i+'"><div class="page-header"><h2 class="h_white">'+i+'.'+v.slide.name+'</h2></div>' +
 '<a name="chapter_'+i+'"/><div class="embedded_svg" id="embedded_svg_00'+i+'"></div><div class="download_svg" id="download_svg_00'+i+'"></div><br/><p class="btn-toolbar"><a type="button" id="embedded_svg_00'+i+'_download" class="btn btn-default">Download</a>'+
 '<button type="button" id="full_screen_00'+i+'" class="btn btn-default">Full Screen</button>'+
 '<button class="btn btn-default" type="button" data-toggle="collapse" data-target="#collapse_svg_code_00'+i+'" aria-expanded="false" aria-controls="collapse_svg_code_00'+i+'">SVG Source</button></p>'+
 '<div class="collapse" id="collapse_svg_code_00'+i+'"><pre class="code"><code id="embedded_svg_code_00'+i+'"></code></pre></div>'+
 '<p class="link"><a href="#content">Back</a></p><p class="desc">'+v.slide.description+'.</p></div>';	
	
	i++;
}
);	

// var template =
// '{{#each canvas}}<div id="{{this.chapter_id}}"><div class="page-header"><h2>{{this.chapter}}</h2></div>' +
// '<div id="{{this.embedded_svg_id}}"></div><div class="download_svg" id="{{this.download_svg_id}}"></div><br/><a id="{{this.embedded_svg_id}}_download" class="btn btn-default">Download</a>'+
// '<button type="button" id="{{this.full_screen_id}}" class="btn btn-default">Full Screen</button>'+
// '<button class="btn btn-default" type="button" data-toggle="collapse" data-target="#{{this.collapse_svg_id}}" aria-expanded="false" aria-controls="{{this.collapse_svg_id}}">SVG Source</button></p>'+
// '<div class="collapse" id="{{this.collapse_svg_id}}"><pre><code id="{{this.embedded_svg_code}}"></code></pre></div><div></div>'+
// '<p>Description.</p></div>{{/each}}';

return template;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function scripts_hbs (vars) {

var template ="", i = 1;	
	
vars.variants.forEach( function(v) { 
	
	template +=
'$("#full_screen_00'+i+'").click(function () {'+
'var el = document.getElementById("embedded_svg_00'+i+'"); screenfull.toggle(el);});'+
'$("#embedded_svg_00'+i+'_download").click(function () {'+
'var download = document.getElementById("embedded_svg_00'+i+'_download");'+
'var svg = document.getElementById("download_svg_00'+i+'").innerHTML;'+
'download.setAttribute("href", "data:image/svg+xml," +  encodeURIComponent(svg));'+
'download.setAttribute("download", "embedded_svg_00'+i+'.svg");});';	
  
//  template +=	'var elem = document.getElementById("embedded_svg_00'+i+'");'+
//  'document.getElementById("full_screen_00'+i+'").addEventListener("click", () => {'+
//      'if (screenfull.enabled) {screenfull.request(elem);} });';
	
	i++;
}
);		
// var template =
// '{{#each canvas}} $("#{{this.full_screen_id}}").click(function () {'+
// 'var el = document.getElementById("{{this.embedded_svg_id}}"); screenfull.toggle(el);});'+
// '$("#{{this.embedded_svg_id}}_download").click(function () {'+
// 'var download = document.getElementById("{{this.embedded_svg_id}}_download");'+
// 'var svg = document.getElementById("{{this.download_svg_id}}").innerHTML;'+
// 'download.setAttribute("href", "data:text/text;charset=utf-8," +  encodeURIComponent(svg));'+
// 'download.setAttribute("download", "{{this.embedded_svg_id}}.svg");});{{/each}}';

return template;
}

//////////////////////////////////////////////////////////////////////////////////////////////
define({
session: function (l,s) { return session (l,s); },
compose: function (s,v) { return compose (s,v); }
});
