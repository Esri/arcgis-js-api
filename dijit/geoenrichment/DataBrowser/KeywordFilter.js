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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang"],(function(e,t,i){return e(null,{isKeywordFilter:!0,searchString:"",searchFields:null,delimiters:/[\s;,\/?:@&=\$#'%"`~!^\(\)\[\]\{\}\\*|\u0000-\u001f\u007f-\u009f\u2000-\u2bff\ud800-\uffff]+/,constructor:function(e,t){this.update(e),this.searchFields=t?"string"==typeof t?[t]:t:["alias","description","fieldCategory"]},update:function(e){this.searchString=i.trim(e||""),this._keywords=this.searchString&&"*"!=this.searchString?this.searchString.toLowerCase().split(this.delimiters):null},_keywords:null,isActive:function(){return!!this._keywords},match:function(e){return!this._keywords||t.some(this.searchFields,(function(t){return this._matchField(e[t])}),this)},_matchField:function(e){return!!e&&(e=e.toLowerCase(),t.every(this._keywords,(function(t){return e.indexOf(t)>=0})))}})}));