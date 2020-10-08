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

define(["require","exports","./Util"],(function(e,t,r){"use strict";function o(e){return t=e.data,r.getFirstObjectValue(t.indices).length>=1;var t}Object.defineProperty(t,"__esModule",{value:!0}),t.splitRenderGeometryChangeSetByMaterial=void 0,t.splitRenderGeometryChangeSetByMaterial=function(e){for(var t=new Map,r=null,n=null,a=function(e){if(e===r)return n;var o=t.get(e);return o||(o={toAdd:[],numToAdd:-1,toRemove:[],numToRemove:-1,toUpdate:[],numToUpdate:-1},t.set(e,o)),r=e,n=o,o},d=0;d<e.numToAdd;d++){if(o(i=e.toAdd[d]))a(i.material).toAdd.push(i)}for(d=0;d<e.numToRemove;d++){var i;if(o(i=e.toRemove[d]))a(i.material).toRemove.push(i)}for(d=0;d<e.numToUpdate;d++){var u=e.toUpdate[d];if(o(u.renderGeometry))a(u.renderGeometry.material).toUpdate.push(u)}return t}}));