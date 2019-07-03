// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper"],function(t,e,i){function s(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function n(t){return t.toLowerCase().trim()}return function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],i=0,r=t;i<r.length;i++){var d=r[i],o=d&&d.name;if(o){var a=n(o);this._fieldsMap.set(o,d),this._fieldsMap.set(a,d),e.push(a),s(d)&&(this.dateFields.push(d),this._dateFieldsSet.add(d))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(n(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t}()});