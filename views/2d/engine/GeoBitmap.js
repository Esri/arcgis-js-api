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

define(["require","exports","../../../core/tsSupport/extendsHelper","./Bitmap"],function(t,o,e,r){function i(t){return null!=t.drawImage}var n=[0,0],s=[0,0],u=function(t){function o(o,e,r,i){void 0===e&&(e=[0,0]),void 0===r&&(r=[0,0]),void 0===i&&(i=0),t.call(this,o),this.source=o,this.topLeft=e,this.bottomRight=r,this.resolution=i}return e(o,t),o.prototype.dispose=function(){},o.prototype.renderCanvas2D=function(t){var o=this.source,e=t.context,r=t.state,u=r.toScreen(n,this.topLeft),h=u[0],a=u[1],c=r.toScreen(s,this.bottomRight),d=c[0],p=c[1],f=d-h,l=p-a,g=h,m=a,v=0,w=0,M=this.width,x=this.height;r.resolution===this.resolution&&(g=Math.round(g),m=Math.round(m),f=Math.round(f),l=Math.round(l)),e.clearRect(g,m,f,l),i(o)?o.drawImage(e,v,w,M,x,g,m,f,l):e.drawImage(o,v,w,M,x,g,m,f,l)},o}(r);return u});