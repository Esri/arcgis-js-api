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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang"],function(t,e,i){return t(null,{isKeywordFilter:!0,searchString:"",searchFields:null,constructor:function(t,e){this.update(t),this.searchFields=e?"string"==typeof e?[e]:e:["alias","description","fieldCategory"]},update:function(t){this.searchString=i.trim(t||""),this._keywords=this.searchString&&"*"!=this.searchString?this.searchString.toLowerCase().split(/(\s+|,\s*)/):null},_keywords:null,isActive:function(){return!!this._keywords},match:function(t){return!this._keywords||e.some(this.searchFields,function(e){return this._matchField(t[e])},this)},_matchField:function(t){return t?(t=t.toLowerCase(),e.every(this._keywords,function(e){return t.indexOf(e)>=0})):!1}})});