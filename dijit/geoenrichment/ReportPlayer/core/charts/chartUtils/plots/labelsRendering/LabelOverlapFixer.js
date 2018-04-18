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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(n){function r(n,r,a){if(1===a)return!1;var i=n.w*a/2,e=r.w*a/2,x=n.x+i,t=n.x+n.w-i,o=r.x+e,h=r.x+r.w-e;return o>=x&&o<=t||x>=o&&x<=h}function a(n,r,a){if(1===a)return!1;var i=n.h*a/2,e=r.h*a/2,x=n.y+i,t=n.y+n.h-i,o=r.y+e,h=r.y+r.h-e;return o>=x&&o<=t||x>=o&&x<=h}function i(n,i,e,x){return r(n,i,e)&&a(n,i,x)}function e(n,r,a,e){for(var x,t=0,o=r.length;t<o;t++){var h=r[t];h!==n&&i(n,h,a,e)&&(x=x||[],x.push(h))}return x}function x(n,r,a){var i={boxWithMaxOverlappingNeighbours:null},x=0;return n.forEach(function(t){var o=e(t,n,r,a);t._numOverlaps=o?o.length:0,t._overlappingBoxes=o,t._numOverlaps>x&&(x=t._numOverlaps,i.boxWithMaxOverlappingNeighbours=t)}),i}function t(n,r){return{minX:r.l+1,maxX:n.width-r.r,minY:r.t,maxY:n.height-r.b+11}}var o={},h=3,u={hideIncorrectLabels:function(n,r,a,i,e){for(n=n.filter(function(n,i){var e=r[n._index];return(Math.abs(e.x-n.x)>2*n.w||Math.abs(e.y-n.y)>3*n.h||n.x<a.minX-h||n.x>a.maxX-n.w+h||n.y<a.minY-h||n.y>a.maxY-n.h+h)&&(n.hidden=!0),!n.hidden});;){var t=x(n,i,e);if(!t.boxWithMaxOverlappingNeighbours)break;t.boxWithMaxOverlappingNeighbours.hidden=!0,n.splice(n.indexOf(t.boxWithMaxOverlappingNeighbours),1)}}};return o.fixLabelsOverlap=function(r,a,i,x,o){var f=x.allowXShift,l=x.allowYShift,v=x.xGap||0,c=x.yGap||0,m=x.xTolerance||0,y=x.yTolerance||0,p={};r.forEach(function(r,a){p[a]=n.mixin({},r),r._index=a});var s=t(a,i);r.forEach(function(n){n.x=Math.max(n.x,s.minX),n.x=Math.min(n.x+n.w,s.maxX)-n.w,n.y=Math.max(n.y,s.minY),n.y=Math.min(n.y+n.h,s.maxY)-n.h});for(var b=0;b<50&&function(){r.sort(function(n,r){return n.x-r.x}),l&&r.sort(function(n,r){return r.y-n.y});for(var n=0,a=r.length;n<a;n++){var i=r[n],x=e(i,r,m,y);if(x){for(var t=0,o=x.length;t<o;t++){var u=x[t],p=!!l&&-(u.y+u.h-i.y+c);!1!==p&&u.y+p<s.minY-h&&(p=!1);var b=!!(f&&i.x<u.x)&&i.x+i.w-u.x+v;!1!==b&&u.x+b>s.maxX-u.w+h&&(b=!1);var g=!!(f&&i.x>u.x)&&u.x+u.w-i.x+v;!1!==g&&i.x+g>s.maxX-i.w+h&&(g=!1),!1===p&&!1===b&&!1===g||(p&&!1===b&&!1===g?u.y+=p:!1===p&&b&&!1===g?u.x+=b:!1===p&&!1===b&&g?i.x+=g:p&&b&&!1===g?-p<b?u.y+=p:u.x+=b:p&&!1===b&&g&&(-p<g?u.y+=p:i.x+=g))}return!0}}}();b++);u.hideIncorrectLabels(r,p,s,m,y)},o});