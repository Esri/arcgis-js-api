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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","@dojo/framework/shim/Map","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","./LayerView2D","./support/Display","../../layers/RefreshableLayerView"],function(e,t,o,r,n,i,l,s,p,a,u){var d=new Set,c=[],h=[],f=function(){function e(e,t,o,r,n,i,s,p,a){void 0===p&&(p=[0,0]),void 0===a&&(a=l.create()),this.id=e,this.level=t,this.row=o,this.col=r,this.world=n,this.resolution=i,this.scale=s,this.coords=p,this.bounds=a}return e}();return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileMap=new n.default,t.container=new a.default(t),t.layer=null,t.tiles=[],t}return o(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new s.TileInfoView(e):null},enumerable:!0,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.hitTest=function(e,t){return null},t.prototype.render=function(e){},t.prototype.requestRender=function(){this.container.requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(){},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,o=this.tiles;if(t){var r=t.getTileCoverage(e.state,0),n=r.spans,i=r.lodInfo,l=i.level;if(n.length)for(var s=0,p=n;s<p.length;s++)for(var a=p[s],u=a.row,y=a.colFrom,v=a.colTo,g=y;g<=v;g++){var w=i.normalizeCol(g),m=i.getWorldForColumn(g),b=l+"/"+u+"/"+w+"/"+m;if(!this._tileMap.has(b)){var C=new f(b,l,u,w,m,i.resolution,i.scale);i.getTileCoords(C.coords,C,!1),i.getTileBounds(C.bounds,C,!0),this._tileMap.set(b,C),o.push(C),c.push(C)}d.add(b)}}for(var V=o.length-1;V>=0;V--){var C=o[V];d.has(C.id)||(o.splice(V,1),h.push(C),this._tileMap.delete(C.id))}(c.length||h.length)&&(this.tilesChanged(c,h),c.length=h.length=0),d.clear(),this.requestRender()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},r([i.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),r([i.property()],t.prototype,"container",void 0),r([i.property()],t.prototype,"layer",void 0),t=r([i.subclass("esri.views.2d.layers.BaseLayerView2D")],t)}(i.declared(p,u))});