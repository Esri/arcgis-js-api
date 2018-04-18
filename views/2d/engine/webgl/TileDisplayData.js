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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./util/serializationUtils"],function(i,t,e,s,r){return function(){function i(){}return Object.defineProperty(i.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var i=0,t=this.displayObjects;i<t.length;i++){var e=t[i];this._displayObjectRegistry.set(e.id,e)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"displayList",{get:function(){if(!this._displayList){this._displayList=new e;for(var i=0,t=this.displayObjects;i<t.length;i++)for(var s=t[i],r=0,a=s.displayRecords;r<a.length;r++){var n=a[r];this._displayList.addToList(n)}}return this._displayList},set:function(i){this._displayList=i},enumerable:!0,configurable:!0}),i.prototype.serialize=function(i){return r.serializeList(i,this.displayObjects),i},i.prototype._deserializeObjects=function(i){for(var t=i.readInt32(),r=new Array(t),a=new e,n=new Map,l=0;l<r.length;++l){var d=s.deserialize(i);r[l]=d,n.set(d.id,d);for(var p=0,y=d.displayRecords;p<y.length;p++){var o=y[p];a.addToList(o)}}this.displayObjects=r,this._displayList=a,this._displayObjectRegistry=n},i.deserialize=function(t){var e=new i;return e._deserializeObjects(t),e},i}()});