// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./util/serializationUtils"],function(e,t,y,n,s){function d(e){for(var t=[[],[],[],[],[]],i=0,s=e;i<s.length;i++)for(var r=0,a=s[i].displayRecords;r<a.length;r++){var n=a[r];t[n.geometryType].push(n)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.groupRecordsByGeometryType=d;var i=function(){function i(){}return Object.defineProperty(i.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var e=0,t=this.displayObjects;e<t.length;e++){var i=t[e];this._displayObjectRegistry.set(i.id,i)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"displayList",{get:function(){return this._displayList},enumerable:!0,configurable:!0}),i.prototype.computeDisplayList=function(e){if(this._displayList=new y(e),e)for(var t=0,i=this.displayObjects;t<i.length;t++)for(var s=0,r=i[t].displayRecords;s<r.length;s++){var a=r[s];this._displayList.addToList(a)}else for(var n=d(this.displayObjects),l=n.length,o=0;o<l;++o){var p=n[o];this._displayList.addToList(p)}},i.prototype.clone=function(){var e=new i;return this.displayObjects&&(e.displayObjects=this.displayObjects.map(function(e){return e.clone()})),e},i.prototype.serialize=function(e){return s.serializeList(e,this.displayObjects),e},i.prototype._deserializeObjects=function(e){for(var t=e.readInt32(),i=new Array(t),s=new Map,r=0;r<i.length;++r){var a=n.deserialize(e);i[r]=a,s.set(a.id,a)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=s},i.deserialize=function(e){var t=new i;return t._deserializeObjects(e),t},i}();t.default=i});