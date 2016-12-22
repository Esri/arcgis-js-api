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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/kebabDictionary","../../core/JSONSupporter","../../core/lang","../../Graphic","../../layers/support/Field","../../geometry/SpatialReference","../../geometry/support/graphicsUtils","../../geometry/support/jsonUtils","dojo/_base/lang"],function(e,t,r,n,i,s,o,a,l){var u=e({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),f=t.createSubclass({declaredClass:"esri.tasks.support.FeatureSet",classMetadata:{reader:{exclude:["fieldAliases","transform"]}},getDefaults:function(){return l.mixin(this.inherited(arguments),{features:[]})},displayFieldName:null,exceededTransferLimit:null,features:null,_featuresReader:function(e,t){var r,i=s.fromJSON(t.spatialReference);return r=e.map(function(e){var t=n.fromJSON(e),r=e.geometry&&e.geometry.spatialReference;return t.geometry&&!r&&(t.geometry.spatialReference=i),t}),t.transform&&this._hydrate(t.transform,t.geometryType,r),r},fields:null,_fieldsReader:function(e){return e.map(function(e){return i.fromJSON(e)})},geometryType:null,_geometryTypeReader:u.fromJSON,spatialReference:null,_spatialReferenceReader:function(e){return s.fromJSON(e)},toJSON:function(e){var t={hasZ:this.hasZ,hasM:this.hasM};return this.displayFieldName&&(t.displayFieldName=this.displayFieldName),this.fields&&(t.fields=this.fields.map(function(e){return e.toJSON()})),this.spatialReference?t.spatialReference=this.spatialReference.toJSON():this.features[0]&&this.features[0].geometry&&(t.spatialReference=this.features[0].geometry.spatialReference.toJSON()),this.features[0]&&(this.features[0].geometry&&(t.geometryType=a.getJsonType(this.features[0].geometry)),t.features=o._encodeGraphics(this.features,e)),t.exceededTransferLimit=this.exceededTransferLimit,t.transform=this.transform,r.fixJson(t)},quantize:function(e){var t,r,n=e.translate[0],i=e.translate[1],s=e.scale[0],o=e.scale[1],a=function(e){return Math.round((e-n)/s)},l=function(e){return Math.round((i-e)/o)},u=this.features,f=function(e,t,r){var n,i,s,o,a,l,u,f=[];for(n=0,i=e.length;i>n;n++)s=e[n],n>0?(l=t(s[0]),u=r(s[1]),(l!==o||u!==a)&&(f.push([l-o,u-a]),o=l,a=u)):(o=t(s[0]),a=r(s[1]),f.push([o,a]));return f.length>0?f:null},m=function(e,t,r){return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){var n,i,s,o,a,l;for(s=e.rings||e.paths,l=[],n=0,i=s.length;i>n;n++)o=s[n],a=f(o,t,r),a&&l.push(a);return l.length>0?(e.rings?e.rings=l:e.paths=l,e):null}:"multipoint"===e?function(e){var n;return n=f(e.points,t,r),n.length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:void 0}(this.geometryType,a,l);for(t=0,r=u.length;r>t;t++)m(u[t].geometry)||(u.splice(t,1),t--,r--);return this.transform=e,this},_hydrate:function(e,t,r){if(e){var n,i,s=e.translate[0],o=e.translate[1],a=e.scale[0],l=e.scale[1],u=function(e){return e*a+s},f=function(e){return o-e*l},m=function(e,t,r){return"esriGeometryPoint"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"esriGeometryPolyline"===e||"esriGeometryPolygon"===e?function(e){var n,i,s,o,a,l,u,f,m=e.rings||e.paths;for(n=0,i=m.length;i>n;n++)for(a=m[n],s=0,o=a.length;o>s;s++)l=a[s],s>0?(u+=l[0],f+=l[1]):(u=l[0],f=l[1]),l[0]=t(u),l[1]=r(f)}:"esriGeometryEnvelope"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"esriGeometryMultipoint"===e?function(e){var n,i,s,o,a,l=e.points;for(n=0,i=l.length;i>n;n++)s=l[n],n>0?(o+=s[0],a+=s[1]):(o=s[0],a=s[1]),s[0]=t(o),s[1]=r(a)}:void 0}(t,u,f);for(n=0,i=r.length;i>n;n++)r[n].geometry&&m(r[n].geometry)}}});return f});