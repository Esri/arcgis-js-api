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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

/**
 * k-d Tree JavaScript - V 1.0
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

!function(){function t(t,n,o){this.obj=t,this.left=null,this.right=null,this.parent=o,this.dimension=n}function n(n,i,e){function r(n,o,i){var l,u,h=o%e.length;return 0===n.length?null:1===n.length?new t(n[0],h,i):(n.sort(function(t,n){return t[e[h]]-n[e[h]]}),l=Math.floor(n.length/2),u=new t(n[l],h,i),u.left=r(n.slice(0,l),o+1,u),u.right=r(n.slice(l+1),o+1,u),u)}var l=this;Array.isArray(n)?this.root=r(n,0,null):function(t){function n(t){t.left&&(t.left.parent=t,n(t.left)),t.right&&(t.right.parent=t,n(t.right))}l.root=t,n(l.root)}(n),this.toJSON=function(n){n||(n=this.root);var o=new t(n.obj,n.dimension,null);return n.left&&(o.left=l.toJSON(n.left)),n.right&&(o.right=l.toJSON(n.right)),o},this.insert=function(n){function o(t,i){if(null===t)return i;var r=e[t.dimension];return n[r]<t.obj[r]?o(t.left,t):o(t.right,t)}var i,r,l=o(this.root,null);if(null===l)return void(this.root=new t(n,0,null));i=new t(n,(l.dimension+1)%e.length,l),r=e[l.dimension],n[r]<l.obj[r]?l.left=i:l.right=i},this.remove=function(t){function n(o){if(null===o)return null;if(o.obj===t)return o;var i=e[o.dimension];return t[i]<o.obj[i]?n(o.left,o):n(o.right,o)}function o(t){function n(t,o){var i,r,l,u,h;return null===t?null:(i=e[o],t.dimension===o?null!==t.right?n(t.right,o):t:(r=t.obj[i],l=n(t.left,o),u=n(t.right,o),h=t,null!==l&&l.obj[i]>r&&(h=l),null!==u&&u.obj[i]>h.obj[i]&&(h=u),h))}function i(t,n){var o,r,l,u,h;return null===t?null:(o=e[n],t.dimension===n?null!==t.left?i(t.left,n):t:(r=t.obj[o],l=i(t.left,n),u=i(t.right,n),h=t,null!==l&&l.obj[o]<r&&(h=l),null!==u&&u.obj[o]<h.obj[o]&&(h=u),h))}var r,u,h;if(null===t.left&&null===t.right)return null===t.parent?void(l.root=null):(h=e[t.parent.dimension],void(t.obj[h]<t.parent.obj[h]?t.parent.left=null:t.parent.right=null));r=null!==t.left?n(t.left,t.dimension):i(t.right,t.dimension),u=r.obj,o(r),t.obj=u}var i;null!==(i=n(l.root))&&o(i)},this.nearest=function(t,n,r,u){function h(o){function l(t,o){c.push([t,o]),c.size()>n&&c.pop()}var u,s,f,a,g=e[o.dimension],b=i(t,o.obj),p={};for(a=0;a<e.length;a+=1)a===o.dimension?p[e[a]]=t[e[a]]:p[e[a]]=o.obj[e[a]];if(s=i(p,o.obj),null===o.right&&null===o.left)return void((c.size()<n||b<c.peek()[1])&&(r&&!r(o.obj)||l(o,b)));u=null===o.right?o.left:null===o.left?o.right:t[g]<o.obj[g]?o.left:o.right,h(u),(c.size()<n||b<c.peek()[1])&&(r&&!r(o.obj)||l(o,b)),(c.size()<n||Math.abs(s)<c.peek()[1])&&null!==(f=u===o.left?o.right:o.left)&&h(f)}var s,f,c;if(c=new o(function(t){return-t[1]}),u)for(s=0;s<n;s+=1)c.push([null,u]);for(h(l.root),f=[],s=0;s<n&&s<c.content.length;s+=1)c.content[s][0]&&f.push([c.content[s][0].obj,c.content[s][1]]);return f},this.balanceFactor=function(){function t(n){return null===n?0:Math.max(t(n.left),t(n.right))+1}function n(t){return null===t?0:n(t.left)+n(t.right)+1}return t(l.root)/(Math.log(n(l.root))/Math.log(2))}}function o(t){this.content=[],this.scoreFunction=t}o.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},peek:function(){return this.content[0]},remove:function(t){for(var n=this.content.length,o=0;o<n;o++)if(this.content[o]==t){var i=this.content.pop();return void(o!=n-1&&(this.content[o]=i,this.scoreFunction(i)<this.scoreFunction(t)?this.bubbleUp(o):this.sinkDown(o)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t];t>0;){var o=Math.floor((t+1)/2)-1,i=this.content[o];if(!(this.scoreFunction(n)<this.scoreFunction(i)))break;this.content[o]=n,this.content[t]=i,t=o}},sinkDown:function(t){for(var n=this.content.length,o=this.content[t],i=this.scoreFunction(o);;){var e=2*(t+1),r=e-1,l=null;if(r<n){var u=this.content[r],h=this.scoreFunction(u);h<i&&(l=r)}if(e<n){var s=this.content[e];this.scoreFunction(s)<(null==l?i:h)&&(l=e)}if(null==l)break;this.content[t]=this.content[l],this.content[l]=o,t=l}}},this.kdTree=n,"undefined"!=typeof exports&&(exports.kdTree=n,exports.BinaryHeap=o)}();