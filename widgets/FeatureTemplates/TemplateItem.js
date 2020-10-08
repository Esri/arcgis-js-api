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

define(["require","exports","tslib","../../Graphic","../../core/Accessor","../../core/HandleOwner","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../symbols/support/symbolUtils","@dojo/framework/shim/Promise"],(function(e,t,r,n,o,i,l,a,s,u){"use strict";return function(t){function o(e){var r=t.call(this,e)||this;return r.description=null,r.label=null,r.layer=null,r.template=null,r.thumbnail=null,r}var i;return r.__extends(o,t),i=o,o.prototype.initialize=function(){var e=this;this.handles.add(a.init(this,["layer.renderer","template"],(function(){return e._set("thumbnail",null)})))},o.prototype.clone=function(){var e=this.thumbnail?this.thumbnail.cloneNode(!0):null,t=new i({layer:this.layer,template:this.template});return t._set("thumbnail",e),t},o.prototype.fetchThumbnail=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t;return r.__generator(this,(function(r){switch(r.label){case 0:return this._get("thumbnail")?[2,l.resolve()]:[4,this._getPreviewSymbol()];case 1:return e=r.sent(),[4,u.renderPreviewHTML(e,{maxSize:36})];case 2:return t=r.sent(),this._set("thumbnail",t),[2]}}))}))},o.prototype._getPreviewSymbol=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,o,i,l,a;return r.__generator(this,(function(r){switch(r.label){case 0:return t=(e=this).layer,o=e.template,(i=e.layer.renderer)?(l=new n({attributes:o.prototype.attributes}),[4,i.getSymbolAsync(l)]):[3,2];case 1:if(a=r.sent())return[2,a];r.label=2;case 2:return[2,this._getFallbackSymbolFromGeometry(t)]}}))}))},o.prototype._getFallbackSymbolFromGeometry=function(t){var r=t.geometryType;return"point"===r||"multipoint"===r?new Promise((function(t,r){e(["../../symbols/SimpleMarkerSymbol"],t,r)})).then((function(e){return new e})):"polyline"===r?new Promise((function(t,r){e(["../../symbols/SimpleLineSymbol"],t,r)})).then((function(e){return new e})):"polygon"===r||"mesh"===r||"multipatch"===r?new Promise((function(t,r){e(["../../symbols/SimpleFillSymbol"],t,r)})).then((function(e){return new e})):void 0},r.__decorate([s.property({aliasOf:"template.description"})],o.prototype,"description",void 0),r.__decorate([s.property({aliasOf:"template.name"})],o.prototype,"label",void 0),r.__decorate([s.property()],o.prototype,"layer",void 0),r.__decorate([s.property()],o.prototype,"template",void 0),r.__decorate([s.property({readOnly:!0})],o.prototype,"thumbnail",void 0),o=i=r.__decorate([s.subclass("esri.widgets.FeatureTemplates.TemplateItem")],o)}(i.HandleOwnerMixin(o))}));