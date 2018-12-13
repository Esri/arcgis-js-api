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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/support/geodesicUtils","../../geometry/support/normalizeUtils","../../geometry/support/webMercatorUtils","../../geometry/support/WKIDUnitConversion"],function(e,t,r,i,n,o,a,s,c,p,u){function l(e){var t=e.wkid;if(null!=u[t])return u.values[u[t]];var r=e.wkt,i=r.lastIndexOf(",")+1,n=r.lastIndexOf("]]");return parseFloat(r.substring(i,n))}function m(e,t){return e&&e.indexOf(t)>-1}function d(e,t){var r="decimal-degrees"===e?p.webMercatorToGeographic(t,!0):t;return[r.x,r.y]}function f(e,t,r,i){return new n.Point(e.xmin+i.x/(t/e.width),e.ymax-i.y/(r/e.height),e.spatialReference)}return function(e){function t(t){var r=e.call(this)||this;return r.scaleComputedFrom=new n.ScreenPoint,r.view=null,r}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;var r=this._getDistanceInKm(this.get("view.extent"));if("metric"===t)return this._getScaleBarProps(e,r,"metric");var i=r/1.609;return this._getScaleBarProps(e,i,"non-metric")},t.prototype._getLocationUnit=function(){var e=this.get("view.spatialReference"),t=e.isWebMercator,r=e.wkid,i=e.wkt;return t||m(i,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=u[r]||m(i,"PROJCS")?"linear-unit":"unknown"},t.prototype._getDistanceInKm=function(e){var t=this.view,r=t.width,i=t.height,o=t.position,a=t.spatialReference,p=this._getLocationUnit();if("linear-unit"===p){return Math.abs(e.xmax-e.xmin)*l(a)/1e3}var u=this.scaleComputedFrom.y-o[1];u>i?u=i:u<0&&(u=0);var m=new n.ScreenPoint(0,u),g=new n.ScreenPoint(r,u),h=f(e,r,i,m),v=f(e,r,i,g),y=new n.Polyline({paths:[[d(p,h),d(p,v)]],spatialReference:4326}),w=c.straightLineDensify(y,10);return s.geodesicLengths([w],"kilometers")[0]},t.prototype._getScaleBarProps=function(e,t,r){var i=e*t/this.view.width,n="metric"===r?"km":"mi";if(i<.1)if("mi"===n){i*=5280,n="ft"}else if("km"===n){i*=1e3,n="m"}for(var o=0;i>=1;)i/=10,o++;var a=this._getConstraints(i);if(!a)return null;var s=a.min,c=a.max,p=c/i>=i/s?s:c;return{length:e*(p/i),value:Math.pow(10,o)*p,unit:n}},t.prototype._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},i([a.property()],t.prototype,"scaleComputedFrom",void 0),i([a.property({readOnly:!0,dependsOn:["view.ready"]})],t.prototype,"state",null),i([a.property()],t.prototype,"view",void 0),t=i([a.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],t)}(a.declared(o))});