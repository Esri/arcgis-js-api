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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","../BaseEditor"],(function(i,e,t,s){return i([s],{baseClass:"jimu-gp-editor-base jimu-gp-editor-rse",editorName:"RecordSetEditor",popupConfig:null,args:null,constructor:function(i){this.args=e.mixin({},i)},postCreate:function(){this.inherited(arguments),this.value={};var i={showTitle:!1};if(this.args&&this.args.param&&this.args.param.defaultValue){this.value=e.clone(this.args.param.defaultValue);var s=this.value.fields;if(this.value.output&&this.value.output.fields){var a=t.map(this.value.output.fields,(function(i){return i.name}));t.forEach(s,(function(i){a.indexOf(i.name)>=0?i.visible=!0:i.visible=!1}))}i.fields=s}else this.domNode.innerHTML="table"},destroy:function(){this.popupConfig&&(this.popupConfig.destroy(),this.popupConfig=null),this.inherited(arguments)},getValue:function(){if(this.popupConfig){var i=this.popupConfig.getConfig();return this.value.output={title:i.title,fields:i.fields},this.value.fields=this.args.param.defaultValue.fields,this.value}return this.value}})}));