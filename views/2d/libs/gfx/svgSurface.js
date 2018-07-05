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

define(["require","exports","dojo/dom","./Surface","./svg"],function(e,t,r,d,a){function n(e,t,n){var o=new d.default;o.rawNode=a._createElementNS(a.xmlns.svg,"svg"),o.rawNode.setAttribute("overflow","hidden"),t&&o.rawNode.setAttribute("width",t<0?0:t),n&&o.rawNode.setAttribute("height",n<0?0:n);var i=a._createElementNS(a.xmlns.svg,"defs");return o.rawNode.appendChild(i),o.defNode=i,o._parent=r.byId(e),o._parent.appendChild(o.rawNode),o}Object.defineProperty(t,"__esModule",{value:!0}),t.createSurface=n});