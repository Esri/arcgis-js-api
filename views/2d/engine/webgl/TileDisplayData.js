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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./mesh/factories/MaterialStore","./util/serializationUtils"],function(e,t,y,o,r,s){function d(e){for(var t=[[],[],[],[],[]],i=0,r=e;i<r.length;i++)for(var s=0,a=r[i].displayRecords;s<a.length;s++){var l=a[s];t[l.geometryType].push(l)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.groupRecordsByGeometryType=d;var i=function(){function i(){}return Object.defineProperty(i.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var e=0,t=this.displayObjects;e<t.length;e++){var i=t[e];this._displayObjectRegistry.set(i.id,i)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"displayList",{get:function(){return this._displayList},enumerable:!0,configurable:!0}),i.prototype.computeDisplayList=function(e){if(this._displayList=new y(e),e)for(var t=0,i=this.displayObjects;t<i.length;t++)for(var r=0,s=i[t].displayRecords;r<s.length;r++){var a=s[r];this._displayList.addToList(a)}else for(var l=d(this.displayObjects),o=l.length,n=0;n<o;++n){var p=l[n];this._displayList.addToList(p)}},i.prototype.serialize=function(e){return this.materialStore.serialize(e),s.serializeList(e,this.displayObjects),e},i.prototype._deserializeObjects=function(e){for(var t=e.readInt32(),i=new Array(t),r=new Map,s={store:this.materialStore},a=0;a<i.length;++a){var l=o.deserialize(e,s);i[a]=l,r.set(l.id,l)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=r},i.deserialize=function(e){var t=new i;return t.materialStore=r.default.deserialize(e),t._deserializeObjects(e),t},i}();t.default=i});