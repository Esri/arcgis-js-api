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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","./LayerView2D","./support/Display","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,r,o,i,n,s,a,l,p){"use strict";var u=new Set,d=[],c=[],h=function(e,t,r,o,n,s,a,l,p){void 0===l&&(l=[0,0]),void 0===p&&(p=i.create()),this.id=e,this.level=t,this.row=r,this.col=o,this.world=n,this.resolution=s,this.scale=a,this.coords=l,this.bounds=p};return function(e){function t(t){var r=e.call(this,t)||this;return r._tileMap=new Map,r.container=new a.default(r),r.layer=null,r.tiles=[],r}return r.__extends(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new n.TileInfoView(e):null},enumerable:!1,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.requestRender=function(){this.container.requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2]}))}))},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,r=this.tiles;if(t){var o=t.getTileCoverage(e.state,0),i=o.spans,n=o.lodInfo,s=n.level;if(i.length)for(var a=0,l=i;a<l.length;a++)for(var p=l[a],f=p.row,y=p.colFrom,g=p.colTo,v=y;v<=g;v++){var w=n.normalizeCol(v),_=n.getWorldForColumn(v),V=s+"/"+f+"/"+w+"/"+_;if(!this._tileMap.has(V)){var b=new h(V,s,f,w,_,n.resolution,n.scale);n.getTileCoords(b.coords,b,!1),n.getTileBounds(b.bounds,b,!0),this._tileMap.set(V,b),r.push(b),d.push(b)}u.add(V)}}for(var m=r.length-1;m>=0;m--){b=r[m];u.has(b.id)||(r.splice(m,1),c.push(b),this._tileMap.delete(b.id))}(d.length||c.length)&&(this.tilesChanged(d,c),d.length=c.length=0),u.clear(),this.requestRender()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},r.__decorate([o.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),r.__decorate([o.property()],t.prototype,"layer",void 0),t=r.__decorate([o.subclass("esri.views.2d.layers.BaseLayerView2D")],t)}(p.RefreshableLayerView(s.LayerView2DMixin(l)))}));