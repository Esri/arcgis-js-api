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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/_base/array","../../tasks/query","../../request","../../SpatialReference","./LocationProviderRemoteBase"],function(e,r,t,i,a,n,s){return e("esri.tasks.locationproviders.QueryTaskLocationProvider",s,{queryTask:null,queryParameters:null,whereFields:null,unicode:!1,maxWhereLength:2e3,constructor:function(){this.queryParameters||(this.queryParameters={})},_getFieldMapping:function(){return this.whereFields},_init:function(){if(this.queryTask&&this.queryTask.url){var e=this.getInherited(arguments);a({url:this.queryTask.url,callbackParamName:"callback",content:{f:"json"}}).then(r.hitch(this,function(r){this.geometryType=r.geometryType,e.call(this)}))}},_batchWillOverflow:function(e,r){var i=t.map(e,function(e){return e.expression}).concat(r.expression),a=this.queryParameters.where?this.queryParameters.where.length+7:0;if(i.join(" OR ").length+a>this.maxWhereLength)return!0},_locateBatch:function(e,a){var s=t.map(e,function(e){return e.expression}).join(" OR "),u=t.map(this._fields,function(e){return e.outField}),o=this.queryParameters.outFields?u.concat(t.filter(this.queryParameters.outFields,function(e){return-1===t.indexOf(u,e)})):u,h=r.hitch(this,function(r){if(r&&r.features)return r.exceededTransferLimit&&console.warn("exceededTransferLimit"),this._merge(e,r.features,u)}),l=new i;return l.where=this.queryParameters.where?this.queryParameters.where+" AND ("+s+")":s,l.outFields=o,l.outSpatialReference=a.outSpatialReference||new n(4326),l.geometry=this.queryParameters.geometry,l.returnGeometry=!1!==this.queryParameters.returnGeometry,l.maxAllowableOffset=this.queryParameters.maxAllowableOffset,this.queryTask.execute(l).then(h)},_merge:function(e,r,i){for(var a=[],n=0;n<e.length;n++)for(var s=e[n],u=0;u<r.length;u++){var o=r[u],h=this._createKey(o,i);if(s.key===h){for(var l=0;l<s.features.length;l++){var c=s.features[l],f=o.geometry;f&&(c.geometry=f),t.forEach(this.queryParameters.outFields,function(e){c.attributes[e]=o.attributes[e]}),a.push(c)}break}}return a},_createQueryExpression:function(e){for(var r=[],t=0;t<this._fields.length;t++){var i=this._fields[t],a=e.attributes[i.inField];if(void 0===a||null===a)return;r.push(i.outField+(this.unicode?"=N'":"='")+this._escape(a)+"'")}return r.length>1?"("+r.join(" AND ")+")":r[0]},_escape:function(e){return"string"==typeof e?e.replace(/'/g,"''"):e}})});