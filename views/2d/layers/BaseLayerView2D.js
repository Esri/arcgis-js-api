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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","@dojo/shim/Map","../../../core/accessorSupport/decorators","../../../geometry/support/aaBoundingRect","../tiling","../ViewState","../engine/Canvas2DContainer","../engine/DisplayObject","./LayerView2D","../../layers/RefreshableLayerView"],function(e,t,r,n,o,i,a,s,l,p,c,d,h){var u=new Set,f=[],y=[],v=function(e){function t(t){var r=e.call(this)||this;return r.layerView=t,r._canvas=document.createElement("canvas"),r._childrenRenderParameters={context:r._canvas.getContext("2d"),pixelRatio:1,state:new l,stationary:!0},r.requestRender=r.requestRender.bind(r),r}return r(t,e),t.prototype.doRender=function(e){var t=e.state,r=t.width,n=t.height,o=this._canvas,i=this._childrenRenderParameters;o.width=r,o.height=n,i.state.copy(e.state),i.stationary=e.stationary,i.pixelRatio=e.pixelRatio,this.layerView.render(i),e.context.drawImage(o,0,0)},t}(c),g=function(){function e(e,t,r,n,o,i,s,l,p){void 0===l&&(l=[0,0]),void 0===p&&(p=a.create()),this.id=e,this.level=t,this.row=r,this.col=n,this.world=o,this.resolution=i,this.scale=s,this.coords=l,this.bounds=p}return e}();return function(e){function t(){var t=e.call(this)||this;t._tileMap=new o.default,t.layer=null,t.tiles=[];var r=new p,n=new v(t);return r.addChild(n),t.container=r,t}return r(t,e),Object.defineProperty(t.prototype,"_tileInfoView",{get:function(){var e=this.layer&&this.layer.tileInfo;return e?new s.TileInfoView(e):null},enumerable:!0,configurable:!0}),t.prototype.attach=function(){},t.prototype.detach=function(){},t.prototype.render=function(e){},t.prototype.requestRender=function(){this.container&&this.container.children[0]&&this.container.children[0].requestRender()},t.prototype.tilesChanged=function(e,t){},t.prototype.doRefresh=function(){},t.prototype.isUpdating=function(){return!1},t.prototype.update=function(e){var t=this._tileInfoView,r=this.tiles;if(t){var n=t.getTileCoverage(e.state,0),o=n.spans,i=n.lodInfo,a=i.level;if(o.length)for(var s=0,l=o;s<l.length;s++)for(var p=l[s],c=p.row,d=p.colFrom,h=p.colTo,v=d;v<=h;v++){var w=i.normalizeCol(v),m=i.getWorldForColumn(v),R=a+"/"+c+"/"+w+"/"+m;if(!this._tileMap.has(R)){var _=new g(R,a,c,w,m,i.resolution,i.scale);i.getTileCoords(_.coords,_,!1),i.getTileBounds(_.bounds,_,!0),this._tileMap.set(R,_),r.push(_),f.push(_)}u.add(R)}}for(var C=r.length-1;C>=0;C--){var _=r[C];u.has(_.id)||(r.splice(C,1),y.push(_),this._tileMap.delete(_.id))}(f.length||y.length)&&(this.tilesChanged(f,y),f.length=y.length=0),u.clear()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){},t.prototype.hitTest=function(e,t){return null},n([i.property({dependsOn:["layer.loaded"]})],t.prototype,"_tileInfoView",null),n([i.property()],t.prototype,"container",void 0),n([i.property()],t.prototype,"layer",void 0),t=n([i.subclass("esri.views.2d.layers.BaseLayerView2D")],t)}(i.declared(d,h))});