// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/on","../Evented","dijit/_WidgetBase"],function(t,e,n,o,r,i){var s=t([i,r],{_onMap:function(t){var e,n,o=this.constructor._onMap;return o&&o.FINAL||(delete this.constructor._onMap,o=this.registerConnectEvents(),o.FINAL=!0),t=t.toLowerCase(),o[t]?e=this[o[t].method]:(n=this._onCamelCase(t),this[n]&&(e=n)),e},on:function(t,e){var n=this._onMap(t),r=t.replace(/\-/g,""),i="on"+r in this.domNode;return n||!i?this.inherited(arguments):this.own(o(this.domNode,r,e))[0]},emit:function(t,n){var o,r,i,s=t.toLowerCase(),a=this.constructor._onMap||this.registerConnectEvents();return r=this[this._onMap(s)],n=n||{},n.target||(n.target=this),r&&a&&a[s]&&(this._onObj2Arr(function(){o=Array.prototype.slice.call(arguments)},a[s].argKeys)(n),i=e.mixin({},arguments),i[2]=o,i[0]=a[s].name.replace(/^on/,"")),this.inherited(i||arguments)}});return s});