// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/lang","../../geometry/support/geodesicUtils","../../geometry/support/normalizeUtils","../../geometry/support/screenUtils","../../geometry/support/webMercatorUtils","../../core/Accessor","../../geometry/Polyline","../../geometry/ScreenPoint","../../geometry/support/WKIDUnitConversion"],function(e,t,r,i,n,o,a,s,p,c,u,l,m,d){function g(e){var t=e.wkid;if(o.isDefined(d[t]))return d.values[d[t]];var r=e.wkt,i=r.lastIndexOf(",")+1,n=r.lastIndexOf("]]");return parseFloat(r.substring(i,n))}function f(e,t){return e&&e.indexOf(t)>-1}function v(e,t){var r="decimal-degrees"===e?c.webMercatorToGeographic(t,!0):t,i=r.x,n=r.y;return[i,n]}var y=function(e){function t(t){var r=e.call(this)||this;return r.scaleComputedFrom=new m,r.view=null,r}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"2d"===this.get("view.type")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.getScaleBarProperties=function(e,t){if("disabled"===this.state||isNaN(e)||!t)return null;var r=this._getDistanceInKm(this.get("view.extent"));if("metric"===t)return this._getScaleBarProps(e,r,"metric");var i=1.609,n=r/i;return this._getScaleBarProps(e,n,"non-metric")},t.prototype._getLocationUnit=function(){var e=this.get("view.spatialReference"),t=e.isWebMercator,r=e.wkid,i=e.wkt;return t||f(i,"WGS_1984_Web_Mercator")?"decimal-degrees":o.isDefined(d[r])||f(i,"PROJCS")?"linear-unit":"unknown"},t.prototype._getDistanceInKm=function(e){var t=this.view,r=t.width,i=t.height,n=t.position,o=t.spatialReference,c=this._getLocationUnit();if("linear-unit"===c){var u=1e3,d=Math.abs(e.xmax-e.xmin),f=g(o);return d*f/u}var y=this.scaleComputedFrom.y-n[1];y>i?y=i:0>y&&(y=0);var h=new m(0,y),w=new m(r,y),x=p.toMapPoint(e,r,i,h),b=p.toMapPoint(e,r,i,w),_=new l({paths:[[v(c,x),v(c,b)]],spatialReference:4326}),S=s._straightLineDensify(_,10),P=a.geodesicLengths([S],"esriKilometers")[0];return P},t.prototype._getScaleBarProps=function(e,t,r){var i=e*t/this.view.width,n="metric"===r?"km":"mi";if(.1>i)if("mi"===n){var o=5280;i*=o,n="ft"}else if("km"===n){var a=1e3;i*=a,n="m"}for(var s=0;i>=1;)i/=10,s++;var p=this._getConstraints(i),c=p.min,u=p.max,l=u/i>=i/c?c:u,m=l/i,d=e*m,g=Math.pow(10,s)*l;return{length:d,value:g,unit:n}},t.prototype._getConstraints=function(e){return e>.5?{min:.5,max:1}:e>.3?{min:.3,max:.5}:e>.2?{min:.2,max:.3}:e>.15?{min:.15,max:.2}:e>=.1?{min:.15,max:.1}:void 0},t}(n.declared(u));return i([n.property()],y.prototype,"scaleComputedFrom",void 0),i([n.property({readOnly:!0,dependsOn:["view.ready"]})],y.prototype,"state",null),i([n.property()],y.prototype,"view",void 0),y=i([n.subclass("esri.widgets.Scalebar.ScaleBarViewModel")],y)});