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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/query","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","../supportClasses/HeaderFooterRenderer"],function(e,t,o,r,n,i,a,d){var c={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},processMainNode:function(e,t,i,a){var u=[],l=function(){var t=o.toDom(e.domNode.outerHTML);return c.processNode(t,u),n(".esriGEReportPlayer_reportContainerGrid",t).forEach(function(e){r.set(e,{width:"auto",height:"auto"})}),n(".reportContainerGrid_mainContainer",t).forEach(function(e){r.set(e,{width:"auto",height:"auto"})}),s.processTooltips(t),t}(),f=function(e){var t=[],r=n(".reportContainerGrid_gridContainerWrapper",e);if(r.length>1){r.forEach(function(e){e.parentNode.removeChild(e)});n(".esriGEReportPlayer_reportContainerGrid",e).forEach(function(e,t){t>0&&e.parentNode.removeChild(e)}),r.forEach(function(r){var i=o.toDom(e.outerHTML);n(".reportContainerGrid_gridStackContainer",i)[0].appendChild(r),t.push(i)})}else t.push(e);return t}(l);!function(o){o.forEach(function(r,n){var c=e.getNumberOfPages(),s=Math.floor(n/c),u=n%c;d.addHeaderAndFooterToPage({pageNode:r.children[0],headerFooterParams:t&&t[s],documentOptions:i,pageIndex:a?n:u,numPages:a?o.length:c})})}(f);var h=function(e){return function(e){return e&&e.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"")}(e.map(function(e){return e.outerHTML}).join(""))}(f);return function(e){e.forEach(function(e){o.destroy(e)})}(f),{domString:h,additionalStyleNodes:u}},processNode:function(n,d){function c(e,o){return o?"line"!==e.nodeName||e.getAttribute("x1")!==e.getAttribute("x2")||e.getAttribute("y1")!==e.getAttribute("y2"):!(i.isHidden(e)||"none"===r.get(e,"display")||t.contains(e,"esriTriStateCheckBoxIcon"))}function s(t,o){o=void 0===o||o;for(var r in l.PROPS_TO_REMOVE)(o||"id"!==r)&&e.remove(t,r)}function u(e,t){if("svg"===e.nodeName&&(t=!0),!t){var r=a.getStyle(e.id);r&&r.forEach(function(e){d.push(e)}),s(e,!r)}if(!c(e,t))return o.destroy(e),!1;if(e.children)for(var n=e.children.length,i=0,l=0;i+l<n;)u(e.children[i],t)?i++:l++;return!0}var l=this;u(n)}},s={processTooltips:function(e){n(".selectableLegendRootLabel",e).forEach(function(e){e.title=e.innerHTML})}};return{getDomString:function(e,t,o,r){return c.processMainNode(e,t,o,r)}}});