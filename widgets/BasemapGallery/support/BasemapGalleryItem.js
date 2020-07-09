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

define(["require","exports","tslib","@dojo/framework/shim/AbortController","../../../core/Accessor","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators"],(function(t,e,i,r,o,a,s,l,n){return function(t){function e(e){var i=t.call(this,e)||this;return i._handles=new a,i.compatibilityFunction=null,i.error=null,i.state="loading",i.view=null,i}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this._handles.add(l.init(this,["basemap.loadStatus","compatibilityFunction","view.basemapTerrain?.tilingScheme","view.ready","view.spatialReference"],(function(){return t.refresh()})))},e.prototype.destroy=function(){this._cancelCompatibilityCheck(),this._handles.destroy(),this._handles=null,this.basemap=null,this.compatibilityFunction=null,this.view=null},Object.defineProperty(e.prototype,"basemap",{set:function(t){var e=this._get("basemap");e&&e.cancelLoad(),t&&t.load().catch((function(){})),this._set("basemap",t)},enumerable:!0,configurable:!0}),e.prototype.refresh=function(){var t=this;this._cancelCompatibilityCheck(),this._set("state","loading");var e=this.get("basemap.loadStatus");if("loaded"===e||"failed"===e)if(this.compatibilityFunction){var i=new r.default,o=i.signal;this.compatibilityFunction(this,{signal:o}).then((function(){t._set("state","ready"),t._set("error",null)})).catch((function(e){s.isAbortError(e)||(t._set("state","error"),t._set("error",e))})),this._lastCompatibilityCheckController=i}else"loaded"===e?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError))},e.prototype._cancelCompatibilityCheck=function(){this._lastCompatibilityCheckController&&(this._lastCompatibilityCheckController.abort(),this._lastCompatibilityCheckController=null)},i.__decorate([n.property()],e.prototype,"basemap",null),i.__decorate([n.property()],e.prototype,"compatibilityFunction",void 0),i.__decorate([n.property({readOnly:!0})],e.prototype,"error",void 0),i.__decorate([n.property({readOnly:!0})],e.prototype,"state",void 0),i.__decorate([n.property()],e.prototype,"view",void 0),e=i.__decorate([n.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],e)}(o)}));