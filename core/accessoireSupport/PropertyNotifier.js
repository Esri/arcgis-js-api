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

define(["dojo/has","../accessorSupport/watch"],function(n,t){t=t["default"];var i=n("dojo-debug-messages"),s=function(n,t,i,s){console.warn("[%s] won't detect changes of '%s' in the computing chain '%s' as '%s' isn't an Accessor.",n,s,t,i)},e=function(n,t){this.dependencyPath=n,this.chain=n.split("."),this.dependents=t};e.prototype={install:function(n){return new o(this,n)}};var o=function(n,t){this.binding=n,this.obj=t,this._installs=[],this._props=t._accessorProps,this._install(t,0),this._notify()},h=function(n){return n&&(n.__accessor__||n._accessorProps)},c=function(n,i,s){return n.dirties?t(n,i,s,!0):n.bind(i,s)};return o.prototype={remove:function(){this._installs.forEach(function(n){n.remove()}),this._installs=this._props=this.binding=this.obj=null},_install:function(n,t){var e,o=this.binding.chain,a=this._installs;if(t<a.length&&(a.splice(t).forEach(function(n){n.remove()}),this._notify()),t!==o.length)if(n&&(e=h(n))){for(var r,l=t;(r=o[l])&&n&&(e=h(n));)a[l]=c(e,r,this._callback.bind(this,l)),n=n[o[l++]];i&&a.length!==o.length&&n&&n._accessorProps&&s(this.obj.declaredClass,this.binding.dependencyPath,o[l-1],o[l]),this._notify()}else n&&i&&s(this.obj.declaredClass,this.binding.dependencyPath,o[t-1],o[t])},_callback:function(n,t){return 1===arguments.length?void this._notify():(this._install(t,n+1),void this._notify())},_notify:function(){for(var n=this.binding.dependencyPath,t=this.binding.dependents,i=this._props,s=0,e=t.length;e>s;s++)i.propertyDependencyMayChange(t[s],n)}},e});