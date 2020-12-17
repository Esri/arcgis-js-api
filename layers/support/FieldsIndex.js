/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";function t(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function e(t){return t.toLowerCase().trim()}return function(){function i(i){if(this.fields=i,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!i)return;const s=[];for(const n of i){const i=n&&n.name;if(i){const r=e(i);this._fieldsMap.set(i,n),this._fieldsMap.set(r,n),s.push(r),t(n)&&(this.dateFields.push(n),this._dateFieldsSet.add(n))}}s.sort(),this.uid=s.join(",")}var s=i.prototype;return s.destroy=function(){this._fieldsMap.clear()},s.has=function(t){return null!=this.get(t)},s.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(e(t)):void 0},s.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},s.normalizeFieldName=function(t){const e=this.get(t);if(e)return e.name},i}()}));
