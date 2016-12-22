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

define(["../../../core/declare"],function(t){var e=function(t,e){this.data=t,this.size=Math.floor(e/1024)},i=t(null,{documents:void 0,_maxDataSize:void 0,_cachedDataSize:void 0,_lruQueue:void 0,constructor:function(t){this._maxDataSize=t,this.documents={},this._maxDataSize=0,this._cachedDataSize=0,this._lruQueue=[]},setMaxSize:function(t){this._maxDataSize=t},has:function(t){return null!=this.documents[t]},insert:function(t,i,a){var s=new e(i,a);this.documents[t]=s,this._cachedDataSize+=s.size,this._cachedDataSize>this._maxDataSize&&this._collect()},use:function(t){var e=this.documents[t];return e&&this._lruQueue.push(t),e},_collect:function(){for(;this._cachedDataSize>.75*this._maxDataSize&&!(this._lruQueue.length<1);){var t=this._lruQueue.shift(),e=this.documents[t];e&&(delete this.documents[t],this._cachedDataSize-=e.size)}},getStats:function(){return{numDocs:Object.keys(this.documents).length,size:this._cachedDataSize}}});return i});