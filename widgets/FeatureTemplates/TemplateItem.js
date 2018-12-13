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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/Accessor","../../core/HandleOwner","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../symbols/support/symbolPreview"],function(e,t,r,o,n,i,l,p,a,u,s){return function(t){function i(e){var r=t.call(this)||this;return r.description=null,r.label=null,r.layer=null,r.template=null,r.thumbnail=null,r}return r(i,t),i.prototype.initialize=function(){var e=this;this.handles.add(a.init(this,["layer.renderer","template"],function(){return e._set("thumbnail",null)}))},i.prototype.fetchThumbnail=function(){var e=this;return this._get("thumbnail")?p.resolve():this._getPreviewSymbol().then(function(e){return s.renderPreviewHTML(e,{maxSize:36})}).then(function(t){e._set("thumbnail",t)})},i.prototype._getPreviewSymbol=function(){var e=this,t=e.layer,r=e.template,o=e.layer.renderer;if(o){var i=new n({attributes:r.prototype.attributes}),l=o.getSymbol(i);if(l)return p.resolve(l)}return this._getFallbackSymbolFromGeometry(t)},i.prototype._getFallbackSymbolFromGeometry=function(t){var r=t.geometryType;return"point"===r||"multipoint"===r?p.create(function(t){return e(["../../symbols/SimpleMarkerSymbol"],t)}).then(function(e){return new e}):"polyline"===r?p.create(function(t){return e(["../../symbols/SimpleLineSymbol"],t)}).then(function(e){return new e}):"polygon"===r||"mesh"===r||"multipatch"===r?p.create(function(t){return e(["../../symbols/SimpleFillSymbol"],t)}).then(function(e){return new e}):void 0},o([u.property({aliasOf:"template.description"})],i.prototype,"description",void 0),o([u.property({aliasOf:"template.name"})],i.prototype,"label",void 0),o([u.property()],i.prototype,"layer",void 0),o([u.property()],i.prototype,"template",void 0),o([u.property({readOnly:!0})],i.prototype,"thumbnail",void 0),i=o([u.subclass("esri.widgets.FeatureTemplates.TemplateItem")],i)}(u.declared(i,l))});