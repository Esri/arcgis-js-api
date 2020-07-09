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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){function i(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function s(t){return t.toLowerCase().trim()}return(function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n],a=o&&o.name;if(a){var d=s(a);this._fieldsMap.set(a,o),this._fieldsMap.set(d,o),e.push(d),i(o)&&(this.dateFields.push(o),this._dateFieldsSet.add(o))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(s(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t.prototype.normalizeFieldName=function(t){var e=this.get(t);if(e)return e.name},t}())}));