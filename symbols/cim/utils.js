// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(r,t){function e(r){return"function"==typeof r}function o(r,t,o,a){return e(r)?r(t,o,a):r}function a(r){for(var t=0,e=0;e<r.length;e++)t=(t<<5)-t+r.charCodeAt(e),t|=0;return t}function n(r){return[r.r,r.g,r.b,r.a]}function f(r,t,e,o,a,n,f){void 0===f&&(f=!0);for(var u=t/a,i=e/n,c=Math.ceil(u/2),h=Math.ceil(i/2),l=0;l<n;l++)for(var v=0;v<a;v++){for(var M=4*(v+(f?n-l-1:l)*a),s=0,d=0,b=0,p=0,g=0,y=0,m=0,q=(l+.5)*i,A=Math.floor(l*i);A<(l+1)*i;A++)for(var O=Math.abs(q-(A+.5))/h,_=(v+.5)*u,j=O*O,x=Math.floor(v*u);x<(v+1)*u;x++){var C=Math.abs(_-(x+.5))/c,F=Math.sqrt(j+C*C);F>=-1&&F<=1&&(s=2*F*F*F-3*F*F+1)>0&&(C=4*(x+A*t),m+=s*r[C+3],b+=s,r[C+3]<255&&(s=s*r[C+3]/250),p+=s*r[C],g+=s*r[C+1],y+=s*r[C+2],d+=s)}o[M]=p/d,o[M+1]=g/d,o[M+2]=y/d,o[M+3]=m/b}}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateValueOrFunction=o,t.hashString=a,t.colorToArray=n,t.resampleHermite=f});