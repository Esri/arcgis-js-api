// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/EnrichAreasTask","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GEUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/InvokeUtil"],(function(e,t,r,n,i,o){return{_countryKey:null,_countryId:null,_hierarchy:null,_pendingInfos:{},canLoad:function(){return r.canMakeRequests()},getFeatureGeometry:function(e){var t=e.countryID+";"+e.hierarchy;this._countryKey!==t&&(i.set("FeatureGeometryLoader",{}),this._countryKey=t,this._pendingInfos={},this._countryId=e.countryID,this._hierarchy=e.hierarchy);var r=i.get("FeatureGeometryLoader"),n=this._getKey(e.levelId,e.featureId,e.outSR);return r[n]||(r[n]=this._addToPendingGeographies(e.levelId,e.featureId,e.outSR)),r[n]},_addToPendingGeographies:function(t,r,n){var i=this._getKey(t,r,n),s=new e,d={levelId:t,featureId:r,outSR:n,dfd:s};return this._pendingInfos[i]&&s.promise.then(this._pendingInfos[i].dfd.resolve,this._pendingInfos[i].dfd.reject),this._pendingInfos[i]=d,o.invoke(this,"_doEnrichPendingGeographies",100),s.promise},_doEnrichPendingGeographies:function(){var e=this,r={};for(var i in this._pendingInfos){var o=this._pendingInfos[i],s=o.outSR&&o.outSR.wkid||"default";(r[s]=r[s]||[]).push({levelId:o.levelId,id:o.featureId})}var d=this._pendingInfos;function a(i){var o="default"===i?null:{wkid:Number(i)};n.splitArrayToBunches(r[i],50).forEach((function(r){(new t).createFeaturesForGeographies(r,{countryID:e._countryId,hierarchy:e._hierarchy,generalizationLevel:5,outSR:o}).then((function(t){t.forEach((function(t){var r=e._getKey(t.attributes.StdGeographyLevel,t.attributes.StdGeographyID,o);d[r].dfd.resolve(t.geometry)}))}))}))}for(var s in this._pendingInfos={},r)a(s)},_getKey:function(e,t,r){return e+";"+t+";"+(r&&r.wkid)}}}));