// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/dom","./Surface"],function(e,t,r,n){function d(e,t){return document.createElementNS?document.createElementNS(e,t):document.createElement(t)}function o(e,t,r,n){return e.setAttributeNS?e.setAttributeNS(t,r,n):e.setAttribute(r,n)}function a(e){return document.createTextNode(e)}function u(){return document.createDocumentFragment()}function s(e){return e&&"none"!==e?e.match(/^url\(#.+\)$/)?r.byId(e.slice(5,-1)):e.match(/^#dojoUnique\d+$/)?r.byId(e.slice(1)):null:null}function c(e,o,a){var u=new n["default"];u.rawNode=d(t.xmlns.svg,"svg"),u.rawNode.setAttribute("overflow","hidden"),o&&u.rawNode.setAttribute("width",0>o?0:o),a&&u.rawNode.setAttribute("height",0>a?0:a);var s=d(t.xmlns.svg,"defs");return u.rawNode.appendChild(s),u.defNode=s,u._parent=r.byId(e),u._parent.appendChild(u.rawNode),u}t.xmlns={xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"},t.dasharray={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},t._createElementNS=d,t._setAttributeNS=o,t._createTextNode=a,t._createFragment=u,t.getRef=s,t.createSurface=c});