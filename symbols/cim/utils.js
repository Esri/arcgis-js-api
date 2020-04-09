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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.evaluateValueOrFunction=function(r,e,t,o){return function(r){return"function"==typeof r}(r)?r(e,t,o):r},e.colorToArray=function(r){return[r.r,r.g,r.b,r.a]},e.resampleHermite=function(r,e,t,o,a,n,f){void 0===f&&(f=!0);for(var u=e/a,i=t/n,c=Math.ceil(u/2),l=Math.ceil(i/2),v=0;v<n;v++)for(var M=0;M<a;M++){for(var h=4*(M+(f?n-v-1:v)*a),s=0,b=0,d=0,p=0,y=0,m=0,q=0,O=(v+.5)*i,_=Math.floor(v*i);_<(v+1)*i;_++)for(var g=Math.abs(O-(_+.5))/l,j=(M+.5)*u,x=g*g,A=Math.floor(M*u);A<(M+1)*u;A++){var F=Math.abs(j-(A+.5))/c,H=Math.sqrt(x+F*F);H>=-1&&H<=1&&(s=2*H*H*H-3*H*H+1)>0&&(q+=s*r[(F=4*(A+_*e))+3],d+=s,r[F+3]<255&&(s=s*r[F+3]/250),p+=s*r[F],y+=s*r[F+1],m+=s*r[F+2],b+=s)}o[h]=p/b,o[h+1]=y/b,o[h+2]=m/b,o[h+3]=q/d}}}));