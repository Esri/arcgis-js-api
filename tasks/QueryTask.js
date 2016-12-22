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

define(["dojo/_base/array","dojo/_base/lang","../request","../geometry/Extent","../geometry/support/normalizeUtils","./Task","./support/FeatureSet"],function(e,r,t,n,s,i,o){var a="Layer does not support extent calculation.",u=i.createSubclass({declaredClass:"esri.tasks.QueryTask",properties:{gdbVersion:{value:null,type:String},source:{value:null}},execute:function(e,n){var i=e.geometry?[e.geometry]:[];return s.normalizeCentralMeridian(i).then(function(s){var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON({geometry:s&&s[0]})));if(this.source){var o={source:this.source.toJSON()};i.layer=JSON.stringify(o)}this.gdbVersion&&(i.gdbVersion=this.gdbVersion);var a={query:i,callbackParamName:"callback"};return(this.requestOptions||n)&&(a=r.mixin({},this.requestOptions,n,a)),t(this.parsedUrl.path+"/query",a)}.bind(this)).then(this._handleExecuteResponse)},executeRelationshipQuery:function(e,n){var s=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()));this.gdbVersion&&(s.gdbVersion=this.gdbVersion);var i={query:s,callbackParamName:"callback"};return(this.requestOptions||n)&&(i=r.mixin({},this.requestOptions,n,i)),t(this.parsedUrl.path+"/queryRelatedRecords",i).then(this._handleExecuteRelationshipQueryResponse)},executeForIds:function(e,n){var i=e.geometry?[e.geometry]:[];return s.normalizeCentralMeridian(i).then(function(s){var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnIdsOnly:!0},e.toJSON({geometry:s&&s[0]})));if(this.source){var o={source:this.source.toJSON()};i.layer=JSON.stringify(o)}this.gdbVersion&&(i.gdbVersion=this.gdbVersion);var a={query:i,callbackParamName:"callback"};return(this.requestOptions||n)&&(a=r.mixin({},this.requestOptions,n,a)),t(this.parsedUrl.path+"/query",a)}.bind(this)).then(this._handleExecuteForIdsResponse)},executeForCount:function(e,n){var i=e.geometry?[e.geometry]:[];return s.normalizeCentralMeridian(i).then(function(s){var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},e.toJSON({geometry:s&&s[0]})));if(this.source){var o={source:this.source.toJSON()};i.layer=JSON.stringify(o)}this.gdbVersion&&(i.gdbVersion=this.gdbVersion);var a={query:i,callbackParamName:"callback"};return(this.requestOptions||n)&&(a=r.mixin({},this.requestOptions,n,a)),t(this.parsedUrl.path+"/query",a)}.bind(this)).then(this._handleExecuteForCountResponse)},executeForExtent:function(e,n){var i=e.geometry?[e.geometry]:[];return s.normalizeCentralMeridian(i).then(function(s){var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},e.toJSON({geometry:s&&s[0]})));if(this.source){var o={source:this.source.toJSON()};i.layer=JSON.stringify(o)}this.gdbVersion&&(i.gdbVersion=this.gdbVersion);var a={query:i,callbackParamName:"callback"};return(this.requestOptions||n)&&(a=r.mixin({},this.requestOptions,n,a)),t(this.parsedUrl.path+"/query",a)}.bind(this)).then(this._handleExecuteForExtentResponse)},_handleExecuteResponse:function(e){return o.fromJSON(e.data)},_handleExecuteRelationshipQueryResponse:function(r){var t=r.data,n=t.geometryType,s=t.spatialReference,i={};return e.forEach(t.relatedRecordGroups,function(e){var r={};r.geometryType=n,r.spatialReference=s,r.features=e.relatedRecords;var t=o.fromJSON(r);if(null!=e.objectId)i[e.objectId]=t;else for(var a in e)e.hasOwnProperty(a)&&"relatedRecords"!==a&&(i[e[a]]=t)}),i},_handleExecuteForIdsResponse:function(e){return e.data.objectIds},_handleExecuteForCountResponse:function(e){var r,t=e.data,n=t.features,s=t.objectIds;if(s)r=s.length;else{if(n)throw new Error("Unable to perform query. Please check your parameters.");r=t.count}return r},_handleExecuteForExtentResponse:function(e){var r=e.data;if(r.hasOwnProperty("extent"))r.extent=n.fromJSON(r.extent);else{if(r.features)throw new Error(a);if(r.hasOwnProperty("count"))throw new Error(a)}return r}});return u});