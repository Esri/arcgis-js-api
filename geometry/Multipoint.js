// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","./Geometry","./Point","./Extent","../srUtils"],function(t,e,i,n,s,a,r,o,l){var h={type:"multipoint",points:null},c=t(a,{declaredClass:"esri.geometry.Multipoint",constructor:function(t){e.mixin(this,h),this.points=[],t&&(t.points?e.mixin(this,t):this.spatialReference=t,this.spatialReference&&(this.spatialReference=l.createSpatialReference(this.spatialReference))),this.verifySR()},addPoint:function(t){return this.clearCache(),this.points.push(e.isArray(t)?t:[t.x,t.y]),this},removePoint:function(t){return this._validateInputs(t)?(this.clearCache(),new r(this.points.splice(t,1)[0],this.spatialReference)):void 0},getExtent:function(){var t=this.getCacheValue("_extent");if(t)return new o(t);var e=this.points,i=e.length;if(i){var n,s,a,r,l,h=e[0],c=n=h[0],p=s=h[1],u=Math.min,f=Math.max,d=this.spatialReference;for(l=0;i>l;l++)h=e[l],a=h[0],r=h[1],c=u(c,a),p=u(p,r),n=f(n,a),s=f(s,r);return t={xmin:c,ymin:p,xmax:n,ymax:s,spatialReference:d?d.toJson():null},this.setCacheValue("_extent",t),new o(t)}},_validateInputs:function(t){return null===t||0>t||t>=this.points.length?!1:!0},getPoint:function(t){if(this._validateInputs(t)){var e=this.points[t];return new r(e[0],e[1],this.spatialReference)}},setPoint:function(t,e){return this._validateInputs(t)?(this.clearCache(),this.points[t]=[e.x,e.y],this):void 0},toJson:function(){var t={points:e.clone(this.points)},i=this.spatialReference;return i&&(t.spatialReference=i.toJson()),t}});return c.defaultProps=h,i("extend-esri")&&(e.setObject("geometry.Multipoint",c,n),n.geometry.defaultMultipoint=h),c});