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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","@dojo/framework/shim/Map","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","./LayerView2D","./support/DisplayGL","../../layers/RefreshableLayerView"],function(e,t,o,r,n,i,s,l,a,p,u){var c=new Set,d=[],h=[],f=function(){function e(e,t,o,r,n,i,l,a,p){void 0===a&&(a=[0,0]),void 0===p&&(p=s.create()),this.id=e,this.level=t,this.row=o,this.col=r,this.world=n,this.resolution=i,this.scale=l,this.coords=a,this.bounds=p}return e}();return function(e){function t(t){var o=e.call(this,t)||this;return o._tileMap=new n.default,o.container=new p.default(o),o.layer=null,o.tiles=[],o}return o(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new l.TileInfoView(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"context",{get:function(){return this.container&&this.container.stage&&this.container.stage.context.gl},enumerable:!0,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.hitTest=function(e,t){return null},t.prototype.render=function(e){},t.prototype.requestRender=function(){this.container.requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(){},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,o=this.tiles;if(t){var r=t.getTileCoverage(e.state,0),n=r.spans,i=r.lodInfo,s=i.level;if(n.length)for(var l=0,a=n;l<a.length;l++)for(var p=a[l],u=p.row,y=p.colFrom,g=p.colTo,v=y;v<=g;v++){var w=i.normalizeCol(v),b=i.getWorldForColumn(v),m=s+"/"+u+"/"+w+"/"+b;if(!this._tileMap.has(m)){var C=new f(m,s,u,w,b,i.resolution,i.scale);i.getTileCoords(C.coords,C,!1),i.getTileBounds(C.bounds,C,!0),this._tileMap.set(m,C),o.push(C),d.push(C)}c.add(m)}}for(var V=o.length-1;V>=0;V--){var C=o[V];c.has(C.id)||(o.splice(V,1),h.push(C),this._tileMap.delete(C.id))}(d.length||h.length)&&(this.tilesChanged(d,h),d.length=h.length=0),c.clear(),this.requestRender()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},r([i.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),r([i.property()],t.prototype,"container",void 0),r([i.property()],t.prototype,"layer",void 0),r([i.property({dependsOn:["container.stage"]})],t.prototype,"context",null),t=r([i.subclass("esri.views.2d.layers.BaseLayerViewGL2D")],t)}(i.declared(a,u))});