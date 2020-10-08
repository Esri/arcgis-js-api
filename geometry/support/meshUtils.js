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

define(["require","exports","tslib","../Mesh","./meshUtils/georeference","./meshUtils/merge","@dojo/framework/shim/Promise"],(function(e,r,n,t,i,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.merge=r.ungeoreference=r.georeference=r.createElevationSampler=r.createFromElevation=void 0,r.createFromElevation=function(r,t,i){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(r,n){e(["./meshUtils/elevation"],r,n)}))];case 1:return[2,n.sent().create(r,t,i)]}}))}))},r.createElevationSampler=function(r,t){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(r,n){e(["./meshUtils/elevationSampler"],r,n)}))];case 1:return[2,n.sent().create(r,t)]}}))}))},r.georeference=function(e,r,n){return i.georeference(e,r,n)},r.ungeoreference=function(e,r,n){return i.ungeoreference(e,r,n)},r.merge=function(e){return new t(o.merge(e))}}));