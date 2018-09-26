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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/boundsUtils","../../../../geometry/support/coordsUtils"],function(r,e,n,a){function t(r,e,n,t,i){if("point"===r.type){var o=r.clone();if(i){var m=t.resolution;o.x=r.x+e*m,o.y=r.y-n*m}else{var s=t.state.transform,x=t.state.inverseTransform,y=s[0]*r.x+s[2]*r.y+s[4],v=s[1]*r.x+s[3]*r.y+s[5];o.x=x[0]*(y+e)+x[2]*(v+n)+x[4],o.y=x[1]*(y+e)+x[3]*(v+n)+x[5]}return o}if("extent"===r.type){var f=r.clone();if(i){var m=t.resolution;f.xmin=r.xmin+e*m,f.xmax=r.xmax+e*m,f.ymin=r.ymin-n*m,f.ymax=r.ymax-n*m}else{var s=t.state.transform,x=t.state.inverseTransform,l=s[0]*r.xmin+s[2]*r.ymin+s[4],u=s[1]*r.xmin+s[3]*r.ymin+s[5],p=s[0]*r.xmax+s[2]*r.ymax+s[4],c=s[1]*r.xmax+s[3]*r.ymax+s[5];f.xmin=x[0]*(l+e)+x[2]*(u+n)+x[4],f.ymin=x[1]*(l+e)+x[3]*(u+n)+x[5],f.xmax=x[0]*(p+e)+x[2]*(c+n)+x[4],f.ymax=x[1]*(p+e)+x[3]*(c+n)+x[5]}return f}var d=r.clone(),g=a.geometryToCoordinates(r),T="polyline"===d.type?d.paths:d.rings;if(i){var m=t.resolution;for(var h in g){var b=g[h];for(var C in b){var O=b[C],y=O[0],v=O[1];T[h][C]=[y+e*m,v-n*m]}}}else{var s=t.state.transform,x=t.state.inverseTransform;for(var h in g){var b=g[h];for(var C in b){var P=b[C],U=s[0]*P[0]+s[2]*P[1]+s[4],_=s[1]*P[0]+s[3]*P[1]+s[5],y=x[0]*(U+e)+x[2]*(_+n)+x[4],v=x[1]*(U+e)+x[3]*(_+n)+x[5];T[h][C]=[y,v]}}}return d}function i(r,e,t,i){if("extent"===r.type){var o=r.xmin,m=r.xmax,s=r.ymin,x=r.ymax,y=(o+m)/2,v=(x+s)/2;return r.xmin=(o-y)*e+y,r.ymax=(x-v)*t+v,r.xmax=(m-y)*e+y,r.ymin=(s-v)*t+v,r}var f=a.geometryToCoordinates(r),l=n.getRingsOrPathsBounds(f),u=l[0],p=l[1],c=l[2],d=l[3],g=(u+c)/2,T=(d+p)/2,h=r.clone(),b="polyline"===h.type?h.paths:h.rings;for(var C in f){var O=f[C];for(var P in O){var U=O[P],_=U[0],j=U[1];b[C][P]=[(_-g)*e+g,(j-T)*t+T]}}return h}Object.defineProperty(e,"__esModule",{value:!0}),e.move=t,e.scale=i});