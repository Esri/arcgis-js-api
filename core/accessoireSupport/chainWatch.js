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

define(["dojo/has","../lang","./once"],function(t,n,e){var i=t("dojo-debug-messages"),h=function(t,n,e){this._obj=null,this._hdl=null,this.name=t,this.callback=n,this.next=e,this.handler=this.handler.bind(this)};h.prototype={handler:function(t,n,e,i){this.next&&(this.next.obj=t),this.name===e&&this.callback(t,n,e,i)},remove:function(){this.obj=null}},Object.defineProperty(h.prototype,"obj",{get:function(){return this._obj},set:function(t){this._hdl&&(this._hdl.remove(),this._hdl=null),this._obj=t,t&&(t._accessorProps||t.__accessor__?this._hdl=t.watch(this.name,this.handler):t.watch?this._hdl=t.watch(this.name,function(t,n,e){this.handler(e,n,this.name,this.obj)}.bind(this)):i&&console.warn("[watch()] unable to a watch property '%s' on object: \n%O",this.name,t)),this.next&&(this.next.obj=null==t?t:t[this.name])}});var s=function(t,n,e){if(Array.isArray(n)||(n=[n]),n.length>0){var i=new h(n[0],e,s(null,n.slice(1),e));return i.obj=t,i}return null},o=function(t,n,e){if(t){var i=t.get?t.get(n[e]):t[n[e]];return e===n.length-1?i:o(i,n,++e)}};return function(t,i,h){var l=i.split("."),r=o(t,l,0),a=s(t,l,function(){var e=o(t,l,0);n.equals(r,e)||(h.call(t,e,r,i,t),r=e)});return{remove:e(function(){a.remove(),a=null})}}});