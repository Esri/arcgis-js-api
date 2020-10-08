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

define(["require","exports","tslib","../../Color","../../core/Accessor","../../core/arrayUtils","../../core/Logger","../../core/maybe","../../core/uuid","../../core/accessorSupport/decorators","../../geometry/Point","./GroundElevationProvider","./SceneElevationProvider"],(function(e,t,r,o,n,s,i,a,p,l,c,d,u){"use strict";var y=i.getLogger("ElevationProfileLine");return function(e){function t(t){var r=e.call(this,t)||this;return r.id=p.generateUUID(),r.color=new o("0000FF"),r.provider=new d,r.progress=1,r.samples=null,r.stats=null,r.spatialReference=null,r}return r.__extends(t,e),t.prototype.castProvider=function(e){var t=null;if("string"==typeof e)switch(e){case"ground":case"world-elevation":t=new d({ground:"world-elevation"});break;case"world-topobathymetry":t=new d({ground:"world-topobathymetry"});break;case"scene":t=new u}else"function"==typeof e.queryElevation&&(t=e);return t||(y.error("ElevationProfileLine.provider may not be set to null or undefined"),this._get("provider"))},Object.defineProperty(t.prototype,"updating",{get:function(){return this.progress<1},enumerable:!1,configurable:!0}),t.prototype.updateFromResult=function(e){a.isNone(e)?(this._set("samples",null),this._set("stats",null),this._set("spatialReference",null),this._set("progress",1)):(this._set("samples",e.samples),this._set("stats",e.stats),this._set("spatialReference",e.spatialReference),this._set("progress",e.progress)),this.notifyChange("samples"),this.notifyChange("stats")},t.prototype.getPoint=function(e){var t=this.samples,r=this.spatialReference;if(a.isNone(t)||a.isNone(r))return null;var o=t.length;if(0===o)return null;var n=e*t[o-1].distance,i=s.binaryFindClosest(t,n,(function(e){return e.distance})),p=i.x,l=i.y,d=i.z;return new c({x:p,y:l,z:a.unwrapOr(d,void 0),spatialReference:r})},r.__decorate([l.property({nonNullable:!0})],t.prototype,"id",void 0),r.__decorate([l.property({nonNullable:!0})],t.prototype,"label",void 0),r.__decorate([l.property({type:o,nonNullable:!0})],t.prototype,"color",void 0),r.__decorate([l.property({nonNullable:!0})],t.prototype,"provider",void 0),r.__decorate([l.cast("provider")],t.prototype,"castProvider",null),r.__decorate([l.property()],t.prototype,"progress",void 0),r.__decorate([l.property({readOnly:!0,dependsOn:["progress"]})],t.prototype,"updating",null),r.__decorate([l.property()],t.prototype,"samples",void 0),r.__decorate([l.property()],t.prototype,"stats",void 0),r.__decorate([l.property()],t.prototype,"spatialReference",void 0),t=r.__decorate([l.subclass("esri.widgets.ElevationProfile.ElevationProfileLine")],t)}(n)}));