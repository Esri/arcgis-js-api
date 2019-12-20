// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/Accessor","../../core/screenUtils","../../core/accessorSupport/decorators","../../geometry/support/geodesicUtils","../../geometry/support/normalizeUtils","../../geometry/support/spatialReferenceUtils","../../geometry/support/webMercatorUtils","../../geometry/support/WKIDUnitConversion"],function(e,t,r,n,i,o,a,s,c,p,l,u,d){function m(e){var t=e.wkid;if(null!=d[t])return d.values[d[t]];var r=e.wkt,n=r.lastIndexOf(",")+1,i=r.lastIndexOf("]]");return parseFloat(r.substring(n,i))}function f(e,t){return e&&e.indexOf(t)>-1}function g(e,t){var r="decimal-degrees"===e?u.webMercatorToGeographic(t,!0):t;return[r.x,r.y]}function v(e,t,r,n){return new i.Point(e.xmin+n.x/(t/e.width),e.ymax-n.y/(r/e.height),e.spatialReference)}function h(e){var t=e.content,r=e.spatialReference,n=e.width;return r.isWrappable&&t.worldScreenWidth<n}return function(e){function t(t){var r=e.call(this,t)||this;return r.scaleComputedFrom=a.createScreenPoint(),r.view=null,r}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;var r=this._getDistanceInKm(this.view,this.scaleComputedFrom);if("metric"===t)return this._getScaleBarProps(e,r,"metric");var n=r/1.609;return this._getScaleBarProps(e,n,"non-metric")},t.prototype._getLocationUnit=function(){var e=this.get("view.spatialReference"),t=e.isWebMercator,r=e.wkid,n=e.wkt;return t||f(n,"WGS_1984_Web_Mercator")?"decimal-degrees":null!=d[r]||f(n,"PROJCS")?"linear-unit":"unknown"},t.prototype._getDistanceInKm=function(e,t){var r=e.extent,n=e.spatialReference,o=this._getLocationUnit();if("linear-unit"===o){return Math.abs(r.xmax-r.xmin)*m(n)/1e3}var a=this._getScaleMeasuringPoints(e,t),s=a[0],l=a[1],u=new i.Polyline({paths:[[g(o,s),g(o,l)]],spatialReference:4326}),d=p.straightLineDensify(u,10);return c.geodesicLengths([d],"kilometers")[0]},t.prototype._getScaleMeasuringPoints=function(e,t){var r=e.extent,n=e.width,o=e.height,s=e.position,c=e.spatialReference;if(h(e)){var p=l.getInfo(c).valid;return[new i.Point(p[0],0,c),new i.Point(p[1],0,c)]}var u=t.y-s[1];u>o?u=o:u<0&&(u=0);var d=a.createScreenPoint(0,u),m=a.createScreenPoint(n,u);return[v(r,n,o,d),v(r,n,o,m)]},t.prototype._getScaleBarProps=function(e,t,r){var n=this.view,i=h(n)?n.content.worldScreenWidth:n.width,o=e*t/i,a="metric"===r?"km":"mi";if(o<.1)if("mi"===a){o*=5280,a="ft"}else if("km"===a){o*=1e3,a="m"}for(var s=0;o>=1;)o/=10,s++;var c=this._getConstraints(o);if(!c)return null;var p=c.min,l=c.max,u=l/o>=o/p?p:l;return{length:e*(u/o),value:Math.pow(10,s)*u,unit:a}},t.prototype._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},n([s.property()],t.prototype,"scaleComputedFrom",void 0),n([s.property({readOnly:!0,dependsOn:["scaleComputedFrom","view.ready","view.scale"]})],t.prototype,"state",null),n([s.property()],t.prototype,"view",void 0),t=n([s.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],t)}(s.declared(o))});