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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Graphic","../../core/Accessor","../../core/HandleOwner","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../symbols/support/symbolUtils"],(function(e,t,r,n,o,i,l,a,s,p,u,c,m){return function(t){function a(e){var r=t.call(this,e)||this;return r.description=null,r.label=null,r.layer=null,r.template=null,r.thumbnail=null,r}var s;return r(a,t),s=a,a.prototype.initialize=function(){var e=this;this.handles.add(u.init(this,["layer.renderer","template"],(function(){return e._set("thumbnail",null)})))},a.prototype.clone=function(){var e=this.thumbnail?this.thumbnail.cloneNode(!0):null,t=new s({layer:this.layer,template:this.template});return t._set("thumbnail",e),t},a.prototype.fetchThumbnail=function(){return i(this,void 0,void 0,(function(){var e,t;return o(this,(function(r){switch(r.label){case 0:return this._get("thumbnail")?[2,p.resolve()]:[4,this._getPreviewSymbol()];case 1:return e=r.sent(),[4,m.renderPreviewHTML(e,{maxSize:36})];case 2:return t=r.sent(),this._set("thumbnail",t),[2]}}))}))},a.prototype._getPreviewSymbol=function(){return i(this,void 0,void 0,(function(){var e,t,r,n,i,a;return o(this,(function(o){switch(o.label){case 0:return t=(e=this).layer,r=e.template,(n=e.layer.renderer)?(i=new l({attributes:r.prototype.attributes}),[4,n.getSymbolAsync(i)]):[3,2];case 1:if(a=o.sent())return[2,a];o.label=2;case 2:return[2,this._getFallbackSymbolFromGeometry(t)]}}))}))},a.prototype._getFallbackSymbolFromGeometry=function(t){var r=t.geometryType;return"point"===r||"multipoint"===r?p.create((function(t){return e(["../../symbols/SimpleMarkerSymbol"],t)})).then((function(e){return new e})):"polyline"===r?p.create((function(t){return e(["../../symbols/SimpleLineSymbol"],t)})).then((function(e){return new e})):"polygon"===r||"mesh"===r||"multipatch"===r?p.create((function(t){return e(["../../symbols/SimpleFillSymbol"],t)})).then((function(e){return new e})):void 0},n([c.property({aliasOf:"template.description"})],a.prototype,"description",void 0),n([c.property({aliasOf:"template.name"})],a.prototype,"label",void 0),n([c.property()],a.prototype,"layer",void 0),n([c.property()],a.prototype,"template",void 0),n([c.property({readOnly:!0})],a.prototype,"thumbnail",void 0),a=s=n([c.subclass("esri.widgets.FeatureTemplates.TemplateItem")],a)}(c.declared(s.HandleOwnerMixin(a)))}));