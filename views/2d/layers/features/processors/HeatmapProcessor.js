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

define(["require","exports","tslib","../../../../../core/has","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","../../../../../core/accessorSupport/diffUtils","../../../../../renderers/support/heatmapUtils","./BaseProcessor"],(function(e,t,r,i,o,s,a,n,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t._tileKeyToFeatureSets=new Map,t}return r.__extends(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.update=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){return"heatmap"!==(o=t.schema.processors[0]).type?(i("esri-2d-debug")&&console.debug("Tried to update symbol processor with schema of type",o.type),[2]):a.diff(this._schema,o)?(e.mesh=!0,this._schema=o,[2]):[2]}))}))},t.prototype.onTileUpdate=function(e){for(var t=0,r=e.removed;t<r.length;t++){var i=r[t];this._tileKeyToFeatureSets.delete(i.key.id)}},t.prototype.onTileData=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var s,a,d,u,p,c;return r.__generator(this,(function(l){return this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==t.type||this._tileKeyToFeatureSets.set(e.key.id,new Map),s=this._tileKeyToFeatureSets.get(e.key.id),o.isSome(t.addOrUpdate)&&s.set(t.addOrUpdate.instance,t),a=t.end,s.forEach((function(e){return a=a||e.end})),a?(d=[],s.forEach((function(e){o.isSome(e.addOrUpdate)&&d.push(e.addOrUpdate)})),u=n.calculateHeatmapIntensityInfoReaders(d,this._schema.mesh,512,512),p={tileKey:e.key.id,intensityInfo:u},c=[u.matrix],[2,this.remoteClient.invoke("tileRenderer.onTileData",p,r.__assign(r.__assign({},i),{transferList:c}))]):[2]}))}))},t.prototype.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},t=r.__decorate([s.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(d.default);t.default=u}));