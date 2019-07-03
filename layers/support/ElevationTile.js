// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function a(t,e,a){var n=t.safeWidth,r=t.width,u=t.values,l=t.noDataValue,o=i(t.dy*(t.y1-a),0,n),h=i(t.dx*(e-t.x0),0,n),s=Math.floor(o),d=Math.floor(h),f=s*r+d,p=f+r,v=u[f],c=u[p],y=u[f+1],D=u[p+1];if(v!==l&&c!==l&&y!==l&&D!==l){var m=o-s,w=h-d,x=v+(y-v)*w;return x+(c+(D-c)*w-x)*m}}function i(t,e,a){return t<e?e:t>a?a:t}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.tile=t,this.update(e)}return t.prototype.update=function(t){if(!t)return void(this.samplerData=null);var e=this.tile.extent;this.samplerData={values:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(e[2]-e[0]),dy:(t.width-1)/(e[3]-e[1]),x0:e[0],y1:e[3]}},t.prototype.sample=function(t,e){if(this.samplerData)return a(this.samplerData,t,e)},t}();e.ElevationTile=n,e.sample=a,e.default=n});