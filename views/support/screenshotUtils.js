// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(i,t,h){function d(i,t){i=h.mixin({format:"png",quality:100},i||{});var d,e;i.includePadding?(d=t.width,e=t.height):(d=t.width-t.padding.left-t.padding.right,e=t.height-t.padding.top-t.padding.bottom);var a=d/e;return void 0!==i.width&&void 0===i.height?i.height=i.width/a:void 0!==i.height&&void 0===i.width&&(i.width=a*i.height),void 0!==i.height&&(i.height=Math.floor(i.height)),void 0!==i.width&&(i.width=Math.floor(i.width)),i.area||i.includePadding||(i.area={x:t.padding.left,y:t.padding.top,width:d,height:e}),i}function e(i,t,h,d,e,a,o){void 0===o&&(o=!0);for(var r=t/e,n=h/a,g=Math.ceil(r/2),f=Math.ceil(n/2),l=0;a>l;l++)for(var v=0;e>v;v++){for(var p=4*(v+(o?a-l-1:l)*e),u=0,s=0,w=0,M=0,c=0,b=0,m=0,j=(l+.5)*n,q=Math.floor(l*n);(l+1)*n>q;q++)for(var x=Math.abs(j-(q+.5))/f,y=(v+.5)*r,P=x*x,_=Math.floor(v*r);(v+1)*r>_;_++){var S=Math.abs(y-(_+.5))/g,H=Math.sqrt(P+S*S);H>=-1&&1>=H&&(u=2*H*H*H-3*H*H+1,u>0&&(S=4*(_+q*t),m+=u*i[S+3],w+=u,i[S+3]<255&&(u=u*i[S+3]/250),M+=u*i[S],c+=u*i[S+1],b+=u*i[S+2],s+=u))}d[p]=M/s,d[p+1]=c/s,d[p+2]=b/s,d[p+3]=m/w}}Object.defineProperty(t,"__esModule",{value:!0}),t.adjustScreenshotSettings=d,t.resampleHermite=e});