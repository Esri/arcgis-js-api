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

define(["require","exports"],function(t,n){function r(t,n,r){var o=t[0],i=t[1],s=n[0],a=n[1],f=r[0],h=r[1];if(s===f)return u(o-s);var c=(h-a)/(f-s),p=a-c*s;return u(c*o-i+p)/e(c*c+1)}function o(t,n,i,u,e){void 0===u&&(u=0),void 0===e&&(e=t.length);for(var s,a=t[u],f=t[e-1],h=0,c=0,p=u+1;e-1>p;p++)s=r(t[p],a,f),s>h&&(c=p,h=s);h>n?(o(t,n,i,u,c+1),o(t,n,i,c,e)):(i(a[0],a[1]),i(f[0],f[1]))}var i=Math.round,u=Math.abs,e=Math.sqrt,s=function(){function t(){this._transform=null}return t.prototype.update=function(t,n){this._transform=t,this._resolution=n},t.prototype.toScreenPoint=function(t,n,r){return this.transformPoint(n.x+r*this._resolution,n.y,function(n,r){t.x=n,t.y=r}),t},t.prototype.toScreenPath=function(t,n){var r=this,i=null!=t.paths,u=i?t.paths:t.rings,e="",s=function(t,o){t+=n*r._resolution,r.transformPoint(t,o,function(t,n){isNaN(t)||isNaN(n)||(e+=t,e+=",",e+=n,e+=" ")})};if(u)for(var a=0,f=u.length;f>a;a++)e+="M ",o(u[a],this._resolution,s),i||(e+="Z ");return e},t.prototype.transformPoint=function(t,n,r){var o=this._transform,u=o[0],e=o[1],s=o[2],a=o[3],f=o[4],h=o[5];r(i(u*t+s*n+f),i(e*t+a*n+h))},t}();return s});