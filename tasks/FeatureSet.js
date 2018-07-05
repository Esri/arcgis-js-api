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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../lang","../graphic","../SpatialReference","../graphicsUtils","../geometry/Polygon","../geometry/jsonUtils","../symbols/jsonUtils"],function(e,t,r,s,n,a,i,o,u,l,c,f){var y=e(null,{declaredClass:"esri.tasks.FeatureSet",constructor:function(e,s){if(e){t.mixin(this,e),this.features=this.features||[];var n=this.features,a=e.spatialReference;a=this.spatialReference=c.createInstance(o.simpleConstructor,a);var u=c.getGeometryType(e.geometryType);this.geometryType=e.geometryType,e.fields&&(this.fields=e.fields);var l=c.supportsLazyUnquantization(this.geometryType),y=c.unquantizeFunction(this.geometryType,this.transform),m=!!(s&&l&&y),p=u&&(m?u.accessorConstructor:u.simpleConstructor);r.forEach(n,function(e,t){var r=c.createInstance(i.simpleConstructor),s=e.geometry;if(u&&s){var l=r.geometry=c.createInstance(p,m?null:s);l.setSpatialReference(s.spatialReference?c.createInstance(o.simpleConstructor,s.spatialReference):a),m&&l.setupLazyUnquantization(y,s)}r.symbol=e.symbol?f.fromJson(e.symbol):null,r.attributes=e.attributes,n[t]=r}),m||this._hydrate()}else this.features=[]},displayFieldName:null,geometryType:null,spatialReference:null,fieldAliases:null,toJson:function(e){var t={};return this.displayFieldName&&(t.displayFieldName=this.displayFieldName),this.fields&&(t.fields=this.fields),this.spatialReference?t.spatialReference=this.spatialReference.toJson():this.features[0]&&this.features[0].geometry&&(t.spatialReference=this.features[0].geometry.spatialReference.toJson()),this.features[0]&&(this.features[0].geometry&&(t.geometryType=c.getJsonType(this.features[0].geometry)),t.features=u._encodeGraphics(this.features,e)),t.geometryType=t.geometryType||this.geometryType,t.exceededTransferLimit=this.exceededTransferLimit,t.transform=this.transform,a.fixJson(t)},_hydrate:function(){c.unquantize(this.features,this.geometryType,this.transform),this.transform=null},quantize:function(e){if(!this.geometryType)return this.transform=null,this;var t,r,s=e.translate[0],n=e.translate[1],a=e.scale[0],i=e.scale[1],o=function(e){return Math.round((e-s)/a)},u=function(e){return Math.round((n-e)/i)},l=this.features,c=function(e,t,r){var s,n,a,i,o,u,l,c=[];for(s=0,n=e.length;s<n;s++)a=e[s],s>0?(u=t(a[0]),l=r(a[1]),u===i&&l===o||(c.push([u-i,l-o]),i=u,o=l)):(i=t(a[0]),o=r(a[1]),c.push([i,o]));return c.length>0?c:null},f=function(e,t,r){return"esriGeometryPoint"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"esriGeometryPolyline"===e||"esriGeometryPolygon"===e?function(e){var s,n,a,i,o,u;for(a=e.rings||e.paths,u=[],s=0,n=a.length;s<n;s++)i=a[s],(o=c(i,t,r))&&u.push(o);return u.length>0?(e.rings?e.rings=u:e.paths=u,e):null}:"esriGeometryMultipoint"===e?function(e){var s;return s=c(e.points,t,r),s.length>0?(e.points=s,e):null}:"esriGeometryEnvelope"===e?function(e){return e}:void 0}(this.geometryType,o,u);for(t=0,r=l.length;t<r;t++)l[t].geometry&&(f(l[t].geometry)||l[t].setGeometry(null));return this.transform=e,this}});return y.createGraphics=function(e){var t=e.geometryType,s=c.createInstance(o.simpleConstructor,e.spatialReference),n=c.getGeometryType(t).accessorConstructor,a=c.unquantizeFunction(t,e.transform);return r.map(e.features,function(e,t){var r=c.createInstance(i.simpleConstructor),o=e.geometry;if(o){var u=r.geometry=c.createInstance(n);u.setSpatialReference(s),u.setupLazyUnquantization(a,o)}return r.attributes=e.attributes,r})},y.createPolygon=function(e,t,r){var s;if(e){s=c.createInstance(l.accessorConstructor),s.setSpatialReference(t);var n=c.unquantizeFunction("esriGeometryPolygon",r);s.setupLazyUnquantization(n,e)}return s},s("extend-esri")&&t.setObject("tasks.FeatureSet",y,n),y});