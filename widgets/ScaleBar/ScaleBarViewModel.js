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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/Accessor","../../core/screenUtils","../../core/accessorSupport/decorators","../../geometry/support/geodesicUtils","../../geometry/support/normalizeUtils","../../geometry/support/webMercatorUtils","../../geometry/support/WKIDUnitConversion"],function(e,t,r,i,n,o,a,s,c,p,u,l){function m(e){var t=e.wkid;if(null!=l[t])return l.values[l[t]];var r=e.wkt,i=r.lastIndexOf(",")+1,n=r.lastIndexOf("]]");return parseFloat(r.substring(i,n))}function d(e,t){return e&&e.indexOf(t)>-1}function f(e,t){var r="decimal-degrees"===e?u.webMercatorToGeographic(t,!0):t;return[r.x,r.y]}function g(e,t,r,i){return new n.Point(e.xmin+i.x/(t/e.width),e.ymax-i.y/(r/e.height),e.spatialReference)}return function(e){function t(t){var r=e.call(this)||this;return r.scaleComputedFrom=a.createScreenPoint(),r.view=null,r}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;var r=this._getDistanceInKm(this.get("view.extent"));if("metric"===t)return this._getScaleBarProps(e,r,"metric");var i=r/1.609;return this._getScaleBarProps(e,i,"non-metric")},t.prototype._getLocationUnit=function(){var e=this.get("view.spatialReference"),t=e.isWebMercator,r=e.wkid,i=e.wkt;return t||d(i,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=l[r]||d(i,"PROJCS")?"linear-unit":"unknown"},t.prototype._getDistanceInKm=function(e){var t=this.view,r=t.width,i=t.height,o=t.position,s=t.spatialReference,u=this._getLocationUnit();if("linear-unit"===u){return Math.abs(e.xmax-e.xmin)*m(s)/1e3}var l=this.scaleComputedFrom.y-o[1];l>i?l=i:l<0&&(l=0);var d=a.createScreenPoint(0,l),h=a.createScreenPoint(r,l),v=g(e,r,i,d),y=g(e,r,i,h),w=new n.Polyline({paths:[[f(u,v),f(u,y)]],spatialReference:4326}),x=p.straightLineDensify(w,10);return c.geodesicLengths([x],"kilometers")[0]},t.prototype._getScaleBarProps=function(e,t,r){var i=e*t/this.view.width,n="metric"===r?"km":"mi";if(i<.1)if("mi"===n){i*=5280,n="ft"}else if("km"===n){i*=1e3,n="m"}for(var o=0;i>=1;)i/=10,o++;var a=this._getConstraints(i);if(!a)return null;var s=a.min,c=a.max,p=c/i>=i/s?s:c;return{length:e*(p/i),value:Math.pow(10,o)*p,unit:n}},t.prototype._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},i([s.property()],t.prototype,"scaleComputedFrom",void 0),i([s.property({readOnly:!0,dependsOn:["view.ready"]})],t.prototype,"state",null),i([s.property()],t.prototype,"view",void 0),t=i([s.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],t)}(s.declared(o))});