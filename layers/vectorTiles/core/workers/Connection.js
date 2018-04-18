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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../promiseUtils"],function(t,n,i){return function(){function t(t){this._clientIdx=0,this._clients=t}return t.prototype.broadcast=function(t,n,i){for(var e=[],s=0,o=this._clients;s<o.length;s++){var r=o[s];e.push(r.invoke(t,n,i))}return e},t.prototype.close=function(){for(var t=0,n=this._clients;t<n.length;t++){n[t].close()}this._clients=[]},t.prototype.invoke=function(t,n,i,e){var s=e&&e.client;if(null==s||-1===this._clients.indexOf(s)){this._clients.some(function(t){return!t.isBusy()&&(s=t,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,s=this._clients[this._clientIdx])}var o=s.invoke(t,n,i);return e&&(e.client=s),o},t.prototype.openPorts=function(){return i.all(this._clients.map(function(t){return t.openPort()}))},t}()});