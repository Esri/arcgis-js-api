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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../graphic","../SpatialReference","../graphicsUtils","../geometry/jsonUtils","../symbols/jsonUtils"],function(e,t,r,n,s,i,o,a,l,f,u){var y=e(null,{declaredClass:"esri.tasks.FeatureSet",constructor:function(e){if(e){t.mixin(this,e);var n=this.features,s=e.spatialReference,i=f.getGeometryType(e.geometryType);s=this.spatialReference=new a(s),this.geometryType=e.geometryType,e.fields&&(this.fields=e.fields),r.forEach(n,function(e,t){var r=e.geometry&&e.geometry.spatialReference;n[t]=new o(i&&e.geometry?new i(e.geometry):null,e.symbol&&u.fromJson(e.symbol),e.attributes),n[t].geometry&&!r&&n[t].geometry.setSpatialReference(s)}),this._hydrate()}else this.features=[]},displayFieldName:null,geometryType:null,spatialReference:null,fieldAliases:null,toJson:function(e){var t={};return this.displayFieldName&&(t.displayFieldName=this.displayFieldName),this.fields&&(t.fields=this.fields),this.spatialReference?t.spatialReference=this.spatialReference.toJson():this.features[0]&&this.features[0].geometry&&(t.spatialReference=this.features[0].geometry.spatialReference.toJson()),this.features[0]&&(this.features[0].geometry&&(t.geometryType=f.getJsonType(this.features[0].geometry)),t.features=l._encodeGraphics(this.features,e)),t.exceededTransferLimit=this.exceededTransferLimit,t.transform=this.transform,i.fixJson(t)},_hydrate:function(){var e=this.transform,t=this.geometryType;if(!e||!t)return void(this.transform=null);var r,n,s=this.features,i=e.translate[0],o=e.translate[1],a=e.scale[0],l=e.scale[1],f=function(e){return e*a+i},u=function(e){return o-e*l},y=function(e,t,r){return"esriGeometryPoint"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"esriGeometryPolyline"===e||"esriGeometryPolygon"===e?function(e){var n,s,i,o,a,l,f,u,y=e.rings||e.paths;for(n=0,s=y.length;s>n;n++)for(a=y[n],i=0,o=a.length;o>i;i++)l=a[i],i>0?(f+=l[0],u+=l[1]):(f=l[0],u=l[1]),l[0]=t(f),l[1]=r(u)}:"esriGeometryEnvelope"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"esriGeometryMultipoint"===e?function(e){var n,s,i,o,a,l=e.points;for(n=0,s=l.length;s>n;n++)i=l[n],n>0?(o+=i[0],a+=i[1]):(o=i[0],a=i[1]),i[0]=t(o),i[1]=r(a)}:void 0}(t,f,u);for(r=0,n=s.length;n>r;r++)s[r].geometry&&y(s[r].geometry);this.transform=null},quantize:function(e){if(!this.geometryType)return this.transform=null,this;var t,r,n=e.translate[0],s=e.translate[1],i=e.scale[0],o=e.scale[1],a=function(e){return Math.round((e-n)/i)},l=function(e){return Math.round((s-e)/o)},f=this.features,u=function(e,t,r){var n,s,i,o,a,l,f,u=[];for(n=0,s=e.length;s>n;n++)i=e[n],n>0?(l=t(i[0]),f=r(i[1]),(l!==o||f!==a)&&(u.push([l-o,f-a]),o=l,a=f)):(o=t(i[0]),a=r(i[1]),u.push([o,a]));return u.length>0?u:null},y=function(e,t,r){return"esriGeometryPoint"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"esriGeometryPolyline"===e||"esriGeometryPolygon"===e?function(e){var n,s,i,o,a,l;for(i=e.rings||e.paths,l=[],n=0,s=i.length;s>n;n++)o=i[n],a=u(o,t,r),a&&l.push(a);return l.length>0?(e.rings?e.rings=l:e.paths=l,e):null}:"esriGeometryMultipoint"===e?function(e){var n;return n=u(e.points,t,r),n.length>0?(e.points=n,e):null}:"esriGeometryEnvelope"===e?function(e){return e}:void 0}(this.geometryType,a,l);for(t=0,r=f.length;r>t;t++)f[t].geometry&&(y(f[t].geometry)||f[t].setGeometry(null));return this.transform=e,this}});return n("extend-esri")&&t.setObject("tasks.FeatureSet",y,s),y});