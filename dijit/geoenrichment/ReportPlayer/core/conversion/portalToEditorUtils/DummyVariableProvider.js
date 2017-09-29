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

define(["dojo/_base/declare"],function(e){var t=e(null,{variable:null,_calcType:null,constructor:function(e,t){this.variable=t,this._calcType=e.substr(0,e.indexOf("/")+1)},calculate:function(e){return 0},getCalcType:function(){return this._calcType},getAliasWithType:function(){return this.variable.id},getDescriptionWithType:function(){return this.variable.id},getScriptString:function(){return""},getDecimals:function(){return 0}}),a=e(null,{_variables:null,constructor:function(){this._variables={}},_createVariable:function(e){if(!e)return null;var t,a=e.indexOf("."),l=-1!=a?e:null,i=e.substr(a+1);return l?(t=this._variables[l],t||(t=this._variables[i],t&&!t.fullName?(t.fullName=l,this._variables[l]=t):t=this._variables[l]={id:i,fullName:l}),this._variables[i]=t):(t=this._variables[i],t||(t=this._variables[i]={id:i,fullName:null})),t},_statefulNameToFullName:function(e){return e.substr(e.indexOf("/")+1)},get:function(e){return this.getByFullName(e)},getByFullName:function(e){return this._variables[e]||this._createVariable(e)},statefulNameToCalculator:function(e){return new t(e,this._createVariable(this._statefulNameToFullName(e)))},calculatorToStatefulName:function(e){return e.getCalcType()+e.variable.fullName}});return a});