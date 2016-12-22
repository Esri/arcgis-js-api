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

define(["require","exports","dojo/has"],function(t,n,r){function o(t,n){n?t.clip="rect( "+n.top+"px, "+n.right+"px, "+n.bottom+"px, "+n.left+"px)":t.clip=""}function e(t,n){var r=null;2===n.length&&(r=f(n)),6===n.length&&(r=x(n)),t.transform=t[F]=r}function i(t,n){t.transformOrigin=n[0]+"px "+n[1]+"px 0"}function a(t){return"matrix(\n                  "+t[0].toFixed(10)+", "+t[1].toFixed(10)+",\n                  "+t[2].toFixed(10)+", "+t[3].toFixed(10)+",\n                  "+t[4]+", "+t[5]+"\n                )"}function x(t){return"matrix3d(\n                    "+t[0].toFixed(10)+", "+t[1].toFixed(10)+", 0, 0,\n                    "+t[2].toFixed(10)+", "+t[3].toFixed(10)+", 0, 0,\n                    0, 0, 1, 0,\n                    "+Math.round(t[4]).toFixed(10)+", "+Math.round(t[5]).toFixed(10)+", 0, 1\n                  )"}function f(t){return"translate("+Math.round(t[0])+"px, "+Math.round(t[1])+"px)"}function d(t){return u(t.toFixed(3))}function u(t){return"rotateZ( "+t+" deg)"}var s=r("ff"),c=r("ie"),p=r("webkit"),m=r("opera"),F=p&&"-webkit-transform"||s&&"-moz-transform"||m&&"-o-transform"||c&&"-ms-transform"||"transform";n.clip=o,n.setTransform=e,n.setOrigin=i,n.cssMatrix=a,n.cssMatrix3d=x,n.translate=f,n.rotate=d,n.rotateZ=u});