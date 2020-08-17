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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","./Point","./Extent","../srUtils"],(function(t,e,n,i,s,o,a,r,p,u){var l={type:"multipoint",points:null},h=t(a,{declaredClass:"esri.geometry.Multipoint",type:"multipoint",points:null,constructor:function(t){this.points=[],t&&(t.points?s.mixin(this,t):this.spatialReference=t,this.spatialReference&&(this.spatialReference=u.createSpatialReference(this.spatialReference))),this.verifySR()},addPoint:function(t){return this.clearCache(),e.isArray(t)?this.points.push(t):this.points.push([t.x,t.y]),this},removePoint:function(t){if(this._validateInputs(t))return this.clearCache(),new r(this.points.splice(t,1)[0],this.spatialReference)},getExtent:function(){var t=this.getCacheValue("_extent");if(t)return new p(t);var e=this.points,n=e.length;if(n){var i,s,o,a,r,u=e[0],l=i=u[0],h=s=u[1],c=Math.min,f=Math.max,y=this.spatialReference;for(r=0;r<n;r++)o=(u=e[r])[0],a=u[1],l=c(l,o),h=c(h,a),i=f(i,o),s=f(s,a);return t={xmin:l,ymin:h,xmax:i,ymax:s,spatialReference:y?y.toJson():null},this.setCacheValue("_extent",t),new p(t)}},_validateInputs:function(t){return!(null===t||t<0||t>=this.points.length)},getPoint:function(t){if(this._validateInputs(t)){var e=this.points[t];return new r(e[0],e[1],this.spatialReference)}},setPoint:function(t,e){if(this._validateInputs(t))return this.clearCache(),this.points[t]=[e.x,e.y],this},toJson:function(){var t={points:s.clone2DArray(this.points)},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});function c(){}function f(){}return c.prototype=h.prototype,f.prototype=new c,Object.defineProperty(f.prototype,"points",{get:function(){return this._unquantizeFn&&(this._pointsVal=this._unquantizeFn({points:s.clone2DArray(this._pointsVal)}).points,this._unquantizeFn=null),this._pointsVal},set:function(t){this._pointsVal=t}}),f.prototype.setupLazyUnquantization=function(t,e){this._unquantizeFn=t,this._pointsVal=e.points},h.simpleConstructor=c,h.accessorConstructor=f,h.defaultProps=l,n("extend-esri")&&(e.setObject("geometry.Multipoint",h,i),i.geometry.defaultMultipoint=l),h}));
