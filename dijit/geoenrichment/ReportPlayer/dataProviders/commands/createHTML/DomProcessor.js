// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/promise/all","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/query","dojo/when","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","../supportClasses/HeaderFooterRenderer"],function(e,o,r,t,n,i,a,d,s,c,u){var l={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},processMainNode:function(e,o,r,a){function d(){var o=t.toDom(e.domNode.outerHTML);l.processNode(o,g);var r=i(".esriGEReportPlayer_reportContainerGrid",o);r.forEach(function(e){n.set(e,{width:"auto",height:"auto"})});var a=i(".reportContainerGrid_mainContainer",o);return a.forEach(function(e){n.set(e,{width:"auto",height:"auto"})}),f.processTooltips(o),o}function s(e){var o=[],r=i(".reportContainerGrid_gridContainerWrapper",e);if(r.length>1){r.forEach(function(e){e.parentNode.removeChild(e)});var n=i(".esriGEReportPlayer_reportContainerGrid",e);n.forEach(function(e,o){o>0&&e.parentNode.removeChild(e)}),r.forEach(function(r){var n=t.toDom(e.outerHTML),a=i(".reportContainerGrid_gridStackContainer",n)[0];a.appendChild(r),o.push(n)})}else o.push(e);return o}function c(t){t.forEach(function(n,i){var d=e.getNumberOfPages(),s=Math.floor(i/d),c=i%d;u.addHeaderAndFooterToPage({pageNode:n.children[0],headerFooterParams:o&&o[s],documentOptions:r,pageIndex:a?i:c,numPages:a?t.length:d})})}function h(e){function o(e){return e&&e.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}return o(e.map(function(e){return e.outerHTML}).join(""))}function p(e){e.forEach(function(e){t.destroy(e)})}var g=[],m=d(),v=s(m);c(v);var E=h(v);return p(v),{domString:E,additionalStyleNodes:g}},processNode:function(e,i){function a(e){return!(d.isHidden(e)||"none"===n.get(e,"display")||r.contains(e,"esriTriStateCheckBoxIcon"))}function c(e,r){r=void 0===r?!0:r;for(var t in l.PROPS_TO_REMOVE)(r||"id"!==t)&&o.remove(e,t)}function u(e){if("svg"!==e.localName){var o=s.getStyle(e.id);if(o&&o.forEach(function(e){i.push(e)}),c(e,!o),!a(e))return void t.destroy(e);if(e.children){for(var r=[],n=0;n<e.children.length;n++)r.push(e.children[n]);for(;r.length;)u(r.shift())}}}var l=this;u(e)}},f={processTooltips:function(e){var o=i(".selectableLegendRootLabel",e);o.forEach(function(e){e.title=e.innerHTML})}},h={getDomString:function(e,o,r,t){return l.processMainNode(e,o,r,t)}};return h});