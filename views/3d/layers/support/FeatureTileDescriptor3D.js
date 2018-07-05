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

define(["require","exports","../../../../geometry/support/aaBoundingRect"],function(e,i,t){Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(e,i,s,r){void 0===r&&(r=null),this.lij=[0,0,0],this.extent=t.create(),this.resolution=0,this.loadPriority=0,this.measures={visibility:2,screen:{rect:t.create()},distance:0,shouldSplit:!1},this.used=!1,r&&this.acquire(e,i,s,r)}return e.prototype.acquire=function(i,t,s,r){this.tilingScheme=r,this.id=e.id(i,t,s),this.lij[0]=i,this.lij[1]=t,this.lij[2]=s,r.getExtent(i,t,s,this.extent),this.resolution=r.resolutionAtLevel(i)},e.prototype.release=function(){this.tilingScheme=null},e.prototype.getChildren=function(i){var t=this.lij[0]+1,s=2*this.lij[1],r=2*this.lij[2];return i?(i[0].acquire(t,s,r,this.tilingScheme),i[1].acquire(t,s+1,r,this.tilingScheme),i[2].acquire(t,s,r+1,this.tilingScheme),i[3].acquire(t,s+1,r+1,this.tilingScheme),i):[new e(t,s,r,this.tilingScheme),new e(t,s+1,r,this.tilingScheme),new e(t,s,r+1,this.tilingScheme),new e(t,s+1,r+1,this.tilingScheme)]},e.prototype.copyMeasurementsFrom=function(e){this.measures.visibility=e.measures.visibility,this.measures.shouldSplit=e.measures.shouldSplit,this.measures.distance=e.measures.distance,t.set(e.measures.screen.rect,this.measures.screen.rect)},e.id=function(e,i,t){return e+"/"+i+"/"+t},e}();i.FeatureTileDescriptor3D=s,i.default=s});