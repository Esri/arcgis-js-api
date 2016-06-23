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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/promise/all","dojo/Deferred","../request","../tasks/query","../tasks/RelationshipQuery","../dijit/FeatureLayerQueryResult","dojo/i18n!../nls/jsapi"],function(t,e,r,o,n,s,a,i,h,c,u){var l=t(null,{layer:null,data:null,objectIds:null,idProperty:"id",totalCount:0,batchCount:25,where:null,orderByFields:null,getAttachments:!1,getRelatedRecords:!1,constructor:function(e){t.safeMixin(this,e),this.idProperty=this.layer.objectIdField,this.data=[]},get:function(t){return this.data[t]},getIdentity:function(t){return t[this.idProperty]},query:function(t,o){var a=new s,h=new i,u=o.start||0,l=o.count||this.batchCount,d=this.layer.relationships,f=o.objectIds||this.objectIds,y=[];return f&&f.length?h.objectIds=f.length>=u+this.batchCount?f.slice(u,u+l):f.slice(u):(h.start=u,h.num=l,h.where=this.where,h.orderByFields=this.orderByFields),h.returnGeometry=!1,h.outFields=["*"],this.layer.queryFeatures(h).then(e.hitch(this,function(t){var o=t.objectIdFieldName,s={},i=[];o||r.some(t.fields,function(t){return"esriFieldTypeOID"===t.type?(o=t.name,!1):void 0}),this.objectIds&&(r.forEach(t.features,function(t){s[t.attributes[o]]=t}),t.features=r.map(h.objectIds,function(t){return s[t]})),r.forEach(t.features,function(e,r){t.features[r]=e.attributes,i.push(t.features[r][o]),this.data[t.features[r][o]]=e},this),t.total=this.totalCount,this.getAttachments&&this.getRelatedRecords?(y.push(this._queryAttachments(i)),r.forEach(d,function(t){y.push(this._queryRelatedRecords(i,t))},this),n(y).then(e.hitch(this,function(e){t.attachmentInfos=this._createAttachmentInfoLookup(e.shift()),t.relatedRecordInfos=this._createRelatedRecordInfoLookup(e),a.resolve(t)})).otherwise(function(){t.attachmentInfos=null,t.relatedRecordInfos={},a.resolve(t)})):this.getRelatedRecords?(r.forEach(d,function(t){y.push(this._queryRelatedRecords(i,t))},this),n(y).then(e.hitch(this,function(e){t.relatedRecordInfos=this._createRelatedRecordInfoLookup(e),a.resolve(t)})).otherwise(function(){t.relatedRecordInfos=null,a.resolve(t)})):this.getAttachments?this._queryAttachments(i).then(e.hitch(this,function(e){t.attachmentInfos=this._createAttachmentInfoLookup(e),a.resolve(t)})).otherwise(function(){t.attachmentInfos=null,a.resolve(t)}):a.resolve(t)})),new c(a)},_queryRelatedRecords:function(t,e){var r=new h;return r.outFields=[this.idProperty],r.returnGeometry=!1,r.relationshipId=e.id,r.objectIds=t,this.layer.queryRelatedFeatures(r)},_createRelatedRecordInfoLookup:function(t){var e={};return r.forEach(t,function(t,r){e[this.layer.relationships[r].id]=t},this),e},_queryAttachments:function(t){var e=this.layer._url.path+"/queryAttachments";return a({url:e,content:{f:"json",objectIds:t.toString()},handleAs:"json",callbackParamName:"callback"})},_createAttachmentInfoLookup:function(t){var e={},o=t.attachmentGroups;return r.forEach(o,function(t){e[t.parentObjectId]={attachments:t.attachmentInfos}}),e}});return o("extend-esri")&&e.setObject("dijit.FeatureLayerQueryStore",l,u),l});