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

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/assign","../../polyfill/tsSupport/extends","../../../request","../../../sniff","../../../SpatialReference","../../../urlUtils","../support/cache","../../../geometry/Extent","../../../layers/FeatureType","../../../layers/Field","../../../tasks/QueryTask"],(function(e,t,i,s,n,r,a,o,l,u,p,h,d,c,f){"use strict";var y=!!o("esri-pbf"),m=!!o("esri-featurelayer-pbf");return function(){function e(e,t,i){void 0===i&&(i=null),this.url=e,this.outFields=t,this.spatialReference=i,this._url=null,this.supportsFormatPBF=!1,this.supportsQuantizationEditMode=!1,this.metadata=null,this.supportsAttachments=!1,this.relationships=[],this._loadPromise=null,this.timeInfo=null,this.editFieldsInfo=null,this.dateFieldsTimeReference=null,this.preferredTimeReference=null,this.datesInUnknownTimezone=!1,this._queryTask=null,this.gdbVersion="",this.currentVersion=0,this.useStandardizedQueries=!1,this.fields=[],this._url=u.urlToObject(e)}return e.prototype._canFetchPBFForQuery=function(e){return y&&m&&this.supportsFormatPBF&&!e.outStatistics&&this.supportsQuantizationEditMode},e.prototype._loadMetaData=function(e){return i(this,void 0,void 0,(function(){var t,i,n,r;return s(this,(function(s){switch(s.label){case 0:if(null!==p.applicationCache&&null!==(t=p.applicationCache.getLayerInfo(e)))return[2,t];i=a({url:e,content:{f:"json"},callbackParamName:"callback"}),null!==p.applicationCache&&p.applicationCache.setLayerInfo(e,i),n=null,s.label=1;case 1:return s.trys.push([1,3,,4]),[4,i];case 2:return n=s.sent(),[3,4];case 3:throw r=s.sent(),null!==p.applicationCache&&p.applicationCache.clearLayerInfo(e),r;case 4:return[2,n]}}))}))},e.prototype.load=function(){return null===this._loadPromise&&(this._loadPromise=this.loadImpl()),this._loadPromise},e.prototype.loadImpl=function(){return i(this,void 0,void 0,(function(){var e,t,i,n,r,a,o,u,p,y,m,I,F,b,T,g,v,w,j,k;return s(this,(function(s){switch(s.label){case 0:return e=this._url.path,[4,this._loadMetaData(e)];case 1:if(t=s.sent(),this.metadata=t,this.relationships=t.relationships,this._queryTask=new f(e),this.objectIdField=t.objectIdField,this.globalIdField=t.globalIdField,this.timeInfo=t.timeInfo||null,this.editFieldsInfo=t.editFieldsInfo||null,this.dateFieldsTimeReference=t.dateFieldsTimeReference||null,this.preferredTimeReference=t.preferredTimeReference||null,this.datesInUnknownTimezone=!0===t.datesInUnknownTimezone,this.supportsAttachments=!0===t.hasAttachments,!this.objectIdField)for(i=t.fields,n=0;n<i.length;n++)if("esriFieldTypeOID"===(r=i[n]).type){this.objectIdField=r.name;break}if(this.geometryType=t.geometryType,this.typeIdField=t.typeIdField,this.fullExtent=new h(t.fullExtent),this.advancedQueryCapabilities=t.advancedQueryCapabilities||{supportsStatistics:t.supportsStatistics,supportsOrderBy:t.supportsAdvancedQueries,supportsDistinct:t.supportsAdvancedQueries},t.supportedQueryFormats)for(a=0,o=t.supportedQueryFormats.split(",");a<o.length;a++)if("pbf"===o[a].replace(/^\s+|\s+$/gm,"").toLowerCase()){this.supportsFormatPBF=!0;break}if(!0===t.supportsQuantizationEditMode&&(this.supportsQuantizationEditMode=!0),!0===t.useStandardizedQueries&&(this.useStandardizedQueries=!0),void 0!==t.currentVersion&&(this.currentVersion=t.currentVersion),t.types)for(this.types=[],u=0,p=t.types;u<p.length;u++)T=p[u],y=new d(T),this.types.push(y);if(t.spatialReference&&!this.spatialReference&&(this.spatialReference=new l(t.spatialReference)),1===this.outFields.length&&"*"===this.outFields[0])for(m=0,I=t.fields;m<I.length;m++)T=I[m],k=new c(T),this.fields.push(k);else for(F=0,b=t.fields;F<b.length;F++)if("esriFieldTypeOID"===(T=b[F]).type)k=new c(T),this.fields.push(k);else{for(g=!1,v=0,w=this.outFields;v<w.length;v++)if(j=w[v],T.name.toUpperCase()===j.toUpperCase()){g=!0;break}g&&(k=new c(T),this.fields.push(k))}return this.definitionExpression="",[2,this]}}))}))},e.prototype.queryIds=function(e){var t=this;return new Promise((function(i,s){t._queryTask.executeForIds(e,i,s)}))},e.prototype.queryAttachments=function(e){return i(this,void 0,void 0,(function(){var t,i,r,o,l,u,p,h,d;return s(this,(function(s){switch(s.label){case 0:return(t=n(n({},e),{f:"json"})).objectIds.length>0&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),[4,a({url:this._url.path+"/queryAttachments",content:t,callbackParamName:"callback"})];case 1:if(i=s.sent(),r={},i&&i.attachmentGroups)for(o=0,l=i.attachmentGroups;o<l.length;o++)for(u=l[o],void 0===r[u.parentObjectId]&&(r[u.parentObjectId]=[]),p=0,h=u.attachmentInfos;p<h.length;p++)d=h[p],r[u.parentObjectId].push({id:d.id,globalId:d.globalId,name:d.name,contentType:d.contentType,size:d.size,exifInfo:d.exifInfo?d.exifInfo:null});return[2,r]}}))}))},e}()}));