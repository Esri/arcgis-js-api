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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/lang"],function(e,t,r){function n(e,t,r){e.x=t(e.x),e.y=r(e.y)}function i(e,t,r){a(e.paths,t,r)}function o(e,t,r){a(e.rings,t,r)}function a(e,t,r){for(var n,i,o=0;o<e.length;o++)for(var a=e[o],s=0;s<a.length;s++){var u=a[s];s>0?(n+=u[0],i+=u[1]):(n=u[0],i=u[1]),u[0]=t(n),u[1]=r(i)}}function s(e,t,r){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}function u(e,t,r){for(var n,i,o=e.points,a=0,s=o.length;s>a;a++){var u=o[a];a>0?(n+=u[0],i+=u[1]):(n=u[0],i=u[1]),u[0]=t(n),u[1]=r(i)}}function f(e,t,r){function n(e){return e*s+o}function i(e){return a-e*u}var o=t.translate[0],a=t.translate[1],s=t.scale[0],u=t.scale[1];y[e](r,n,i)}Object.defineProperty(t,"__esModule",{value:!0});var y={esriGeometryEnvelope:s,esriGeometryMultipoint:u,esriGeometryPoint:n,esriGeometryPolygon:o,esriGeometryPolyline:i},l=function(){function e(e,t){this.objectIdField=e,this.geometryType=t,this._itemsById=new Map,this._featureRefCountByFeatureId=new Map,this._featureIdsByTileKey=new Map}return e.prototype.set=function(e,t){var r=t.features,n=t.transform,i=this,o=i.objectIdField,a=i._itemsById,s=i._featureRefCountByFeatureId,u=i._featureIdsByTileKey;if(!u.has(e)){for(var f=[],y=0,l=r;y<l.length;y++){var m=l[y],d=m.attributes[o];f.push(d),a.set(d,{feature:m,transform:n}),s.set(d,(s.get(d)||0)+1)}u.set(e,f)}},e.prototype["delete"]=function(e){var t=this,r=t._itemsById,n=t._featureRefCountByFeatureId,i=t._featureIdsByTileKey;if(i.has(e)){for(var o=i.get(e),a=0,s=o;a<s.length;a++){var u=s[a],f=n.get(u)-1;0===f?(n["delete"](u),r["delete"](u)):n.set(u,f)}i["delete"](e)}},e.prototype.getFeature=function(e){var t=this._itemsById.has(e)?this._itemsById.get(e):null;if(!t)return null;var n=r.clone(t.feature);return f(this.geometryType,t.transform,n.geometry),n},e}();t["default"]=l});