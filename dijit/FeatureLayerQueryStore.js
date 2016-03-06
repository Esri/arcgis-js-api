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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../tasks/query","../dijit/FeatureLayerQueryResult","dojo/i18n!../nls/jsapi"],function(e,t,r,s,i,a,o){var u=e(null,{queryUrl:"",idProperty:"id",data:[],constructor:function(t){e.safeMixin(this,t),this.layer=t.layer,this.objectIds=t.objectIds,this.where=t.where,this.orderByFields=t.orderByFields,this.totalCount=t.totalCount,this.batchCount=t.batchCount||25,this.idProperty=this.layer.objectIdField},get:function(e){return this.data[e]},getIdentity:function(e){return e[this.idProperty]},query:function(e,s){var o=new i,u=s.start||0,n=s.count||this.batchCount;this.objectIds?o.objectIds=this.objectIds.length>=u+this.batchCount?this.objectIds.slice(u,u+n):this.objectIds.slice(u):(o.start=u,o.num=n,o.where=this.where,o.orderByFields=this.orderByFields),o.returnGeometry=!1,o.outFields=["*"];var d=this.totalCount,h=this.layer.queryFeatures(o);return h.total=h.then(t.hitch(this,function(e){var t=e.objectIdFieldName;if(this.objectIds){if(!t)for(var s=0;s<e.fields.length;s++)if("esriFieldTypeOID"===e.fields[s].type){t=e.fields[s].name;break}for(var i={},s=0;s<e.features.length;s++)i[e.features[s].attributes[t]]=e.features[s];e.features=r.map(o.objectIds,function(e){return i[e]})}for(var s=0;s<e.features.length;s++)e.features[s]=e.features[s].attributes,this.data[e.features[s][t]]=e.features[s];return e=e.features,d}),function(){return console.log("FeatureLayerQueryStore queryFeatures failed."),0}),new a(h)}});return s("extend-esri")&&t.setObject("dijit.FeatureLayerQueryStore",u,o),u});