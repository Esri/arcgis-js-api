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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./util/serializationUtils"],(function(e,t,i,s,r){"use strict";function a(e){for(var t=[[],[],[],[],[]],i=0,s=e;i<s.length;i++)for(var r=0,a=s[i].displayRecords;r<a.length;r++){var n=a[r];t[n.geometryType].push(n)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.groupRecordsByGeometryType=void 0,t.groupRecordsByGeometryType=a;var n=function(){function e(){}return Object.defineProperty(e.prototype,"hasRegistry",{get:function(){return!!this._displayObjectRegistry},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var e=0,t=this.displayObjects;e<t.length;e++){var i=t[e];this._displayObjectRegistry.set(i.id,i)}}return this._displayObjectRegistry},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"displayList",{get:function(){return this._displayList},enumerable:!1,configurable:!0}),e.prototype.computeDisplayList=function(e){if(this._displayList=new i(e),e)for(var t=0,s=this.displayObjects;t<s.length;t++)for(var r=0,n=s[t].displayRecords;r<n.length;r++){var o=n[r];this._displayList.addToList(o)}else for(var l=a(this.displayObjects),p=l.length,y=0;y<p;++y){var c=l[y];this._displayList.addToList(c)}},e.prototype.clone=function(){var t=new e;return this.displayObjects&&(t.displayObjects=this.displayObjects.map((function(e){return e.clone()}))),t},e.prototype.serialize=function(e){return r.serializeList(e,this.displayObjects),e},e.prototype._deserializeObjects=function(e){for(var t=e.readInt32(),i=new Array(t),r=new Map,a=0;a<i.length;++a){var n=s.deserialize(e);i[a]=n,r.set(n.id,n)}this.displayObjects=i,this._displayList=null,this._displayObjectRegistry=r},e.deserialize=function(t){var i=new e;return i._deserializeObjects(t),i},e}();t.default=n}));