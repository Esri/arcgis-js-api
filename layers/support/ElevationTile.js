// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){if(this.tile=t,e){var a=this.tile.extent;this.samplerData={pixelData:e.values,width:e.width,height:e.height,safeWidth:.99999999*(e.width-1),noDataValue:e.noDataValue,dx:(e.width-1)/(a[2]-a[0]),dy:(e.width-1)/(a[3]-a[1]),x0:a[0],y1:a[3]}}else this.samplerData=null}return t.prototype.sample=function(t,e){if(this.samplerData)return function(t,e,a){var r=t.safeWidth,n=t.width,l=t.pixelData,h=t.noDataValue,u=i(t.dy*(t.y1-a),0,r),o=i(t.dx*(e-t.x0),0,r),s=Math.floor(u),d=Math.floor(o),f=s*n+d,p=f+n,D=l[f],x=l[p],c=l[f+1],v=l[p+1];if(D!==h&&x!==h&&c!==h&&v!==h){var w=o-d,y=D+(c-D)*w;return y+(x+(v-x)*w-y)*(u-s)}return}(this.samplerData,t,e)},t}();function i(t,e,a){return t<e?e:t>a?a:t}e.ElevationTile=a,e.default=a}));