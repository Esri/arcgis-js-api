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

/******************************************************************************
 rtree.js - General-Purpose Non-Recursive Javascript R-Tree Library
 Version 0.6.2, December 5st 2009
 Copyright (c) 2009 Jon-Carlos Rivera
 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 Jon-Carlos Rivera - imbcmdth@hotmail.com
 ******************************************************************************/

var RTree=function(e){var n=3,t=6;isNaN(e)||(n=Math.floor(e/2),t=e),this.min_width=n,this.max_width=t;var r={x:0,y:0,w:0,h:0,id:"root",nodes:[]},a=(function(){var e={};return function(n){var t=0;return n in e?t=e[n]++:e[n]=0,n+"_"+t}}(),function(e,t,r){var a=[],h=[],s=[],i=1;if(!e||!RTree.Rectangle.overlap_rectangle(e,r))return s;var o={x:e.x,y:e.y,w:e.w,h:e.h,target:t};h.push(r.nodes.length),a.push(r);do{var l=a.pop(),c=h.pop()-1;if("target"in o)for(;c>=0;){var x=l.nodes[c];if(RTree.Rectangle.overlap_rectangle(o,x)){if(o.target&&"leaf"in x&&x.leaf===o.target||!o.target&&("leaf"in x||RTree.Rectangle.contains_rectangle(x,o))){"nodes"in x?(s=g(x,!0,[],x),l.nodes.splice(c,1)):s=l.nodes.splice(c,1),RTree.Rectangle.make_MBR(l.nodes,l),delete o.target,l.nodes.length<n&&(o.nodes=g(l,!0,[],l));break}"nodes"in x&&(i+=1,h.push(c),a.push(l),l=x,c=x.nodes.length)}c-=1}else if("nodes"in o){l.nodes.splice(c+1,1),l.nodes.length>0&&RTree.Rectangle.make_MBR(l.nodes,l);for(var d=0;d<o.nodes.length;d++)u(o.nodes[d],l);o.nodes.length=0,0===a.length&&l.nodes.length<=1?(o.nodes=g(l,!0,o.nodes,l),l.nodes.length=0,a.push(l),h.push(1)):a.length>0&&l.nodes.length<n?(o.nodes=g(l,!0,o.nodes,l),l.nodes.length=0):delete o.nodes}else RTree.Rectangle.make_MBR(l.nodes,l);i-=1}while(a.length>0);return s}),h=function(e,n){var t,r=-1,a=[];a.push(n);var h=n.nodes;do{-1!==r&&(a.push(h[r]),h=h[r].nodes,r=-1);for(var s=h.length-1;s>=0;s--){var i=h[s];if("leaf"in i){r=-1;break}var o=RTree.Rectangle.squarified_ratio(i.w,i.h,i.nodes.length+1),l=Math.max(i.x+i.w,e.x+e.w)-Math.min(i.x,e.x),g=Math.max(i.y+i.h,e.y+e.h)-Math.min(i.y,e.y),u=RTree.Rectangle.squarified_ratio(l,g,i.nodes.length+2);(0>r||Math.abs(u-o)<t)&&(t=Math.abs(u-o),r=s)}}while(-1!==r);return a},s=function(e){for(var n=o(e);e.length>0;)i(e,n[0],n[1]);return n},i=function(e,t,r){for(var a,h,s,i=RTree.Rectangle.squarified_ratio(t.w,t.h,t.nodes.length+1),o=RTree.Rectangle.squarified_ratio(r.w,r.h,r.nodes.length+1),l=e.length-1;l>=0;l--){var g=e[l],u={};u.x=Math.min(t.x,g.x),u.y=Math.min(t.y,g.y),u.w=Math.max(t.x+t.w,g.x+g.w)-u.x,u.h=Math.max(t.y+t.h,g.y+g.h)-u.y;var c=Math.abs(RTree.Rectangle.squarified_ratio(u.w,u.h,t.nodes.length+2)-i),x={};x.x=Math.min(r.x,g.x),x.y=Math.min(r.y,g.y),x.w=Math.max(r.x+r.w,g.x+g.w)-x.x,x.h=Math.max(r.y+r.h,g.y+g.h)-x.y;var d=Math.abs(RTree.Rectangle.squarified_ratio(x.w,x.h,r.nodes.length+2)-o);(!h||!a||Math.abs(d-c)<a)&&(h=l,a=Math.abs(d-c),s=c>d?r:t)}var y=e.splice(h,1)[0];t.nodes.length+e.length+1<=n?(t.nodes.push(y),RTree.Rectangle.expand_rectangle(t,y)):r.nodes.length+e.length+1<=n?(r.nodes.push(y),RTree.Rectangle.expand_rectangle(r,y)):(s.nodes.push(y),RTree.Rectangle.expand_rectangle(s,y))},o=function(e){for(var n,t,r=e.length-1,a=0,h=e.length-1,s=0,i=e.length-2;i>=0;i--){var o=e[i];o.x>e[a].x?a=i:o.x+o.w<e[r].x+e[r].w&&(r=i),o.y>e[s].y?s=i:o.y+o.h<e[h].y+e[h].h&&(h=i)}var l=Math.abs(e[r].x+e[r].w-e[a].x),g=Math.abs(e[h].y+e[h].h-e[s].y);return l>g?r>a?(n=e.splice(r,1)[0],t=e.splice(a,1)[0]):(t=e.splice(a,1)[0],n=e.splice(r,1)[0]):h>s?(n=e.splice(h,1)[0],t=e.splice(s,1)[0]):(t=e.splice(s,1)[0],n=e.splice(h,1)[0]),[{x:n.x,y:n.y,w:n.w,h:n.h,nodes:[n]},{x:t.x,y:t.y,w:t.w,h:t.h,nodes:[t]}]},l=function(e,n){return e.nodes=n.nodes,e.x=n.x,e.y=n.y,e.w=n.w,e.h=n.h,e},g=function(e,n,t,r){var a=[];if(!RTree.Rectangle.overlap_rectangle(e,r))return t;a.push(r.nodes);do for(var h=a.pop(),s=h.length-1;s>=0;s--){var i=h[s];RTree.Rectangle.overlap_rectangle(e,i)&&("nodes"in i?a.push(i.nodes):"leaf"in i&&(n?t.push(i):t.push(i.leaf)))}while(a.length>0);return t},u=function(e,n){var r;if(0===n.nodes.length)return n.x=e.x,n.y=e.y,n.w=e.w,n.h=e.h,void n.nodes.push(e);var a=h(e,n),i=e;do{if(r&&"nodes"in r&&0===r.nodes.length){var o=r;r=a.pop();for(var l=0;l<r.nodes.length;l++)if(r.nodes[l]===o||0===r.nodes[l].nodes.length){r.nodes.splice(l,1);break}}else r=a.pop();if("leaf"in i||"nodes"in i||Array.isArray(i)){if(Array.isArray(i)){for(var g=0;g<i.length;g++)RTree.Rectangle.expand_rectangle(r,i[g]);r.nodes=r.nodes.concat(i)}else RTree.Rectangle.expand_rectangle(r,i),r.nodes.push(i);if(r.nodes.length<=t)i={x:r.x,y:r.y,w:r.w,h:r.h};else{var u=s(r.nodes);i=u,a.length<1&&(r.nodes.push(u[0]),a.push(r),i=u[1])}}else RTree.Rectangle.expand_rectangle(r,i),i={x:r.x,y:r.y,w:r.w,h:r.h}}while(a.length>0)};this.serialize=function(){return JSON.stringify(r)},this.deserialize=function(e,n){return n=n||r,l(n,e),n},this.search=function(e,n){var t=[e,!!n,[],r];if(void 0===e)throw"Wrong number of arguments. RT.Search requires at least a bounding rectangle.";var a=g.apply(this,t);return a},this.remove=function(e,n){var t=Array.prototype.slice.call(arguments);if(1===t.length&&t.push(!1),t.push(r),n===!1){var h=0,s=[];do h=s.length,s=s.concat(a.apply(this,t));while(h!==s.length);return s}return a.apply(this,t)},this.insert=function(e,n){if(arguments.length<2)throw"Wrong number of arguments. RT.Insert requires at least a bounding rectangle and an object.";var t={x:e.x,y:e.y,w:e.w,h:e.h,leaf:n};return u(t,r),r}};RTree.Rectangle=function(e,n,t,r){var a,h,s,i,o,l;e.x?(a=e.x,s=e.y,0!==e.w&&!e.w&&e.x2?(o=e.x2-e.x,l=e.y2-e.y):(o=e.w,l=e.h),h=a+o,i=s+l):(a=e,s=n,o=t,l=r,h=a+o,i=s+l),this.x1=this.x=function(){return a},this.y1=this.y=function(){return s},this.x2=function(){return h},this.y2=function(){return i},this.w=function(){return o},this.h=function(){return l},this.toJSON=function(){return'{"x":'+a.toString()+', "y":'+s.toString()+', "w":'+o.toString()+', "h":'+l.toString()+"}"},this.overlap=function(e){return this.x()<e.x2()&&this.x2()>e.x()&&this.y()<e.y2()&&this.y2()>e.y()},this.expand=function(e){var n=Math.min(this.x(),e.x()),t=Math.min(this.y(),e.y());return o=Math.max(this.x2(),e.x2())-n,l=Math.max(this.y2(),e.y2())-t,a=n,s=t,this},this.setRect=function(e,n,t,r){var a,h,s,i,o,l;e.x?(a=e.x,s=e.y,0!==e.w&&!e.w&&e.x2?(o=e.x2-e.x,l=e.y2-e.y):(o=e.w,l=e.h),h=a+o,i=s+l):(a=e,s=n,o=t,l=r,h=a+o,i=s+l)}},RTree.Rectangle.overlap_rectangle=function(e,n){return e.x<n.x+n.w&&e.x+e.w>n.x&&e.y<n.y+n.h&&e.y+e.h>n.y},RTree.Rectangle.contains_rectangle=function(e,n){return e.x+e.w<=n.x+n.w&&e.x>=n.x&&e.y+e.h<=n.y+n.h&&e.y>=n.y},RTree.Rectangle.expand_rectangle=function(e,n){var t,r;return t=e.x<n.x?e.x:n.x,r=e.y<n.y?e.y:n.y,e.x+e.w>n.x+n.w?e.w=e.x+e.w-t:e.w=n.x+n.w-t,e.y+e.h>n.y+n.h?e.h=e.y+e.h-r:e.h=n.y+n.h-r,e.x=t,e.y=r,e},RTree.Rectangle.make_MBR=function(e,n){if(e.length<1)return{x:0,y:0,w:0,h:0};n?(n.x=e[0].x,n.y=e[0].y,n.w=e[0].w,n.h=e[0].h):n={x:e[0].x,y:e[0].y,w:e[0].w,h:e[0].h};for(var t=e.length-1;t>0;t--)RTree.Rectangle.expand_rectangle(n,e[t]);return n},RTree.Rectangle.squarified_ratio=function(e,n,t){var r=(e+n)/2,a=e*n,h=a/(r*r);return a*t/h};