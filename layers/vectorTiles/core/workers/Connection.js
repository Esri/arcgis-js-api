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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../promiseUtils"],(function(t,n,e){return function(){function t(t){this._clientIdx=0,this._clients=t}return t.prototype.broadcast=function(t,n,e){for(var i=[],r=0,s=this._clients;r<s.length;r++){var o=s[r];i.push(o.invoke(t,n,e))}return i},t.prototype.close=function(){for(var t=0,n=this._clients;t<n.length;t++){n[t].close()}this._clients=[]},t.prototype.invoke=function(t,n,i,r){var s=r&&r.client;if(!this._clients||!this._clients.length)return e.reject(new Error("Connection closed"));null!=s&&-1!==this._clients.indexOf(s)||(this._clients.some((function(t){return!t.isBusy()&&(s=t,!0)}))||(this._clientIdx=(this._clientIdx+1)%this._clients.length,s=this._clients[this._clientIdx]));var o=s.invoke(t,n,i);return r&&(r.client=s),o},t.prototype.openPorts=function(){return e.all(this._clients.map((function(t){return t.openPort()})))},t}()}));