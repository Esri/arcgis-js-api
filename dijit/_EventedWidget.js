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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/on","../Evented","dijit/_WidgetBase"],(function(t,e,o,n,i,r){return t([r,i],{_onMap:function(t){var e,o,n=this.constructor._onMap;return n&&n.FINAL||(delete this.constructor._onMap,(n=this.registerConnectEvents()).FINAL=!0),n[t=t.toLowerCase()]?e=this[n[t].method]:this[o=this._onCamelCase(t)]&&(e=o),e},on:function(t,e){var o=this._onMap(t),i=t.replace(/\-/g,""),r="on"+i in this.domNode;return o||!r?this.inherited(arguments):this.own(n(this.domNode,i,e))[0]},emit:function(t,o,n){var i,r,s,a=t.toLowerCase(),h=this.constructor._onMap||this.registerConnectEvents();return r=this[this._onMap(a)],(o=o||{}).target||(o.target=this),r&&h&&h[a]&&(this._onObj2Arr((function(){i=Array.prototype.slice.call(arguments)}),h[a].argKeys)(o),(s=e.mixin({},arguments))[2]=i,s[0]=h[a].name.replace(/^on/,"")),this.inherited(s||arguments)}})}));