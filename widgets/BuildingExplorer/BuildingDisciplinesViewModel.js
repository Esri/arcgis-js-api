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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","./support/buildingLayerUtils","./support/LayerTreeNode","./support/layerUtils"],(function(e,r,t,o,s,a,i,n,l,d,y,u,c){return function(e){function r(r){var t=e.call(this,r)||this;return t.root=new u.LayerTreeNode,t.state="disabled",t._handles=new i,t._loadLayers=c.createLoadLayersFunction(),t.layers=new s,t}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this._handles.add(this.layers.on("change",(function(){return e._onLayersChange()}))),this._onLayersChange()},r.prototype.destroy=function(){this._set("state","disabled"),this._handles.destroy(),this.root.destroy()},Object.defineProperty(r.prototype,"layers",{set:function(e){var r=this._get("layers");this._set("layers",a.referenceSetter(e,r))},enumerable:!0,configurable:!0}),r.prototype._updateLayerTree=function(){var e=this;this.root.destroy(),this._set("root",new u.LayerTreeNode({collapsed:!1}));var r=new Map,t=this.layers.length>1?"modelName":"id";return this.layers.forEach((function(o){var s=y.findFullModelSublayer(o);n.isSome(s)&&e._addNodesForSublayers(s,e.root,r,t)})),this},r.prototype._addNodeForLayer=function(e,r,t,o){var s=String(e.get(o)).toLowerCase();if(n.isSome(s)&&!e.isEmpty){var a=r.id+"/"+s,i=t.get(a);i||(i=new u.LayerTreeNode({id:s,level:r.level+1}),t.set(a,i)),i.layers.push(e),r.children.push(i),this._addNodesForSublayers(e,i,t,o)}},r.prototype._addNodesForSublayers=function(e,r,t,o){var s=this;"building-group"!==e.type||e.isEmpty||e.sublayers.forEach((function(e){return s._addNodeForLayer(e,r,t,o)}))},r.prototype._onLayersChange=function(){return t.__awaiter(this,void 0,void 0,(function(){var e;return t.__generator(this,(function(r){switch(r.label){case 0:if(this._set("state","loading"),0===this.layers.length)return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._loadLayers(this.layers)];case 2:return r.sent(),this._updateLayerTree(),this._set("state","ready"),[3,4];case 3:return e=r.sent(),l.isAbortError(e)||this._set("state","failed"),[3,4];case 4:return[2]}}))}))},t.__decorate([d.property({readOnly:!0})],r.prototype,"root",void 0),t.__decorate([d.property({type:s,nonNullable:!0})],r.prototype,"layers",null),t.__decorate([d.property({readOnly:!0,nonNullable:!0})],r.prototype,"state",void 0),r=t.__decorate([d.subclass("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],r)}(o)}));