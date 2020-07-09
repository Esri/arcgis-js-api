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

define(["require","exports"],(function(e,r){function t(e,r){switch("string"!=typeof e&&(e=String(e)),r){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.evaluateValueOrFunction=function(e,r,t,n){return function(e){return"function"==typeof e}(e)?e(r,t,n):e},r.colorToArray=function(e){return[e.r,e.g,e.b,e.a]},r.createLabelOverrideFunction=function(e,r,n){var a=function(e){for(var r=e.length;r--;)if(-1===" /-,\n".indexOf(e.charAt(r)))return!1;return!0},i=[],o=0,l=-1;do{if((l=r.indexOf("[",o))>=o){if(l>o){var u=r.substr(o,l-o);i.push([u,null,a(u)])}if(o=l+1,(l=r.indexOf("]",o))>=o){if(l>o){var M=e[r.substr(o,l-o)];M&&i.push([null,M,!1])}o=l+1}}}while(-1!==l);if(o<r.length-1){u=r.substr(o);i.push([u,null,a(u)])}return function(e){for(var r="",a=null,o=0,l=i;o<l.length;o++){var u=l[o],M=u[0],c=u[1],f=u[2];if(M)f?a=M:(a&&(r+=a,a=null),r+=M);else{var s=e.attributes[c];s&&(a&&(r+=a,a=null),r+=s)}}return t(r,n)}},r._adjustTextCase=t,r.resampleHermite=function(e,r,t,n,a,i,o){void 0===o&&(o=!0);for(var l=r/a,u=t/i,M=Math.ceil(l/2),c=Math.ceil(u/2),f=0;f<i;f++)for(var s=0;s<a;s++){for(var C=4*(s+(o?i-f-1:f)*a),p=0,y=0,I=0,k=0,d=0,h=0,v=0,m=(f+.5)*u,P=Math.floor(f*u);P<(f+1)*u;P++)for(var S=Math.abs(m-(P+.5))/c,b=(s+.5)*l,g=S*S,A=Math.floor(s*l);A<(s+1)*l;A++){var O=Math.abs(b-(A+.5))/M,F=Math.sqrt(g+O*O);F>=-1&&F<=1&&(p=2*F*F*F-3*F*F+1)>0&&(v+=p*e[(O=4*(A+P*r))+3],I+=p,e[O+3]<255&&(p=p*e[O+3]/250),k+=p*e[O],d+=p*e[O+1],h+=p*e[O+2],y+=p)}n[C]=k/y,n[C+1]=d/y,n[C+2]=h/y,n[C+3]=v/I}},r.fromCIMColor=function(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}},r.toCIMSymbolJSON=function(e){var r;return null===(r=e.data)||void 0===r?void 0:r.symbol},r.isCIMMarker=function(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type},r.isCIMStroke=function(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type},r.isCIMFill=function(e){return"CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type},r.isCIMMarkerStrokePlacement=function(e){return"CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type}}));