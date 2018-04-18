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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/promise/all","dojo/Deferred","../request","../tasks/query","../tasks/RelationshipQuery","../dijit/FeatureLayerQueryResult","dojo/i18n!../nls/jsapi"],function(e,t,r,n,a,s,o,i,u,c,h){var d=e(null,{layer:null,data:null,objectIds:null,idProperty:"id",totalCount:0,batchCount:25,where:null,orderByFields:null,getAttachments:!1,getRelatedRecords:!1,constructor:function(t){e.safeMixin(this,t),this.idProperty=this.layer.objectIdField,this.data=[]},get:function(e){return this.data[e]},getIdentity:function(e){return e[this.idProperty]},query:function(e,n){var o,u=new s,h=new i,d=n.start||0,l=n.count||this.batchCount,f=this.layer.relationships,y=n.objectIds||this.objectIds,p=[];return o=!!(this.layer.advancedQueryCapabilities&&this.layer.advancedQueryCapabilities.supportsOrderBy&&this.orderByFields&&this.orderByFields.length>0),y&&y.length?h.objectIds=y.length>=d+this.batchCount?y.slice(d,d+l):y.slice(d):(h.start=d,h.num=l,h.where=this.where),o&&(h.orderByFields=this.orderByFields),h.returnGeometry=!1,h.outFields=["*"],this.layer.queryFeatures(h).then(t.hitch(this,function(e){var n=e.objectIdFieldName,s={},i=[];if(n||r.some(e.fields,function(e,t){if("esriFieldTypeOID"===e.type)return n=e.name,!1}),!e.features||!e.features.length)return new c(u);this.objectIds&&!o&&(r.forEach(e.features,function(e,t){s[e.attributes[n]]=e}),e.features=r.map(h.objectIds,function(e){return s[e]})),r.forEach(e.features,function(t,r){e.features[r]=t.attributes,i.push(e.features[r][n]),this.data[e.features[r][n]]=t},this),e.total=this.totalCount,this.getAttachments&&this.getRelatedRecords?(p.push(this._queryAttachments(i)),r.forEach(f,function(e){p.push(this._queryRelatedRecords(i,e))},this),a(p).then(t.hitch(this,function(t){e.attachmentInfos=this._createAttachmentInfoLookup(t.shift()),e.relatedRecordInfos=this._createRelatedRecordInfoLookup(t),u.resolve(e)})).otherwise(function(){e.attachmentInfos=null,e.relatedRecordInfos={},u.resolve(e)})):this.getRelatedRecords?(r.forEach(f,function(e){p.push(this._queryRelatedRecords(i,e))},this),a(p).then(t.hitch(this,function(t){e.relatedRecordInfos=this._createRelatedRecordInfoLookup(t),u.resolve(e)})).otherwise(function(){e.relatedRecordInfos=null,u.resolve(e)})):this.getAttachments?this._queryAttachments(i).then(t.hitch(this,function(t){e.attachmentInfos=this._createAttachmentInfoLookup(t),u.resolve(e)})).otherwise(function(){e.attachmentInfos=null,u.resolve(e)}):u.resolve(e)})),new c(u)},_queryRelatedRecords:function(e,t){var r=this.layer;if(r.advancedQueryCapabilities&&r.advancedQueryCapabilities.supportsAdvancedQueryRelated)return this._queryRelatedRecordCount(e,t);var n=new u;return n.outFields=[this.idProperty],n.returnGeometry=!1,n.relationshipId=t.id,n.objectIds=e,r.queryRelatedFeatures(n)},_queryRelatedRecordCount:function(e,t){var r=this.layer._url.path+"/queryRelatedRecords";return o({url:r,content:{f:"json",objectIds:e.toString(),outFields:this.idProperty,returnGeometry:!1,relationshipId:t.id,returnCountOnly:!0},handleAs:"json",callbackParamName:"callback"})},_createRelatedRecordInfoLookup:function(e){var t={};return r.forEach(e,function(e,r){t[this.layer.relationships[r].id]=e},this),t},_queryAttachments:function(e){var t=this.layer._url.path+"/queryAttachments";return o({url:t,content:{f:"json",objectIds:e.toString()},handleAs:"json",callbackParamName:"callback"})},_createAttachmentInfoLookup:function(e){if(!e||!e.attachmentGroups)return!1;var t={},n=e.attachmentGroups;return r.forEach(n,function(e){t[e.parentObjectId]={attachments:e.attachmentInfos}}),t}});return n("extend-esri")&&t.setObject("dijit.FeatureLayerQueryStore",d,h),d});