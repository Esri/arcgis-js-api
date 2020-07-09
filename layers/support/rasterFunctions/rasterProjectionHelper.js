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

define(["require","exports","tslib","../../../geometry","../../../core/Error","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils"],(function(e,r,o,t,i,n,a,s){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e,r){var o=(e.isWGS84||e.isWebMercator)&&(r.isWGS84||r.isWebMercator);return!(e.equals(r)||o)};r.defaultGridSpacing=32,r.load=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return n.isLoaded()||!n.isSupported()?[2,null]:[4,n.load()];case 1:return e.sent(),[2]}}))}))},r.projectResolution=function(e,r,o,a){if(void 0===a&&(a=null),e.spatialReference.equals(r))return e;var c=l(e.spatialReference,r);if(c&&!n.isLoaded())throw new i("rasterprojectionhelper-projectResolution","projection engine is not loaded");var p=o.center,f=new t.Extent({xmin:p.x-e.x/2,xmax:p.x+e.x/2,ymin:p.y-e.y/2,ymax:p.y+e.y/2,spatialReference:e.spatialReference}),u=c?n.project(f,r,a):s.project(f,r);return null==u?null:new t.Point(u.xmax-u.xmin,u.ymax-u.ymin,r)},r.projectPoint=function(e,r,o){if(void 0===o&&(o=null),e.spatialReference.equals(r))return e;var t=l(e.spatialReference,r);if(t&&!n.isLoaded())throw new i("rasterprojectionhelper-projectResolution","projection engine is not loaded");return t?n.project(e,r,o):s.project(e,r)},r.projectExtent=function(e,r,o){if(void 0===o&&(o=null),e.spatialReference.equals(r))return e;var t=l(e.spatialReference,r);if(t&&!n.isLoaded())throw new i("rasterprojectionhelper-projectExtent","projection engine is not loaded");return t?n.project(e,r,o):s.project(e,r)},r.getProjectionOffsetGrid=function(e,o,c,p,f,u){void 0===p&&(p=null),void 0===f&&(f=!1),void 0===u&&(u=[r.defaultGridSpacing,r.defaultGridSpacing]);var d=o.spatialReference.equals(e.spatialReference),x=l(e.spatialReference,o.spatialReference);if(x&&!n.isLoaded())throw new i("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(e&&o&&c))return null;for(var y,h,m,w=e.xmin,v=e.ymin,j=e.xmax,R=e.ymax,g=e.spatialReference,M=o.spatialReference,S=a.getInfo(g),L=S&&S.valid[0],b=S&&S.valid[1],N={x:u[0]*c.x,y:u[1]*c.y},P={cols:Math.ceil((j-w)/N.x-.1)+1,rows:Math.ceil((R-v)/N.y-.1)+1},q=N.x,G=N.y,_=[],z=!1,E=0;E<P.cols;E++){for(var W=[],A=0;A<P.rows;A++)y=new t.Point({x:w+q*E,y:R-G*A,spatialReference:g}),h=d?y:x?n.project(y,M,p):s.project(y,M),W.push(h),E>0&&f&&h&&m[A]&&S&&h.x<m[A].x&&(h.x+=b-L),h?(_.push((h.x-o.xmin)/(o.xmax-o.xmin)),_.push((o.ymax-h.y)/(o.ymax-o.ymin))):(_.push(NaN),_.push(NaN),z=!0);m=W}var F=function(e,r){var o=(e[0]+e[4]+e[4*r.cols]+e[4*r.cols+4])/4,t=(e[1]+e[5]+e[4*r.rows+1]+e[4*r.rows+5])/4;return[Math.abs(o-e[2*r.rows+2]),Math.abs(t-e[2*r.rows+3])]}(_,P),I=new Float32Array((P.cols-1)*(P.rows-1)*2*6),O=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),U=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(E=0;E<P.cols-1;E++){for(A=0;A<P.rows-1;A++){for(var k=E*P.rows*2+2*A,B=_[k],C=_[k+1],D=_[k+2],H=_[k+3],J=_[k+=2*P.rows],K=_[k+1],Q=_[k+2],T=_[k+3],V=0,X=12*(A*(P.cols-1)+E),Y=0;Y<3;Y++)I[X++]=O[V++]*B+O[V++]*D+O[V++]*Q;V=0;for(Y=0;Y<3;Y++)I[X++]=O[V++]*C+O[V++]*H+O[V++]*T;V=0;for(Y=0;Y<3;Y++)I[X++]=U[V++]*B+U[V++]*J+U[V++]*Q;V=0;for(Y=0;Y<3;Y++)I[X++]=U[V++]*C+U[V++]*K+U[V++]*T}if(z)for(var Z=0;Z<I.length;Z++)isNaN(I[Z])&&(I[Z]=-1)}return{offsets:_,error:F,coefficients:I,spacing:u,size:[P.cols-1,P.rows-1]}},r.snapPyramid=function(e,r,o){var i=Math.log(e.x/r.pixelSize.x)/Math.LN2,n=Math.log(e.y/r.pixelSize.y)/Math.LN2,a=r.storageInfo.maximumPyramidLevel||0,s="down"===o?Math.floor(Math.min(i,n)):"up"===o?Math.ceil(Math.max(i,n)):Math.round((i+n)/2),l=!1;s<0?s=0:s>a&&(l=s>a+3,s=a);var c=Math.pow(2,s);return{pyramidLevel:s,pyramidResolution:new t.Point({x:c*r.pixelSize.x,y:c*r.pixelSize.y,spatialReference:r.spatialReference}),excessiveReading:l}}}));