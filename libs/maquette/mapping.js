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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createMapping=void 0,r.createMapping=function(e,r,t){var n=[],a=[];return{results:a,map:function(i){for(var l=i.map(e),f=a.slice(),o=0,u=0;u<i.length;u++){var c=i[u],p=l[u];if(p===n[o])a[u]=f[o],t(c,f[o],u),o++;else{for(var s=!1,g=1;g<n.length+1;g++){var v=(o+g)%n.length;if(n[v]===p){a[u]=f[v],t(i[u],f[v],u),o=v+1,s=!0;break}}s||(a[u]=r(c,u))}}a.length=i.length,n=l}}}}));