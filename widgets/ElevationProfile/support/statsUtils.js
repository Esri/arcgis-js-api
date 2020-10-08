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

define(["require","exports","../../../core/maybe"],(function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getStats=void 0,i.getStats=function(e){var i=e.length;if(0===i)return null;var a=e[0].z;if(t.isNone(a))return null;for(var n=a,o=a,r=a,v=0,l=0,s=0,f=0,u=0,g=0,c=1,d=0,p=0,S=1;S<i;++S){var m=e[S],N=e[S-1],x=m.z,z=m.distance-N.distance;if(0!==z&&!t.isNone(x)){c++,r+=x,x<n&&(n=x),x>o&&(o=x);var E=N.z;if(!t.isNone(E)){var P=x-E,b=P/z;if(b>0)v+=P,u+=b,d++,b>s&&(s=b);else if(b<0){l+=-P,p++;var y=-b;g+=y,y>f&&(f=y)}}}}return{minElevation:n,maxElevation:o,avgElevation:r/c,elevationGain:v,elevationLoss:l,maxPositiveSlope:s,maxNegativeSlope:f,avgPositiveSlope:0===d?0:u/d,avgNegativeSlope:0===p?0:g/p}}}));