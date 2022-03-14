// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./mesh/factories/WGLMeshFactory","./util/serializationUtils"],(function(e,i,t,s,r,a){return function(){function e(){}return Object.defineProperty(e.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var e=0,i=this.displayObjects;e<i.length;e++){var t=i[e];this._displayObjectRegistry.set(t.id,t)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayList",{get:function(){if(!this._displayList){this._displayList=new t;for(var e=0,i=this.displayObjects;e<i.length;e++)for(var s=0,r=i[e].displayRecords;s<r.length;s++){var a=r[s];this._displayList.addToList(a)}}return this._displayList},set:function(e){this._displayList=e},enumerable:!0,configurable:!0}),e.prototype.serialize=function(e){return this.materialStore.serialize(e),a.serializeList(e,this.displayObjects),e},e.prototype._deserializeObjects=function(e){for(var i=e.readInt32(),r=new Array(i),a=new t,l=new Map,n={store:this.materialStore},o=0;o<r.length;++o){var d=s.deserialize(e,n);r[o]=d,l.set(d.id,d);for(var y=0,p=d.displayRecords;y<p.length;y++){var c=p[y];a.addToList(c)}}this.displayObjects=r,this._displayList=a,this._displayObjectRegistry=l},e.deserialize=function(i){var t=new e;return t.materialStore=r.MaterialStore.deserialize(i),t._deserializeObjects(i),t},e}()}));