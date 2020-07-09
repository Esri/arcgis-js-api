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

define(["require","exports","tslib","../../core/Accessor","../../core/Collection","../../core/HandleOwner","../../core/Identifiable","../../core/watchUtils","../../core/accessorSupport/decorators","../../support/actions/ActionBase","../../support/actions/ActionButton","../../support/actions/ActionSlider","../../support/actions/ActionToggle"],(function(e,t,r,o,i,n,a,s,l,c,p,d,y){var u=i.ofType({key:"type",defaultKeyValue:"button",base:c,typeMap:{button:p,toggle:y,slider:d}}),h=i.ofType(u);return function(e){function t(t){var r=e.call(this,t)||this;return r.actionsSections=new h,r.actionsOpen=!1,r.error=null,r.layer=null,r}var o;return r.__extends(t,e),o=t,t.prototype.initialize=function(){var e=this;this.handles.add([s.init(this,"layer",(function(t){return e._watchLayerProperties(t)}))])},Object.defineProperty(t.prototype,"title",{get:function(){var e=this.get("layer.layer");return(!e||e&&this.get("layer.layer.loaded"))&&this.get("layer.title")||""},set:function(e){void 0!==e?this._override("title",e):this._clearOverride("title")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new o({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,layer:this.layer,title:this.title})},t.prototype._watchLayerProperties=function(e){var t=this;this.handles&&(this.handles.remove("layer"),e&&this.handles.add(s.watch(e,"listMode",(function(){return t._watchLayerProperties(e)})),"layer"))},r.__decorate([l.property({type:h})],t.prototype,"actionsSections",void 0),r.__decorate([l.property()],t.prototype,"actionsOpen",void 0),r.__decorate([l.aliasOf("layer.loadError?")],t.prototype,"error",void 0),r.__decorate([l.property()],t.prototype,"layer",void 0),r.__decorate([l.property({dependsOn:["layer.layer?.loaded","layer.title"]})],t.prototype,"title",null),t=o=r.__decorate([l.subclass("esri.widgets.TableList.ListItem")],t)}(a.IdentifiableMixin(n.HandleOwnerMixin(o)))}));