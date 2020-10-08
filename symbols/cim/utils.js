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

define(["require","exports"],(function(e,r){"use strict";function t(e,r){switch("string"!=typeof e&&(e=String(e)),r){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.isCIMMarkerStrokePlacement=r.isCIMFill=r.isCIMStroke=r.isCIMMarker=r.toCIMSymbolJSON=r.fromCIMColor=r.resampleHermite=r._adjustTextCase=r.createLabelOverrideFunction=r.colorToArray=r.evaluateValueOrFunction=void 0,r.evaluateValueOrFunction=function(e,r,t,a){return function(e){return"function"==typeof e}(e)?e(r,t,a):e},r.colorToArray=function(e){return[e.r,e.g,e.b,e.a]},r.createLabelOverrideFunction=function(e,r,a){var n=function(e){for(var r=e.length;r--;)if(-1===" /-,\n".indexOf(e.charAt(r)))return!1;return!0},i=[],o=0,l=-1;do{if((l=r.indexOf("[",o))>=o){if(l>o){var u=r.substr(o,l-o);i.push([u,null,n(u)])}if(o=l+1,(l=r.indexOf("]",o))>=o){if(l>o){var M=e[r.substr(o,l-o)];M&&i.push([null,M,!1])}o=l+1}}}while(-1!==l);if(o<r.length-1){u=r.substr(o);i.push([u,null,n(u)])}return function(e){for(var r="",n=null,o=0,l=i;o<l.length;o++){var u=l[o],M=u[0],c=u[1],s=u[2];if(M)s?n=M:(n&&(r+=n,n=null),r+=M);else{var C=e.attributes[c];C&&(n&&(r+=n,n=null),r+=C)}}return t(r,a)}},r._adjustTextCase=t,r.resampleHermite=function(e,r,t,a,n,i,o){void 0===o&&(o=!0);for(var l=r/n,u=t/i,M=Math.ceil(l/2),c=Math.ceil(u/2),s=0;s<i;s++)for(var C=0;C<n;C++){for(var f=4*(C+(o?i-s-1:s)*n),p=0,I=0,y=0,k=0,d=0,m=0,v=0,h=(s+.5)*u,S=Math.floor(s*u);S<(s+1)*u;S++)for(var b=Math.abs(h-(S+.5))/c,P=(C+.5)*l,O=b*b,g=Math.floor(C*l);g<(C+1)*l;g++){var F=Math.abs(P-(g+.5))/M,A=Math.sqrt(O+F*F);A>=-1&&A<=1&&(p=2*A*A*A-3*A*A+1)>0&&(v+=p*e[(F=4*(g+S*r))+3],y+=p,e[F+3]<255&&(p=p*e[F+3]/250),k+=p*e[F],d+=p*e[F+1],m+=p*e[F+2],I+=p)}a[f]=k/I,a[f+1]=d/I,a[f+2]=m/I,a[f+3]=v/y}},r.fromCIMColor=function(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}},r.toCIMSymbolJSON=function(e){var r;return null===(r=e.data)||void 0===r?void 0:r.symbol},r.isCIMMarker=function(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type},r.isCIMStroke=function(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type},r.isCIMFill=function(e){return"CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type},r.isCIMMarkerStrokePlacement=function(e){return"CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type}}));