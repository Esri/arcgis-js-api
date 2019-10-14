// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","./LayerView2D","./support/DisplayGL","../../layers/LayerView","../../layers/RefreshableLayerView"],function(e,t,r,o,n,i,s,a,l,p,u,c,d){var h=new Set,f=[],y=[],g=function(){function e(e,t,r,o,n,i,s,l,p){void 0===l&&(l=[0,0]),void 0===p&&(p=a.create()),this.id=e,this.level=t,this.row=r,this.col=o,this.world=n,this.resolution=i,this.scale=s,this.coords=l,this.bounds=p}return e}();return function(e){function t(t){var r=e.call(this,t)||this;return r._tileMap=new Map,r.container=new u.default(r),r.layer=null,r.tiles=[],r}return r(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new l.TileInfoView(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"context",{get:function(){return this.container&&this.container.stage&&this.container.stage.context.gl},enumerable:!0,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.hitTest=function(e,t){return null},t.prototype.render=function(e){},t.prototype.requestRender=function(){this.container.requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(e){return i(this,void 0,void 0,function(){return n(this,function(e){return[2]})})},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,r=this.tiles;if(t){var o=t.getTileCoverage(e.state,0),n=o.spans,i=o.lodInfo,s=i.level;if(n.length)for(var a=0,l=n;a<l.length;a++)for(var p=l[a],u=p.row,c=p.colFrom,d=p.colTo,v=c;v<=d;v++){var w=i.normalizeCol(v),b=i.getWorldForColumn(v),V=s+"/"+u+"/"+w+"/"+b;if(!this._tileMap.has(V)){var m=new g(V,s,u,w,b,i.resolution,i.scale);i.getTileCoords(m.coords,m,!1),i.getTileBounds(m.bounds,m,!0),this._tileMap.set(V,m),r.push(m),f.push(m)}h.add(V)}}for(var L=r.length-1;L>=0;L--){var m=r[L];h.has(m.id)||(r.splice(L,1),y.push(m),this._tileMap.delete(m.id))}(f.length||y.length)&&(this.tilesChanged(f,y),f.length=y.length=0),h.clear(),this.requestRender()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},o([s.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),o([s.property()],t.prototype,"container",void 0),o([s.property()],t.prototype,"layer",void 0),o([s.property({dependsOn:["container.stage"]})],t.prototype,"context",null),t=o([s.subclass("esri.views.2d.layers.BaseLayerViewGL2D")],t)}(s.declared(d.RefreshableLayerView(p.LayerView2D(c))))});