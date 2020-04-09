// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(n){var r={};function a(n,r,a,i){return function(n,r,a){if(1===a)return!1;var i=n.w*a/2,x=r.w*a/2,t=n.x+i,e=n.x+n.w-i,o=r.x+x,h=r.x+r.w-x;return o>=t&&o<=e||t>=o&&t<=h}(n,r,a)&&function(n,r,a){if(1===a)return!1;var i=n.h*a/2,x=r.h*a/2,t=n.y+i,e=n.y+n.h-i,o=r.y+x,h=r.y+r.h-x;return o>=t&&o<=e||t>=o&&t<=h}(n,r,i)}function i(n,r,i,x){for(var t,e=0,o=r.length;e<o;e++){var h=r[e];h!==n&&a(n,h,i,x)&&(t=t||[]).push(h)}return t}function x(n,r,a){var x={boxWithMaxOverlappingNeighbours:null},t=0;return n.forEach((function(e){var o=i(e,n,r,a);e._numOverlaps=o?o.length:0,e._overlappingBoxes=o,e._numOverlaps>t&&(t=e._numOverlaps,x.boxWithMaxOverlappingNeighbours=e)})),x}var t=function(n,r,a,i,t){for(n=n.filter((function(n,i){var x=r[n._index];return(Math.abs(x.x-n.x)>2*n.w||Math.abs(x.y-n.y)>3*n.h||n.x<a.minX-3||n.x>a.maxX-n.w+3||n.y<a.minY-3||n.y>a.maxY-n.h+3)&&(n.hidden=!0),!n.hidden}));;){var e=x(n,i,t);if(!e.boxWithMaxOverlappingNeighbours)break;e.boxWithMaxOverlappingNeighbours.hidden=!0;var o=n.indexOf(e.boxWithMaxOverlappingNeighbours);-1!==o&&n.splice(o,1)}};return r.fixLabelsOverlap=function(r,a,x,e,o){var h=e.allowXShift,u=e.allowYShift,f=e.xGap||0,v=e.yGap||0,l=e.xTolerance||0,m=e.yTolerance||0,c={};r.forEach((function(r,a){c[a]=n.mixin({},r),r._index=a}));var y=function(n,r){return{minX:r.l+1,maxX:n.width-r.r,minY:r.t,maxY:n.height-r.b+11}}(a,x);function p(){r.sort((function(n,r){return n.x-r.x})),u&&r.sort((function(n,r){return r.y-n.y}));for(var n=0,a=r.length;n<a;n++){var x=r[n],t=i(x,r,l,m);if(t){for(var e=0,o=t.length;e<o;e++){var c=t[e],p=!!u&&-(c.y+c.h-x.y+v);!1!==p&&c.y+p<y.minY-3&&(p=!1);var g=!!(h&&x.x<c.x)&&x.x+x.w-c.x+f;!1!==g&&c.x+g>y.maxX-c.w+3&&(g=!1);var s=!!(h&&x.x>c.x)&&c.x+c.w-x.x+f;!1!==s&&x.x+s>y.maxX-x.w+3&&(s=!1),!1===p&&!1===g&&!1===s||(p&&!1===g&&!1===s?c.y+=p:!1===p&&g&&!1===s?c.x+=g:!1===p&&!1===g&&s?x.x+=s:p&&g&&!1===s?-p<g?c.y+=p:c.x+=g:p&&!1===g&&s&&(-p<s?c.y+=p:x.x+=s))}return!0}}}r.forEach((function(n){n.x=Math.max(n.x,y.minX),n.x=Math.min(n.x+n.w,y.maxX)-n.w,n.y=Math.max(n.y,y.minY),n.y=Math.min(n.y+n.h,y.maxY)-n.h}));for(var g=0;g<50&&p();g++);t(r,c,y,l,m)},r}));