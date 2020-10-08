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

define(["require","exports","tslib","../../../Graphic","../../../core/Accessor","../../../core/HandleOwner","../../../core/watchUtils","../../../core/accessorSupport/decorators","../support/featureUtils"],(function(t,e,r,o,n,i,a,c,s){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r._loadingPromise=null,r.created=null,r.creator=null,r.destroyer=null,r.graphic=null,r.handles.add(a.init(r,"creator",(function(t){r._destroyContent(),r._createContent(t)}))),r}return r.__extends(e,t),e.prototype.destroy=function(){this._destroyContent()},Object.defineProperty(e.prototype,"state",{get:function(){return this._loadingPromise?"loading":"ready"},enumerable:!1,configurable:!0}),e.prototype._destroyContent=function(){var t=this.created,e=this.graphic,r=this.destroyer;t&&(s.graphicCallback(r,{graphic:e}).catch((function(){return null})),this._set("created",null))},e.prototype._createContent=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,o,n;return r.__generator(this,(function(r){switch(r.label){case 0:return e=this.graphic,o=s.graphicCallback(t,{graphic:e}).catch((function(){return null})),this._loadingPromise=o,this.notifyChange("state"),[4,o];case 1:return n=r.sent(),o!==this._loadingPromise?[2]:(this._loadingPromise=null,this.notifyChange("state"),this._set("created",n),[2])}}))}))},r.__decorate([c.property({readOnly:!0})],e.prototype,"created",void 0),r.__decorate([c.property()],e.prototype,"creator",void 0),r.__decorate([c.property()],e.prototype,"destroyer",void 0),r.__decorate([c.property({type:o})],e.prototype,"graphic",void 0),r.__decorate([c.property({readOnly:!0})],e.prototype,"state",null),e=r.__decorate([c.subclass("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")],e)}(i.HandleOwnerMixin(n))}));