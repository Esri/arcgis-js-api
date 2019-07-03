// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions"],function(e,t,o,a){function r(e,t){e.style.backgroundImage="url("+t.data+")",t.opacity>0&&t.opacity<1&&(e.style.opacity=t.opacity),e.style.backgroundPosition=t.position||"center",e.style.backgroundRepeat=t.repeat?"repeat":"no-repeat",t.scale?e.style.backgroundSize=t.repeat?"contain":"cover":e.style.backgroundSize=t.size||"auto"}var n={};return n.hasBackgroundImage=function(e){return e&&!!e.__themeBgImage},n.getBackgroundImage=function(e){return e&&e.__themeBgImage},n.removeBackgroundImage=function(e){e&&(e.__themeBgImage&&t.destroy(e.__themeBgImage),delete e.__themeBgImage)},n.renderThemeBackgroundImage=function(e,o,a){if(n.removeBackgroundImage(e),!e||!o||!o.data)return!1;var c=t.create("div",{class:"esriGEAbsoluteStretched",style:"overflow: hidden"},e,"first");return e.__themeBgImage=c,r(t.create("div",{style:"background-repeat: no-repeat; background-size: cover;"},c),o),n.updateThemeBackgroundImage(e,a),c},n.updateThemeBackgroundImage=function(t,r){if(n.hasBackgroundImage(t)){var c=t.__themeBgImage.children[0];if(c)if(r&&r.documentOptions&&r.pos){var i=a.getPageBox(r.documentOptions),s=r.zoom||1;o.set(c,{position:"absolute",width:i.w+"px",height:i.h+"px",left:-r.pos.x/s+"px",top:-r.pos.y/s+"px"}),e.remove(c,"esriGEAbsoluteStretched")}else e.add(c,"esriGEAbsoluteStretched")}},n});