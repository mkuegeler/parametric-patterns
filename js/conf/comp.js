// templates and sessions
//////////////////////////////////////////////////////////////////////////////////////////////
function session (library,style) {
var v= 1;

for (var i=0; i<library.length; i++) {

		( function(i) {

		         if (style) {
					        style.root = scheme.download_svg_id+v;
									// style.src = scheme.download_svg_id+v;
					        // style.display = "slide";
					        library[i](style).writeCode(scheme.embedded_svg_code+v);


									style.root = scheme.embedded_svg_id+v;
					        // style.display = "slide";
		              library[i](style);

					  v++;
		       }

		})(i);
}
}
//////////////////////////////////////////////////////////////////////////////////////////////

function compose (library) {

var templates = [
function () { return summary_hbs(); },
function () { return canvas_hbs(); },
function () { return scripts_hbs(); }
];

var hb_template; var siteTemplate_name; var hb_template_value;

for (var i=0; i<templates.length; i++) {

hb_template = document.createElement("script");
hb_template.setAttribute("type", "text/x-handlebars-template");
siteTemplate_name = "siteTemplate_0"+(i+1);

hb_template.setAttribute("id", siteTemplate_name);

hb_template_value = document.createTextNode(templates[i]());
hb_template.appendChild(hb_template_value);
document.getElementById("tmpl_placeholder").appendChild(hb_template);

}
//var hb_template_01 = document.createElement("script");
//hb_template_01.setAttribute("type", "text/x-handlebars-template");
//hb_template_01.setAttribute("id", "siteTemplate_01");
//var hb_template_value_01 = document.createTextNode(summary_hbs());
//hb_template_01.appendChild(hb_template_value_01);
//document.getElementById("tmpl_placeholder").appendChild(hb_template_01);

//var hb_template_02 = document.createElement("script");
//hb_template_02.setAttribute("type", "text/x-handlebars-template");
//hb_template_02.setAttribute("id", "siteTemplate_02");
//var hb_template_value_02 = document.createTextNode(canvas_hbs());
//hb_template_02.appendChild(hb_template_value_02);
//document.getElementById("tmpl_placeholder").appendChild(hb_template_02);

//var hb_template_03 = document.createElement("script");
//hb_template_03.setAttribute("type", "text/x-handlebars-template");
//hb_template_03.setAttribute("id", "siteTemplate_03");
//var hb_template_value_03 = document.createTextNode(scripts_hbs());
//hb_template_03.appendChild(hb_template_value_03);
//document.getElementById("tmpl_placeholder").appendChild(hb_template_03);

var script = "data = {canvas: canvas("+library.length+")}; hbs_templates(data,"+templates.length+");";

var dbPlaceholder = document.createElement("script");
dbPlaceholder.setAttribute("type", "text/javascript");
var dbValue = document.createTextNode(script);
dbPlaceholder.appendChild(dbValue);
document.getElementById("data_placeholder").appendChild(dbPlaceholder);

}

//////////////////////////////////////////////////////////////////////////////////////////////
function summary_hbs () {

var template = '{{#each canvas}}<li class="list-group-item">Chapter: {{this.chapter}}</li>{{/each}}';

return template;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function canvas_hbs () {

var template =
'{{#each canvas}}<div id="{{this.chapter_id}}"><div class="page-header"><h2>{{this.chapter}}</h2></div>' +
'<div id="{{this.embedded_svg_id}}"></div><div class="download_svg" id="{{this.download_svg_id}}"></div><br/><a id="{{this.embedded_svg_id}}_download" class="btn btn-default">Download</a>'+
'<button type="button" id="{{this.full_screen_id}}" class="btn btn-default">Full Screen</button>'+
'<button class="btn btn-default" type="button" data-toggle="collapse" data-target="#{{this.collapse_svg_id}}" aria-expanded="false" aria-controls="{{this.collapse_svg_id}}">SVG Source</button></p>'+
'<div class="collapse" id="{{this.collapse_svg_id}}"><pre><code id="{{this.embedded_svg_code}}"></code></pre></div><div></div>'+
'<p>Description.</p></div>{{/each}}';

return template;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function scripts_hbs () {

var template =
'{{#each canvas}} $("#{{this.full_screen_id}}").click(function () {'+
'var el = document.getElementById("{{this.embedded_svg_id}}"); screenfull.toggle(el);});'+
'$("#{{this.embedded_svg_id}}_download").click(function () {'+
'var download = document.getElementById("{{this.embedded_svg_id}}_download");'+
'var svg = document.getElementById("{{this.download_svg_id}}").innerHTML;'+
'download.setAttribute("href", "data:text/text;charset=utf-8," +  encodeURIComponent(svg));'+
'download.setAttribute("download", "{{this.embedded_svg_id}}.svg");});{{/each}}';

return template;
}

//////////////////////////////////////////////////////////////////////////////////////////////
define({
session: function (l,s) { return session (l,s); },
compose: function (s) { return compose (s); }
});
