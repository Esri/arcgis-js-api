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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Scene=void 0;var n=function(){function e(){this.name="",this.nodes=[]}return e.prototype.addNode=function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)},e.prototype.forEachNode=function(e){this.nodes.forEach(e)},e}();o.Scene=n}));