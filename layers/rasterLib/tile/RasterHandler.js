// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","module","dojo/Deferred","dojo/promise/all","../../PixelBlock","../../vectorTiles/core/workers","../../vectorTiles/core/promiseUtils","../../vectorTiles/core/requireUtils","../../vectorTiles/request","../../rasterLib/function/rasterFunctionHelper","../../rasterLib/renderer/rasterRendererHelper"],function(e,n,t,o,r,i,c,s,l,u,h,d){return function(){function n(e){this.customModules=e&&e.customModules}return n.prototype.destroy=function(){this.stop(),this.rasterLayer=null,this.customModules=null},n.prototype.start=function(){this.stop();var n=new o,r=0,i=this.customModules?this.customModules.length+1:1,s=l.getAbsMid("esri/layers/rasterLib/tile/RasterWorker",e,t),u=c.open(s,{client:this}).then(function(e){this._connection=e,++r===i&&(this._connected=!0,n.resolve())}.bind(this));return this._openDL=[u],this.customModules&&this.customModules.forEach(function(e){u=c.open(e,{client:this}).then(function(e){++r===i&&(this._connected=!0,n.resolve())}),this._openDL.push(u),console.log(e)}.bind(this)),this._connectionPromise=n.promise,this._connectionPromise},n.prototype.stop=function(){this._openDL?this._openDL.forEach(function(e){e.isFulfilled()||e.cancel()}.bind(this)):this._connectionPromise&&!this._connectionPromise.isFulfilled()&&this._connectionPromise.cancel(),this._connection&&(this._connection.close(),this._connection=null)},n.prototype.decode=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));var n={id:null};return this._connection.invoke("decode",e,[],n).then(function(e){return e.targetWorker=n,e})},n.prototype.process=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));var n={id:null};e.layerId=this.rasterLayer.layerId;var t=new o;return this._connection.invoke("process",e,[],n).then(function(e){e.targetWorker=n,e.src?Object.keys(e.src).forEach(function(n){e.src[n].pixelBlock=new i(e.src[n].pixelBlock)}):e.src=null,e.pixelBlock&&(e.pixelBlock=new i(e.pixelBlock)),t.resolve(e)}),t.promise},n.prototype.render=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));var n={id:null};return e.layerId=this.rasterLayer.layerId,this._connection.invoke("render",e,[],n).then(function(e){return e.targetWorker=n,e.pixelBlock=e.pixelBlock?new i(e.pixelBlock):null,e})},n.prototype.setLayer=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));this.rasterLayer=e;var n={id:null};return this._connection.broadcast("setLayer",e,[],n)},n.prototype.setRasterFunction=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));var n={id:null};return this._connection.broadcast("setRasterFunction",e,[],n)},n.prototype.setRasterRenderer=function(e){if(!this._connectionPromise.isFulfilled()||!this._connection)return s.reject(new Error("no connection"));var n={id:null};return this._connection.broadcast("setRasterRenderer",e,[],n)},n}()});