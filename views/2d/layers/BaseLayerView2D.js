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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/Map","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","./LayerView2D","./support/Display","../../layers/RefreshableLayerView"],function(e,t,r,o,n,i,s,l,p,a,u,c,d){var h=new Set,f=[],y=[],v=function(){function e(e,t,r,o,n,i,s,l,a){void 0===l&&(l=[0,0]),void 0===a&&(a=p.create()),this.id=e,this.level=t,this.row=r,this.col=o,this.world=n,this.resolution=i,this.scale=s,this.coords=l,this.bounds=a}return e}();return function(e){function t(t){var r=e.call(this,t)||this;return r._tileMap=new s.default,r.container=new c.default(r),r.layer=null,r.tiles=[],r}return r(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new a.TileInfoView(e):null},enumerable:!0,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.hitTest=function(e,t){return null},t.prototype.render=function(e){},t.prototype.requestRender=function(){this.container.requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(e){return i(this,void 0,void 0,function(){return n(this,function(e){return[2]})})},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,r=this.tiles;if(t){var o=t.getTileCoverage(e.state,0),n=o.spans,i=o.lodInfo,s=i.level;if(n.length)for(var l=0,p=n;l<p.length;l++)for(var a=p[l],u=a.row,c=a.colFrom,d=a.colTo,g=c;g<=d;g++){var w=i.normalizeCol(g),m=i.getWorldForColumn(g),b=s+"/"+u+"/"+w+"/"+m;if(!this._tileMap.has(b)){var C=new v(b,s,u,w,m,i.resolution,i.scale);i.getTileCoords(C.coords,C,!1),i.getTileBounds(C.bounds,C,!0),this._tileMap.set(b,C),r.push(C),f.push(C)}h.add(b)}}for(var S=r.length-1;S>=0;S--){var C=r[S];h.has(C.id)||(r.splice(S,1),y.push(C),this._tileMap.delete(C.id))}(f.length||y.length)&&(this.tilesChanged(f,y),f.length=y.length=0),h.clear(),this.requestRender()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},o([l.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),o([l.property()],t.prototype,"container",void 0),o([l.property()],t.prototype,"layer",void 0),t=o([l.subclass("esri.views.2d.layers.BaseLayerView2D")],t)}(l.declared(u,d))});