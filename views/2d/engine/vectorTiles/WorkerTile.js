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

define(["require","exports","tslib","../../../../core/maybe","./Placement","./TileParser","../../tiling/enums"],(function(t,e,r,i,n,s,u){"use strict";return function(){function t(t,e,r){this.status=u.TileStatus.INITIALIZED,this.placementEngine=new n.PlacementEngine,this.tileKey=t,this.refKeys=e,this._workerTileHandler=r}return t.prototype.release=function(){this.tileKey="",this.refKeys=null,this.status=u.TileStatus.INITIALIZED,this._workerTileHandler=null},t.prototype.parse=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,s,a,o,l=this;return r.__generator(this,(function(r){switch(r.label){case 0:return n=e&&e.signal,i.isSome(n)&&(s=function(){n.removeEventListener("abort",s),l.status=u.TileStatus.INVALID},n.addEventListener("abort",s)),[4,this._parse(t,e)];case 1:return a=r.sent(),this.status=u.TileStatus.READY,[2,{result:o={buckets:a.map((function(t){return t.serialize()}))},transferList:o.buckets}]}}))}))},t.prototype.setObsolete=function(){this.status=u.TileStatus.INVALID},t.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},t.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},t.prototype._parse=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return 0===Object.keys(t).length?[2,[]]:(this.status=u.TileStatus.MODIFIED,[2,new s(t,this,e.client).parse(e)])}))}))},t}()}));