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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/Accessor","../../core/HandleOwner","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../symbols/support/symbolUtils"],function(e,t,r,o,n,l,i,a,p,u,s){return function(t){function l(e){var r=t.call(this)||this;return r.description=null,r.label=null,r.layer=null,r.template=null,r.thumbnail=null,r}r(l,t),i=l,l.prototype.initialize=function(){var e=this;this.handles.add(p.init(this,["layer.renderer","template"],function(){return e._set("thumbnail",null)}))},l.prototype.clone=function(){var e=this.thumbnail?this.thumbnail.cloneNode(!0):null,t=new i({layer:this.layer,template:this.template});return t._set("thumbnail",e),t},l.prototype.fetchThumbnail=function(){var e=this;return this._get("thumbnail")?a.resolve():this._getPreviewSymbol().then(function(e){return s.renderPreviewHTML(e,{maxSize:36})}).then(function(t){e._set("thumbnail",t)})},l.prototype._getPreviewSymbol=function(){var e=this,t=e.layer,r=e.template,o=e.layer.renderer;if(o){var l=new n({attributes:r.prototype.attributes}),i=o.getSymbol(l);if(i)return a.resolve(i)}return this._getFallbackSymbolFromGeometry(t)},l.prototype._getFallbackSymbolFromGeometry=function(t){var r=t.geometryType;return"point"===r||"multipoint"===r?a.create(function(t){return e(["../../symbols/SimpleMarkerSymbol"],t)}).then(function(e){return new e}):"polyline"===r?a.create(function(t){return e(["../../symbols/SimpleLineSymbol"],t)}).then(function(e){return new e}):"polygon"===r||"mesh"===r||"multipatch"===r?a.create(function(t){return e(["../../symbols/SimpleFillSymbol"],t)}).then(function(e){return new e}):void 0};var i;return o([u.property({aliasOf:"template.description"})],l.prototype,"description",void 0),o([u.property({aliasOf:"template.name"})],l.prototype,"label",void 0),o([u.property()],l.prototype,"layer",void 0),o([u.property()],l.prototype,"template",void 0),o([u.property({readOnly:!0})],l.prototype,"thumbnail",void 0),l=i=o([u.subclass("esri.widgets.FeatureTemplates.TemplateItem")],l)}(u.declared(l,i))});