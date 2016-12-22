// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var r=function(){function e(t,r,n){this._op=t,"$type"===r?(n instanceof Array?this._val=n.map(function(t){return e._types.indexOf(t)}):this._val=e._types.indexOf(n),this._op+=11):(this._key=r,this._val=n)}return e.prototype.filter=function(e){switch(this._op){case 0:return this._val;case 1:return e.values[this._key]===this._val;case 2:return e.values[this._key]!==this._val;case 3:return e.values[this._key]<this._val;case 4:return e.values[this._key]>this._val;case 5:return e.values[this._key]<=this._val;case 6:return e.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(e.values[this._key]);case 8:return-1===this._val.indexOf(e.values[this._key]);case 9:for(var t=0,r=this._val;t<r.length;t++){var n=r[t];if(n.filter(e))return!0}return!1;case 10:for(var s=0,i=this._val;s<i.length;s++){var n=i[s];if(!n.filter(e))return!1}return!0;case 11:for(var a=0,u=this._val;a<u.length;a++){var n=u[a];if(n.filter(e))return!1}return!0;case 12:return e.type===this._val;case 13:return e.type!==this._val;case 14:return e.type<this._val;case 15:return e.type>this._val;case 16:return e.type>=this._val;case 17:return e.type<=this._val;case 18:return-1!==this._val.indexOf(e.type);case 19:return-1===this._val.indexOf(e.type)}},e.createFilter=function(t){if(!t)return new e(0,void 0,!0);var r=t[0];if(t.length<=1)return new e(0,void 0,"any"!==r);switch(r){case"==":return new e(1,t[1],t[2]);case"!=":return new e(2,t[1],t[2]);case">":return new e(4,t[1],t[2]);case"<":return new e(3,t[1],t[2]);case">=":return new e(6,t[1],t[2]);case"<=":return new e(5,t[1],t[2]);case"in":return new e(7,t[1],t.slice(2));case"!in":return new e(8,t[1],t.slice(2));case"any":return new e(9,void 0,t.slice(1).map(e.createFilter.bind(this)));case"all":return new e(10,void 0,t.slice(1).map(e.createFilter.bind(this)));case"none":return new e(11,void 0,t.slice(1).map(e.createFilter.bind(this)));default:throw new Error("invalid operator: "+r)}},e._types=["Unknown","Point","LineString","Polygon"],e}();return r});