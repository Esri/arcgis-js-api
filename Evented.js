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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/Evented","dojo/has","./kernel"],function(t,e,r,n,o,s){var a=t([n],{declaredClass:"esri.Evented",registerConnectEvents:function(){var t,r,n,o,s,a=this.constructor,i=this.constructor._meta.parents,h=[{}],u={},c=function(t,r){e.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var o=t[n];o._meta&&o._meta.parents&&c(o._meta.parents,r),o.prototype._eventMap&&r.push(e.mixin({},o.prototype._eventMap))}return r};if(!a._onMap){c(i,h),h.push(this._eventMap),t=e.mixin.apply(this,h);for(r in this)/^on\w/.test(r)&&e.isFunction(this[r])&&(n=this._hyphenLower(r).toLowerCase(),t[n]||(u[n]={method:r}));for(s in t)o=this._onCamelCase(s),u[s]={method:o,argKeys:t[s]};return a._onMap=u,a._onMap}},on:function(t,n){if(t.indexOf(",")>-1){for(var o=t.split(/\s*,\s*/),s=o.length,a=[];s--;)a.push(this.on(o[s],n));return a.remove=function(){for(var t=0;t<a.length;t++)a[t].remove()},a}var i,h=this.constructor._onMap||this.registerConnectEvents(),u="string"==typeof t&&t.toLowerCase(),c=this._onCamelCase(u),p=h&&h[u],f=p&&p.method||this[c]&&e.isFunction(this[c])&&c;return f?p&&e.isArray(p.argKeys)?(i=this._onArr2Obj(n,h[u].argKeys),r.after(this,f,i,!0)):r.after(this,f,function(t){t=t||{},t.target||(t.target=this),n.call(this,t)},!0):this.inherited(arguments)},emit:function(t,r){var n,o,s,a,i,h=t.toLowerCase(),u=this._onCamelCase(t),c=this.constructor._onMap||this.registerConnectEvents();return s=c&&c[h]&&c[h].method||e.isFunction(this[u])&&u,a=s&&this[s],s&&c&&c[h]&&this._onObj2Arr(function(){o=Array.prototype.slice.call(arguments)},c[h].argKeys)(r),r=r||{},r.target||(r.target=this),a&&(i=o&&o.length?o:[r],n=a.apply(this,i)),this.inherited(arguments,[t,r]),n},_onObj2Arr:function(t,e){if(e){var r=this;return function(n){var o,s=[],a=e.length;for(o=0;a>o;o++)s[o]=n[e[o]];t.apply(r,s)}}return t},_onArr2Obj:function(t,e){if(e){var r=this;return function(){var n,o={},s=arguments.length;for(n=0;s>n;n++)o[e[n]]=arguments[n];o.target||(o.target=r),t.call(r,o)}}return t},_hyphenLower:function(t){return t.replace(/^on/,"").replace(/[A-Z](?=[a-z])/g,function(t,e){return(e?"-":"")+t.toLowerCase()})},_onCamelCase:function(t){return"on"+t.substr(0,1).toUpperCase()+t.substr(1).replace(/\-([a-z])/g,function(t,e){return e.toUpperCase()})}});return o("extend-esri")&&(s.Evented=a),a});