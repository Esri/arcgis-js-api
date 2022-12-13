// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/aspect","dojo/on"],(function(t,r,n,e){return function(){function t(){}return t.prototype.emit=function(t,r){if(this.hasEventListener(t))return(r=r||{}).target||(r.target=this),e.emit(this,t,r)},t.prototype.on=function(t,r){return function t(r,n,e,o){var i;if(Array.isArray(n)?i=n:n.indexOf(",")>-1&&(i=n.split(/\s*,\s*/)),i){for(var u=[],f=0,s=i;f<s.length;f++){var a=s[f];u.push(t(r,a,e,o))}return u.remove=function(){for(var t=0;t<u.length;t++)u[t].remove()},u}return o(r,n)}(this,t,r,(function(t,e){return n.after(t,"on"+e,r,!0)}))},t.prototype.hasEventListener=function(t){return!(!this[t="on"+t]||!this[t].after)},t}()}));