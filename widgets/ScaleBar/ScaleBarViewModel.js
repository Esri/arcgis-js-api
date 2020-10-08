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

define(["require","exports","tslib","../../geometry","../../core/Accessor","../../core/screenUtils","../../core/accessorSupport/decorators","../../geometry/support/geodesicUtils","../../geometry/support/normalizeUtils","../../geometry/support/spatialReferenceUtils","../../geometry/support/webMercatorUtils","../../geometry/support/WKIDUnitConversion"],(function(e,t,r,i,n,a,o,s,c,p,l,u){"use strict";function d(e,t){return e&&e.indexOf(t)>-1}function m(e,t){var r="decimal-degrees"===e?l.webMercatorToGeographic(t,!0):t;return[r.x,r.y]}function f(e){var t=e.state.paddedViewState,r=e.spatialReference,i=e.width;return r.isWrappable&&t.worldScreenWidth<i}return function(e){function t(t){var r=e.call(this,t)||this;return r.scaleComputedFrom=a.createScreenPoint(),r.view=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!1,configurable:!0}),t.prototype.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;var r=this._getDistanceInKm(this.view,this.scaleComputedFrom);if("metric"===t)return this._getScaleBarProps(e,r,"metric");var i=r/1.609;return this._getScaleBarProps(e,i,"non-metric")},t.prototype._getLocationUnit=function(){var e=this.get("view.spatialReference"),t=e.isWebMercator,r=e.wkid,i=e.wkt;return t||d(i,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=u[r]||d(i,"PROJCS")?"linear-unit":"unknown"},t.prototype._getDistanceInKm=function(e,t){var r=e.state,n=e.spatialReference,a=this._getLocationUnit();if("linear-unit"===a){return r.extent.width*function(e){var t=e.wkid;if(null!=u[t])return u.values[u[t]];var r=e.wkt,i=r.lastIndexOf(",")+1,n=r.lastIndexOf("]]");return parseFloat(r.substring(i,n))}(n)/1e3}var o=this._getScaleMeasuringPoints(e,t),p=o[0],l=o[1],d=new i.Polyline({paths:[[m(a,p),m(a,l)]],spatialReference:4326}),f=c.straightLineDensify(d,10);return s.geodesicLengths([f],"kilometers")[0]},t.prototype._getScaleMeasuringPoints=function(e,t){var r=e.width,n=e.height,o=e.position,s=e.spatialReference;if(f(e)){var c=p.getInfo(s).valid;return[new i.Point(c[0],0,s),new i.Point(c[1],0,s)]}var l=t.y-o[1];l>n?l=n:l<0&&(l=0);var u=a.createScreenPoint(0,l),d=a.createScreenPoint(r,l);return[e.toMap(u),e.toMap(d)]},t.prototype._getScaleBarProps=function(e,t,r){var i=this.view,n=e*t/(f(i)?i.state.paddedViewState.worldScreenWidth:i.width),a="metric"===r?"km":"mi";if(n<.1)if("mi"===a){n*=5280,a="ft"}else if("km"===a){n*=1e3,a="m"}for(var o=0;n>=1;)n/=10,o++;var s=this._getConstraints(n);if(!s)return null;var c=s.min,p=s.max,l=p/n>=n/c?c:p;return{length:e*(l/n),value:Math.pow(10,o)*l,unit:a}},t.prototype._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},r.__decorate([o.property()],t.prototype,"scaleComputedFrom",void 0),r.__decorate([o.property({readOnly:!0,dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],t.prototype,"state",null),r.__decorate([o.property()],t.prototype,"view",void 0),t=r.__decorate([o.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],t)}(n)}));