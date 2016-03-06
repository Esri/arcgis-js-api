// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","./Point","./Extent","../srUtils"],function(t,e,i,s,a,h,n,r,l,o,p){var c={type:"polyline",paths:null},u=t(r,{declaredClass:"esri.geometry.Polyline",constructor:function(t){i.mixin(this,c),this.paths=[],this._path=0,t&&(i.isArray(t)?this.paths=i.isArray(t[0][0])?t:[t]:t.paths?i.mixin(this,t):this.spatialReference=t,this.spatialReference&&(this.spatialReference=p.createSpatialReference(this.spatialReference))),this.verifySR()},addPath:function(t){return this.clearCache(),this._path=this.paths.length,this.paths[this._path]=[],i.isArray(t[0])?e.forEach(t,this._addPointArr,this):e.forEach(t,this._addPoint,this),this},_addPointArr:function(t){this.paths[this._path].push(t)},_addPoint:function(t){this.paths[this._path].push([t.x,t.y])},_insertPoints:function(t,i){this.clearCache(),this._path=i,this.paths[this._path]||(this.paths[this._path]=[]),e.forEach(t,this._addPoint,this)},_validateInputs:function(t,e){return null!==t&&void 0!==t&&(0>t||t>=this.paths.length)?!1:null!==e&&void 0!==t&&(0>e||e>=this.paths[t].length)?!1:!0},getPoint:function(t,e){return this._validateInputs(t,e)?new l(this.paths[t][e],this.spatialReference):void 0},setPoint:function(t,e,i){return this._validateInputs(t,e)?(this.clearCache(),this.paths[t][e]=[i.x,i.y],this):void 0},insertPoint:function(t,e,i){return this._validateInputs(t)&&h.isDefined(e)&&e>=0&&e<=this.paths[t].length?(this.clearCache(),this.paths[t].splice(e,0,[i.x,i.y]),this):void 0},removePath:function(t){if(this._validateInputs(t,null)){this.clearCache();var e,i=this.paths.splice(t,1)[0],s=i.length,a=this.spatialReference;for(e=0;s>e;e++)i[e]=new l(i[e],a);return i}},removePoint:function(t,e){return this._validateInputs(t,e)?(this.clearCache(),new l(this.paths[t].splice(e,1)[0],this.spatialReference)):void 0},getExtent:function(){var t,e=this.getCacheValue("_extent"),i=this.getCacheValue("_partwise");if(e)return t=new o(e),t._partwise=i,t;var s=this.paths,a=s.length;if(a&&s[0].length){var h,n,r,l,p,c,u,f,d,_,v,y,x,g=p=s[0][0][0],m=c=s[0][0][1],P=Math.min,R=Math.max,C=this.spatialReference,w=[];for(u=0;a>u;u++){for(h=s[u],_=v=h[0]&&h[0][0],y=x=h[0]&&h[0][1],d=h.length,f=0;d>f;f++)n=h[f],r=n[0],l=n[1],g=P(g,r),m=P(m,l),p=R(p,r),c=R(c,l),_=P(_,r),y=P(y,l),v=R(v,r),x=R(x,l);w.push(new o({xmin:_,ymin:y,xmax:v,ymax:x,spatialReference:C?C.toJson():null}))}return e={xmin:g,ymin:m,xmax:p,ymax:c,spatialReference:C?C.toJson():null},i=w.length>1?w:null,this.setCacheValue("_extent",e),this.setCacheValue("_partwise",i),t=new o(e),t._partwise=i,t}},toJson:function(){var t={paths:i.clone(this.paths)},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});return u.defaultProps=c,s("extend-esri")&&(i.setObject("geometry.Polyline",u,a),a.geometry.defaultPolyline=c),u});