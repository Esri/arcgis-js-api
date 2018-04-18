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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/promise/all","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/query","dojo/when","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","../supportClasses/HeaderFooterRenderer"],function(e,o,t,r,n,i,a,d,s,c,u){var l={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},processMainNode:function(e,o,t,a){var d=[],s=function(){var o=r.toDom(e.domNode.outerHTML);return l.processNode(o,d),i(".esriGEReportPlayer_reportContainerGrid",o).forEach(function(e){n.set(e,{width:"auto",height:"auto"})}),i(".reportContainerGrid_mainContainer",o).forEach(function(e){n.set(e,{width:"auto",height:"auto"})}),f.processTooltips(o),o}(),c=function(e){var o=[],t=i(".reportContainerGrid_gridContainerWrapper",e);if(t.length>1){t.forEach(function(e){e.parentNode.removeChild(e)});i(".esriGEReportPlayer_reportContainerGrid",e).forEach(function(e,o){o>0&&e.parentNode.removeChild(e)}),t.forEach(function(t){var n=r.toDom(e.outerHTML);i(".reportContainerGrid_gridStackContainer",n)[0].appendChild(t),o.push(n)})}else o.push(e);return o}(s);!function(r){r.forEach(function(n,i){var d=e.getNumberOfPages(),s=Math.floor(i/d),c=i%d;u.addHeaderAndFooterToPage({pageNode:n.children[0],headerFooterParams:o&&o[s],documentOptions:t,pageIndex:a?i:c,numPages:a?r.length:d})})}(c);var h=function(e){return function(e){return e&&e.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}(e.map(function(e){return e.outerHTML}).join(""))}(c);return function(e){e.forEach(function(e){r.destroy(e)})}(c),{domString:h,additionalStyleNodes:d}},processNode:function(e,i){function a(e){return!(d.isHidden(e)||"none"===n.get(e,"display")||t.contains(e,"esriTriStateCheckBoxIcon"))}function c(e,t){t=void 0===t||t;for(var r in l.PROPS_TO_REMOVE)(t||"id"!==r)&&o.remove(e,r)}function u(e){if("svg"!==e.localName){var o=s.getStyle(e.id);if(o&&o.forEach(function(e){i.push(e)}),c(e,!o),!a(e))return void r.destroy(e);if(e.children){for(var t=[],n=0;n<e.children.length;n++)t.push(e.children[n]);for(;t.length;)u(t.shift())}}}var l=this;u(e)}},f={processTooltips:function(e){i(".selectableLegendRootLabel",e).forEach(function(e){e.title=e.innerHTML})}};return{getDomString:function(e,o,t,r){return l.processMainNode(e,o,t,r)}}});