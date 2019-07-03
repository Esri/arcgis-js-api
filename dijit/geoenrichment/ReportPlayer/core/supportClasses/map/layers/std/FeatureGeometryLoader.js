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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/EnrichAreasTask","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GEUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/InvokeUtil"],function(e,n,t,i,r){var o=50;return{_countryKey:null,_cache:null,_countryId:null,_hierarchy:null,_pendingInfos:{},canLoad:function(){return t.canMakeRequests()},getFeatureGeometry:function(e){var n=e.countryID+";"+e.hierarchy;this._countryKey!==n&&(this._cache={},this._countryKey=n,this._pendingInfos={},this._countryId=e.countryID,this._hierarchy=e.hierarchy);var t=this._getKey(e.levelId,e.featureId,e.outSR);return this._cache[t]||(this._cache[t]=this._addToPendingGeographies(e.levelId,e.featureId,e.outSR)),this._cache[t]},_addToPendingGeographies:function(n,t,i){var o=this._getKey(n,t,i),s=new e,a={levelId:n,featureId:t,outSR:i,dfd:s};return this._pendingInfos[o]&&s.promise.then(this._pendingInfos[o].dfd.resolve,this._pendingInfos[o].dfd.reject),this._pendingInfos[o]=a,r.invoke(this,"_doEnrichPendingGeographies",100),s.promise},_doEnrichPendingGeographies:function(){var e=this,t={};for(var r in this._pendingInfos){var s=this._pendingInfos[r],a=s.outSR&&s.outSR.wkid||"default";(t[a]=t[a]||[]).push({levelId:s.levelId,id:s.featureId})}var d=this._pendingInfos;this._pendingInfos={};for(var a in t)!function(r){var s="default"===r?null:{wkid:Number(r)};i.splitArrayToBunches(t[r],o).forEach(function(t){(new n).createFeaturesForGeographies(t,{countryID:e._countryId,hierarchy:e._hierarchy,generalizationLevel:5,outSR:s}).then(function(n){n.forEach(function(n){var t=e._getKey(n.attributes.StdGeographyLevel,n.attributes.StdGeographyID,s);d[t].dfd.resolve(n.geometry)})})})}(a)},_getKey:function(e,n,t){return e+";"+n+";"+(t&&t.wkid)}}});