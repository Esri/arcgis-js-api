// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/promise/all","dojo/Deferred","dojo/debounce","../request","../tasks/query","../tasks/QueryTask","../dijit/FeatureLayerQueryResult","../kernel"],(function(e,t,r,i,s,n,o,a,u,l,h,d){var c=e(null,{layer:null,data:null,objectIds:null,idProperty:"id",totalCount:0,batchCount:1e3,where:null,orderByFields:null,constructor:function(t){e.safeMixin(this,t),this.data=[],this.idProperty=this.layer.objectIdField,this._task=new l(this.layer.url),this.batchCount=this.layer.maxRecordCount||this.batchCount},get:function(e){return this.data[e]},getIdentity:function(e){return e[this.idProperty]},query:function(e,r){var i=new n,s=new u,o=r.start||0,a=this.batchCount,l=r.objectIds||this.objectIds,d=this.outFields||["*"],c=this.layer.advancedQueryCapabilities;return s.start=o,s.num=a,s.where=this.where,c&&c.supportsOrderBy&&this.orderByFields&&this.orderByFields.length&&(s.orderByFields=this.orderByFields),s.outSpatialReference=this.spatialReference,s.returnGeometry=!0,s.outFields=d,s.geometry=this.geometry||null,this._task.execute(s).then(t.hitch(this,(function(e){i.resolve(this._createResultInfo(e))})),t.hitch(this,(function(e){l&&l.length&&(s.objectIds=l.length>=o+this.batchCount?l.slice(o,o+a):l.slice(o)),s.geometry=null,s.start=null,s.num=null,s.where=null,this._task.execute(s).then(t.hitch(this,(function(e){i.resolve(this._createResultInfo(e))})),t.hitch(this,(function(e){console.error("failed with object ids as well")})))}))).otherwise((function(e){i.reject({})})),new h(i)},_createResultInfo:function(e){var t={fields:[],features:[],count:0,total:this.totalCount,exceededTransferLimit:!1};if(!e.features||!e.features.length)return t;var i=e.objectIdFieldName;i||(r.some(e.fields,(function(e,t){if("esriFieldTypeOID"===e.type)return i=e.name,!0})),i||(i=this.idProperty));var s=[],n=r.map(e.features,(function(e){var t=e.attributes,r=t[i];return s.push(r),this.data[r]=e,t.geometry=e.geometry,t}),this);return t.exceededTransferLimit=!!e.exceededTransferLimit,t.count=e.features.length,t.features=n,t.fields=e.fields,t}});return i("extend-esri")&&t.setObject("dijit.ImageryLayerQueryStore",c,d),c}));