// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","./Point","./Extent","../srUtils"],(function(t,e,i,s,a,n,h,r,l,p,o){var u={type:"polyline",paths:null},c=t(r,{declaredClass:"esri.geometry.Polyline",type:"polyline",paths:null,constructor:function(t){this.paths=[],this._path=0,t&&(i.isArray(t)?this.paths=i.isArray(t[0][0])?t:[t]:t.paths?n.mixin(this,t):this.spatialReference=t,this.spatialReference&&(this.spatialReference=o.createSpatialReference(this.spatialReference))),this.verifySR()},addPath:function(t){return this.clearCache(),this._path=this.paths.length,this.paths[this._path]=[],i.isArray(t[0])?e.forEach(t,this._addPointArr,this):e.forEach(t,this._addPoint,this),this},_addPointArr:function(t){this.paths[this._path].push(t)},_addPoint:function(t){this.paths[this._path].push([t.x,t.y])},_insertPoints:function(t,i){this.clearCache(),this._path=i,this.paths[this._path]||(this.paths[this._path]=[]),e.forEach(t,this._addPoint,this)},_validateInputs:function(t,e){return(null==t||!(t<0||t>=this.paths.length))&&(null===e||void 0===t||!(e<0||e>=this.paths[t].length))},getPoint:function(t,e){if(this._validateInputs(t,e))return new l(this.paths[t][e],this.spatialReference)},setPoint:function(t,e,i){if(this._validateInputs(t,e))return this.clearCache(),this.paths[t][e]=[i.x,i.y],this},insertPoint:function(t,e,i){if(this._validateInputs(t)&&null!=e&&e>=0&&e<=this.paths[t].length)return this.clearCache(),this.paths[t].splice(e,0,[i.x,i.y]),this},removePath:function(t){if(this._validateInputs(t,null)){this.clearCache();var e,i=this.paths.splice(t,1)[0],s=i.length,a=this.spatialReference;for(e=0;e<s;e++)i[e]=new l(i[e],a);return i}},removePoint:function(t,e){if(this._validateInputs(t,e))return this.clearCache(),new l(this.paths[t].splice(e,1)[0],this.spatialReference)},getExtent:function(){var t,e=this.getCacheValue("_extent"),i=this.getCacheValue("_partwise");if(e)return(t=new p(e))._partwise=i,t;var s=this.paths,a=s.length;if(a&&s[0].length){var n,h,r,l,o,u,c,f,_,y,d,g,m,x=o=s[0][0][0],P=u=s[0][0][1],v=Math.min,R=Math.max,C=this.spatialReference,w=[];for(c=0;c<a;c++){for(y=d=(n=s[c])[0]&&n[0][0],g=m=n[0]&&n[0][1],_=n.length,f=0;f<_;f++)r=(h=n[f])[0],l=h[1],x=v(x,r),P=v(P,l),o=R(o,r),u=R(u,l),y=v(y,r),g=v(g,l),d=R(d,r),m=R(m,l);w.push(new p({xmin:y,ymin:g,xmax:d,ymax:m,spatialReference:C?C.toJson():null}))}return e={xmin:x,ymin:P,xmax:o,ymax:u,spatialReference:C?C.toJson():null},i=w.length>1?w:null,this.setCacheValue("_extent",e),this.setCacheValue("_partwise",i),(t=new p(e))._partwise=i,t}},toJson:function(){var t={paths:n.clone3DArray(this.paths)},e=this.spatialReference;return e&&(t.spatialReference=e.toJson()),t}});function f(){}function _(){}return f.prototype=c.prototype,_.prototype=new f,Object.defineProperty(_.prototype,"paths",{get:function(){return this._unquantizeFn&&(this._pathsVal=this._unquantizeFn({paths:n.clone3DArray(this._pathsVal)}).paths,this._unquantizeFn=null),this._pathsVal},set:function(t){this._pathsVal=t}}),_.prototype.setupLazyUnquantization=function(t,e){this._unquantizeFn=t,this._pathsVal=e.paths},c.simpleConstructor=f,c.accessorConstructor=_,c.defaultProps=u,s("extend-esri")&&(i.setObject("geometry.Polyline",c,a),a.geometry.defaultPolyline=u),c}));