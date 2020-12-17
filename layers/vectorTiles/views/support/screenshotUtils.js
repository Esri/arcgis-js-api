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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper"],(function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.adjustScreenshotSettings=function(t,i){var h,d;(t=e({format:"png",quality:100},t)).includePadding?(h=i.width,d=i.height):(h=i.width-i.padding.left-i.padding.right,d=i.height-i.padding.top-i.padding.bottom);var a=h/d;return void 0!==t.width&&void 0===t.height?t.height=t.width/a:void 0!==t.height&&void 0===t.width&&(t.width=a*t.height),void 0!==t.height&&(t.height=Math.floor(t.height)),void 0!==t.width&&(t.width=Math.floor(t.width)),t.area||t.includePadding||(t.area={x:i.padding.left,y:i.padding.top,width:h,height:d}),t},i.resampleHermite=function(t,i,e,h,d,a,o){void 0===o&&(o=!0);for(var r=i/d,n=e/a,g=Math.ceil(r/2),f=Math.ceil(n/2),l=0;l<a;l++)for(var p=0;p<d;p++){for(var v=4*(p+(o?a-l-1:l)*d),s=0,u=0,c=0,w=0,M=0,b=0,m=0,q=(l+.5)*n,y=Math.floor(l*n);y<(l+1)*n;y++)for(var P=Math.abs(q-(y+.5))/f,S=(p+.5)*r,j=P*P,x=Math.floor(p*r);x<(p+1)*r;x++){var H=Math.abs(S-(x+.5))/g,_=Math.sqrt(j+H*H);_>=-1&&_<=1&&(s=2*_*_*_-3*_*_+1)>0&&(m+=s*t[(H=4*(x+y*i))+3],c+=s,t[H+3]<255&&(s=s*t[H+3]/250),w+=s*t[H],M+=s*t[H+1],b+=s*t[H+2],u+=s)}h[v]=w/u,h[v+1]=M/u,h[v+2]=b/u,h[v+3]=m/c}}}));