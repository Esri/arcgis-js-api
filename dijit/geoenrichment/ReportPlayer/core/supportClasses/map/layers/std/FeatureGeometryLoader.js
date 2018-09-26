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

define(["dojo/Deferred","esri/tasks/FeatureSet","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/EnrichAreasTask","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GEUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/InvokeUtil"],function(e,t,n,r,i,o){var s=50;return{_countryKey:null,_cache:null,_countryId:null,_hierarchy:null,_pendingInfos:{},canLoad:function(){return r.canMakeRequests()},getFeatureGeometry:function(e){var t=e.countryID+";"+e.hierarchy;this._countryKey!==t&&(this._cache={},this._countryKey=t,this._pendingInfos={},this._countryId=e.countryID,this._hierarchy=e.hierarchy);var n=this._getKey(e.levelId,e.featureId,e.outSR);return this._cache[n]||(this._cache[n]=this._addToPendingGeographies(e.levelId,e.featureId,e.outSR)),this._cache[n]},_addToPendingGeographies:function(t,n,r){var i=this._getKey(t,n,r),s=new e,a={levelId:t,featureId:n,outSR:r,dfd:s};return this._pendingInfos[i]&&s.promise.then(this._pendingInfos[i].dfd.resolve,this._pendingInfos[i].dfd.reject),this._pendingInfos[i]=a,o.invoke(this,"_doEnrichPendingGeographies",100),s.promise},_doEnrichPendingGeographies:function(){var e=this,r={};for(var o in this._pendingInfos){var a=this._pendingInfos[o],d=a.outSR&&a.outSR.wkid||"default";(r[d]=r[d]||[]).push({levelId:a.levelId,id:a.featureId})}var h=this._pendingInfos;this._pendingInfos={};for(var d in r)!function(o){var a="default"===o?null:{wkid:Number(o)};i.splitArrayToBunches(r[o],s).forEach(function(r){(new n).createFeaturesForGeographies(r,{countryID:e._countryId,hierarchy:e._hierarchy,generalizationLevel:5,outSR:a}).then(function(n){new t(n[0]).features.forEach(function(t){var n=e._getKey(t.attributes.StdGeographyLevel,t.attributes.StdGeographyID,a);h[n].dfd.resolve(t.geometry)})})})}(d)},_getKey:function(e,t,n){return e+";"+t+";"+(n&&n.wkid)}}});