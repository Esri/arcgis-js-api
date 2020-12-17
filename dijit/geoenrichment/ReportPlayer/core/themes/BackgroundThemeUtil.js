// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions"],(function(e,t,o,a){var r={};return r.hasBackgroundImage=function(e){return e&&!!e.__themeBgImage},r.getBackgroundImage=function(e){return e&&e.__themeBgImage},r.removeBackgroundImage=function(e){e&&(e.__themeBgImage&&t.destroy(e.__themeBgImage),delete e.__themeBgImage)},r.renderThemeBackgroundImage=function(e,o,a,n){if(r.removeBackgroundImage(e),!e||!o||!o.data)return!1;var c=t.create("div",{class:"esriGEAbsoluteStretched "+(n&&n.nodeClass||""),style:"overflow: hidden"},e,"first");return e.__themeBgImage=c,function(e,t){e.style.backgroundImage="url("+t.data+")",t.opacity>0&&t.opacity<1&&(e.style.opacity=t.opacity);e.style.backgroundPosition=t.position||"center",e.style.backgroundRepeat=t.repeat?"repeat":"no-repeat",t.scale?e.style.backgroundSize=t.repeat?"contain":"cover":e.style.backgroundSize=t.size||"auto"}(t.create("div",{style:"background-repeat: no-repeat; background-size: cover;"},c),o),r.updateThemeBackgroundImage(e,a),c},r.updateThemeBackgroundImage=function(t,n){if(r.hasBackgroundImage(t)){var c=t.__themeBgImage.children[0];if(c)if(n&&n.documentOptions&&n.pos){var s=a.getPageBox(n.documentOptions),d=n.zoom||1;o.set(c,{position:"absolute",width:s.w+"px",height:s.h+"px",left:-n.pos.x/d+"px",top:-n.pos.y/d+"px"}),e.remove(c,"esriGEAbsoluteStretched")}else e.add(c,"esriGEAbsoluteStretched")}},r}));