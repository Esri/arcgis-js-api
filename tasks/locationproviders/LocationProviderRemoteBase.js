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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../declare","dojo/_base/array","dojo/Deferred","dojo/promise/all","../../graphic","./LocationProviderBase"],function(e,r,t,n,i,o){function a(e,r){function n(e){if(u<s){var r=a.shift();r&&o(r.args,r.dfd)}}function i(e){var r=new t;return a.push({args:e,dfd:r}),n(),r.promise}function o(t,i){u++;var o=r.apply(e,t);o.always(function(){u--,n()}),o.then(i.resolve,i.reject,i.progress)}var a=[],u=0;return function(){return i(arguments)}}var s=4;return e("esri.tasks.locationproviders.LocationProviderRemoteBase",o,{_fields:null,constructor:function(){var e=this._getFieldMapping&&this._getFieldMapping();if(this._fields=[],e)for(var r in e)e.hasOwnProperty(r)&&this._fields.push({inField:e[r],outField:r})},_throttle:function(e){return a(this,e)},_createFeatureLookup:function(e){for(var r={},t=0;t<e.length;t++){var n=e[t],i=this._createKey(n);if(i){var o=r[i];o?o.push(n):r[i]=[n]}}return r},_createKey:function(e,t){for(var n=[],i=t||r.map(this._fields,function(e){return e.inField}),o=0;o<i.length;o++){var a=e.attributes[i[o]];if(void 0===a||null===a)return;n.push(a)}return n.join("|||")},_locate:function(e,r){var i=new t,o=this,a=[],s=[],u=[],f=this._createFeatureLookup(e),c=function(e){return o._locateBatch(e,r).then(function(e){e&&(a=a.concat(e)),i.progress(a)})};c=this._throttle(c);for(var h in f)if(f.hasOwnProperty(h)){var l=f[h],p=this._createQueryExpression(l[0]);if(p){var d={key:h,features:l,expression:p};this._batchWillOverflow(u,d)&&(s.push(c(u)),u=[]),u.push(d)}}return u.length&&s.push(c(u)),n(s).then(function(){i.resolve(a)}),i.promise}})});