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

define(["require","exports","dojo/_base/lang"],function(i,t,h){function d(i,t){i=h.mixin({format:"png",quality:100},i||{});var d,a;i.includePadding?(d=t.width,a=t.height):(d=t.width-t.padding.left-t.padding.right,a=t.height-t.padding.top-t.padding.bottom);var e=d/a;return void 0!==i.width&&void 0===i.height?i.height=i.width/e:void 0!==i.height&&void 0===i.width&&(i.width=e*i.height),void 0!==i.height&&(i.height=Math.floor(i.height)),void 0!==i.width&&(i.width=Math.floor(i.width)),i.area||i.includePadding||(i.area={x:t.padding.left,y:t.padding.top,width:d,height:a}),i}function a(i,t,h,d,a,e,o){void 0===o&&(o=!0);for(var r=t/a,n=h/e,g=Math.ceil(r/2),f=Math.ceil(n/2),v=0;e>v;v++)for(var l=0;a>l;l++){for(var p=4*(l+(o?e-v-1:v)*a),w=0,s=0,u=0,M=0,c=0,m=0,b=0,q=(v+.5)*n,x=Math.floor(v*n);(v+1)*n>x;x++)for(var j=Math.abs(q-(x+.5))/f,y=(l+.5)*r,P=j*j,S=Math.floor(l*r);(l+1)*r>S;S++){var H=Math.abs(y-(S+.5))/g,_=Math.sqrt(P+H*H);_>=-1&&1>=_&&(w=2*_*_*_-3*_*_+1,w>0&&(H=4*(S+x*t),b+=w*i[H+3],u+=w,i[H+3]<255&&(w=w*i[H+3]/250),M+=w*i[H],c+=w*i[H+1],m+=w*i[H+2],s+=w))}d[p]=M/s,d[p+1]=c/s,d[p+2]=m/s,d[p+3]=b/u}}t.adjustScreenshotSettings=d,t.resampleHermite=a});