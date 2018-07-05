// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/dom"],function(t,e,n){function o(t,e){return document.createElementNS?document.createElementNS(t,e):document.createElement(e)}function r(t,e,n,o){return t.setAttributeNS?t.setAttributeNS(e,n,o):t.setAttribute(n,o)}function d(t){return document.createTextNode(t)}function u(){return document.createDocumentFragment()}function c(t){return t&&"none"!==t?t.match(/^url\(#.+\)$/)?n.byId(t.slice(5,-1)):t.match(/^#dojoUnique\d+$/)?n.byId(t.slice(1)):null:null}Object.defineProperty(e,"__esModule",{value:!0}),e.xmlns={xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"},e.dasharray={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},e._createElementNS=o,e._setAttributeNS=r,e._createTextNode=d,e._createFragment=u,e.getRef=c});