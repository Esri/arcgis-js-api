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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","../request","../geometry/Extent","../geometry/support/normalizeUtils","./Task","./support/FeatureSet"],function(e,r,t,s,n,o,a){var i="Layer does not support extent calculation.",u=o.createSubclass({declaredClass:"esri.tasks.QueryTask",__msigns:[{n:"execute",c:2,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForIds",c:1,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForCount",c:1,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForExtent",c:1,a:[{i:0,p:["geometry"]}],e:2}],properties:{gdbVersion:{value:null,type:String},source:{value:null}},execute:function(e,s,n){var o=n.assembly,a=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(o&&o[0])));if(this.source){var i={source:this.source.toJSON()};a.layer=JSON.stringify(i)}return this.gdbVersion&&(a.gdbVersion=this.gdbVersion),t(this.parsedUrl.path+"/query",r.mixin({query:a,callbackParamName:"callback",callbackSuffix:s},this.requestOptions)).then(this._handleExecuteResponse)},executeRelationshipQuery:function(e){var s=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON()));return this.gdbVersion&&(s.gdbVersion=this.gdbVersion),t(this.parsedUrl.path+"/queryRelatedRecords",r.mixin({query:s,callbackParamName:"callback"},this.requestOptions)).then(this._handleExecuteRelationshipQueryResponse)},executeForIds:function(e,s){var n=s.assembly,o=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnIdsOnly:!0},e.toJSON(n&&n[0])));if(this.source){var a={source:this.source.toJSON()};o.layer=JSON.stringify(a)}return this.gdbVersion&&(o.gdbVersion=this.gdbVersion),t(this.parsedUrl.path+"/query",r.mixin({query:o,callbackParamName:"callback"},this.requestOptions)).then(this._handleExecuteForIdsResponse)},executeForCount:function(e,s){var n=s.assembly,o=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},e.toJSON(n&&n[0])));if(this.source){var a={source:this.source.toJSON()};o.layer=JSON.stringify(a)}return this.gdbVersion&&(o.gdbVersion=this.gdbVersion),t(this.parsedUrl.path+"/query",r.mixin({query:o,callbackParamName:"callback"},this.requestOptions)).then(this._handleExecuteForCountResponse)},executeForExtent:function(e,s){var n=s.assembly,o=this._encode(r.mixin({},this.parsedUrl.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},e.toJSON(n&&n[0])));if(this.source){var a={source:this.source.toJSON()};o.layer=JSON.stringify(a)}return this.gdbVersion&&(o.gdbVersion=this.gdbVersion),t(this.parsedUrl.path+"/query",r.mixin({query:o,callbackParamName:"callback"},this.requestOptions)).then(this._handleExecuteForExtentResponse)},_handleExecuteResponse:function(e){return a.fromJSON(e.data)},_handleExecuteRelationshipQueryResponse:function(r){var t=r.data,s=t.geometryType,n=t.spatialReference,o={};return e.forEach(t.relatedRecordGroups,function(e){var r={};r.geometryType=s,r.spatialReference=n,r.features=e.relatedRecords;var t=a.fromJSON(r);if(null!=e.objectId)o[e.objectId]=t;else for(var i in e)e.hasOwnProperty(i)&&"relatedRecords"!==i&&(o[e[i]]=t)}),o},_handleExecuteForIdsResponse:function(e){return e.data.objectIds},_handleExecuteForCountResponse:function(e){var r,t=e.data,s=t.features,n=t.objectIds;if(n)r=n.length;else{if(s)throw new Error("Unable to perform query. Please check your parameters.");r=t.count}return r},_handleExecuteForExtentResponse:function(e){var r=e.data;if(r.hasOwnProperty("extent"))r.extent=s.fromJSON(r.extent);else{if(r.features)throw new Error(i);if(r.hasOwnProperty("count"))throw new Error(i)}return r}});return n._createWrappers(u),u});