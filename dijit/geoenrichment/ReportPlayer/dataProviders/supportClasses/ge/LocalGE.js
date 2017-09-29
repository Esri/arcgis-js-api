// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Evented","esri/graphic","esri/tasks/FeatureSet","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes"],function(a,e,i,t,s,l){var r=a(i,{metadata:{name:"StdGeographyName",address:"address"},_type:null,_variables:null,_variableObjects:null,_featureData:null,_fieldNameToVariableHash:null,_variableToFieldAliasHash:null,constructor:function(a,e){this._type=a.type,this._variables=a.variables,this._featureData=e.additionalCalcHash[a.calcData.name]||[],this._variableObjects=a.calcData.variableObjects,this._variableToFieldAliasHash={},this._fieldNameToVariableHash={},this._variableObjects.forEach(function(a){this._variableToFieldAliasHash[a.fullName]=a.alias,this._fieldNameToVariableHash[a.fieldName]=a.fullName},this)},isBusy:function(){return!1},getVariables:function(){return this._variables},setVariables:function(a){this._variables=a},getData:function(){for(var a=this,e=[],i=0;i<this._featureData.length;i++){var r={AREA_ID:i},n=this._featureData[i];for(var o in n){var u=this._fieldNameToVariableHash[o];r[u||o]=n[o]}r.name=r.StdGeographyName;var h={};this._variables.forEach(function(a,e){h[a]=!0}),e.push(new t(null,null,r))}var c=new s;c.features=e;var f=[],d={AREA_ID:1,StdGeographyName:1,name:1},_=e[0].attributes;for(var b in _){var v=d[b];f.push({name:b,alias:b,type:v?"esriFieldTypeString":"esriFieldTypeDouble",length:v?255:void 0})}return c.fields=f.map(function(e){return h[e.name]&&(e.fullName=e.name,e.alias=a._variableToFieldAliasHash[e.name],a._type===l.RELATED_VARS?(e.units="pct",e.decimals=1):a._type===l.ONE_VAR&&(e.decimals=2)),e}),c},setOutSR:function(){},setGeoLevels:function(){},setStudyArea:function(){},stop:function(){}});return r});