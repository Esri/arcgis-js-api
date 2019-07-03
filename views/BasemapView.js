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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Collection","../core/watchUtils","../core/accessorSupport/decorators"],function(e,r,t,o,n,i,s,p){return function(e){function r(r){var t=e.call(this)||this;return t.view=null,t.baseLayerViews=new i,t.referenceLayerViews=new i,t._loadingHdl=s.init(t,"view.map.basemap",function(e){e&&e.load()}),t}return t(r,e),r.prototype.destroy=function(){this._set("view",null),this._loadingHdl&&(this._loadingHdl.remove(),this._loadingHdl=null)},Object.defineProperty(r.prototype,"suspented",{get:function(){return!this.view||this.view.suspended},enumerable:!0,configurable:!0}),o([p.property({constructOnly:!0})],r.prototype,"view",void 0),o([p.property({readOnly:!0})],r.prototype,"baseLayerViews",void 0),o([p.property({readOnly:!0})],r.prototype,"referenceLayerViews",void 0),o([p.property({dependsOn:["view.suspended"]})],r.prototype,"suspented",null),r=o([p.subclass("esri.views.BasemapView")],r)}(p.declared(n))});