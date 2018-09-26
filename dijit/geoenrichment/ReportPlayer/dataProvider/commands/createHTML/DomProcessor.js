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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/query","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../supportClasses/HeaderFooterRenderer"],function(e,o,r,t,n,i,a,d){var c={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},processMainNode:function(e,o,i,a){var u=[],l=function(){var o=r.toDom(e.domNode.outerHTML);return c.processNode(o,u),n(".esriGEReportPlayer_reportContainerGrid",o).forEach(function(e){t.set(e,{width:"auto",height:"auto"})}),n(".reportContainerGrid_mainContainer",o).forEach(function(e){t.set(e,{width:"auto",height:"auto"})}),s.processTooltips(o),o}(),f=function(e){var o=[],t=n(".reportContainerGrid_gridContainerWrapper",e);if(t.length>1){t.forEach(function(e){e.parentNode.removeChild(e)});n(".esriGEReportPlayer_reportContainerGrid",e).forEach(function(e,o){o>0&&e.parentNode.removeChild(e)}),t.forEach(function(t){var i=r.toDom(e.outerHTML);n(".reportContainerGrid_gridStackContainer",i)[0].appendChild(t),o.push(i)})}else o.push(e);return o}(l);!function(r){r.forEach(function(t,n){var c=e.getNumberOfPages(),s=Math.floor(n/c),u=n%c;d.addHeaderAndFooterToPage({pageNode:t.children[0],headerFooterParams:o&&o[s],documentOptions:i,pageIndex:a?n:u,numPages:a?r.length:c})})}(f);var h=function(e){return function(e){return e&&e.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}(e.map(function(e){return e.outerHTML}).join(""))}(f);return function(e){e.forEach(function(e){r.destroy(e)})}(f),{domString:h,additionalStyleNodes:u}},processNode:function(n,d){function c(e){return!(i.isHidden(e)||"none"===t.get(e,"display")||o.contains(e,"esriTriStateCheckBoxIcon"))}function s(o,r){r=void 0===r||r;for(var t in l.PROPS_TO_REMOVE)(r||"id"!==t)&&e.remove(o,t)}function u(e){if("svg"!==e.localName){var o=a.getStyle(e.id);if(o&&o.forEach(function(e){d.push(e)}),s(e,!o),!c(e))return void r.destroy(e);if(e.children){for(var t=[],n=0;n<e.children.length;n++)t.push(e.children[n]);for(;t.length;)u(t.shift())}}}var l=this;u(n)}},s={processTooltips:function(e){n(".selectableLegendRootLabel",e).forEach(function(e){e.title=e.innerHTML})}};return{getDomString:function(e,o,r,t){return c.processMainNode(e,o,r,t)}}});