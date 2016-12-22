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

!function(){function t(t,n,o){this.obj=t,this.left=null,this.right=null,this.parent=o,this.dimension=n}function n(n,i,e){function r(n,o,i){var l,u,h=o%e.length;return 0===n.length?null:1===n.length?new t(n[0],h,i):(n.sort(function(t,n){return t[e[h]]-n[e[h]]}),l=Math.floor(n.length/2),u=new t(n[l],h,i),u.left=r(n.slice(0,l),o+1,u),u.right=r(n.slice(l+1),o+1,u),u)}function l(t){function n(t){t.left&&(t.left.parent=t,n(t.left)),t.right&&(t.right.parent=t,n(t.right))}u.root=t,n(u.root)}var u=this;Array.isArray(n)?this.root=r(n,0,null):l(n,i,e),this.toJSON=function(n){n||(n=this.root);var o=new t(n.obj,n.dimension,null);return n.left&&(o.left=u.toJSON(n.left)),n.right&&(o.right=u.toJSON(n.right)),o},this.insert=function(n){function o(t,i){if(null===t)return i;var r=e[t.dimension];return n[r]<t.obj[r]?o(t.left,t):o(t.right,t)}var i,r,l=o(this.root,null);return null===l?void(this.root=new t(n,0,null)):(i=new t(n,(l.dimension+1)%e.length,l),r=e[l.dimension],void(n[r]<l.obj[r]?l.left=i:l.right=i))},this.remove=function(t){function n(o){if(null===o)return null;if(o.obj===t)return o;var i=e[o.dimension];return t[i]<o.obj[i]?n(o.left,o):n(o.right,o)}function o(t){function n(t,o){var i,r,l,u,h;return null===t?null:(i=e[o],t.dimension===o?null!==t.right?n(t.right,o):t:(r=t.obj[i],l=n(t.left,o),u=n(t.right,o),h=t,null!==l&&l.obj[i]>r&&(h=l),null!==u&&u.obj[i]>h.obj[i]&&(h=u),h))}function i(t,n){var o,r,l,u,h;return null===t?null:(o=e[n],t.dimension===n?null!==t.left?i(t.left,n):t:(r=t.obj[o],l=i(t.left,n),u=i(t.right,n),h=t,null!==l&&l.obj[o]<r&&(h=l),null!==u&&u.obj[o]<h.obj[o]&&(h=u),h))}var r,l,h;return null===t.left&&null===t.right?null===t.parent?void(u.root=null):(h=e[t.parent.dimension],void(t.obj[h]<t.parent.obj[h]?t.parent.left=null:t.parent.right=null)):(r=null!==t.left?n(t.left,t.dimension):i(t.right,t.dimension),l=r.obj,o(r),void(t.obj=l))}var i;i=n(u.root),null!==i&&o(i)},this.nearest=function(t,n,r,l){function h(o){function l(t,o){f.push([t,o]),f.size()>n&&f.pop()}var u,s,c,a,g=e[o.dimension],b=i(t,o.obj),p={};for(a=0;a<e.length;a+=1)a===o.dimension?p[e[a]]=t[e[a]]:p[e[a]]=o.obj[e[a]];return s=i(p,o.obj),null===o.right&&null===o.left?void((f.size()<n||b<f.peek()[1])&&(!r||r(o.obj))&&l(o,b)):(u=null===o.right?o.left:null===o.left?o.right:t[g]<o.obj[g]?o.left:o.right,h(u),(f.size()<n||b<f.peek()[1])&&(!r||r(o.obj))&&l(o,b),void((f.size()<n||Math.abs(s)<f.peek()[1])&&(c=u===o.left?o.right:o.left,null!==c&&h(c))))}var s,c,f;if(f=new o(function(t){return-t[1]}),l)for(s=0;n>s;s+=1)f.push([null,l]);for(h(u.root),c=[],s=0;n>s&&s<f.content.length;s+=1)f.content[s][0]&&c.push([f.content[s][0].obj,f.content[s][1]]);return c},this.balanceFactor=function(){function t(n){return null===n?0:Math.max(t(n.left),t(n.right))+1}function n(t){return null===t?0:n(t.left)+n(t.right)+1}return t(u.root)/(Math.log(n(u.root))/Math.log(2))}}function o(t){this.content=[],this.scoreFunction=t}o.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},peek:function(){return this.content[0]},remove:function(t){for(var n=this.content.length,o=0;n>o;o++)if(this.content[o]==t){var i=this.content.pop();return void(o!=n-1&&(this.content[o]=i,this.scoreFunction(i)<this.scoreFunction(t)?this.bubbleUp(o):this.sinkDown(o)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t];t>0;){var o=Math.floor((t+1)/2)-1,i=this.content[o];if(!(this.scoreFunction(n)<this.scoreFunction(i)))break;this.content[o]=n,this.content[t]=i,t=o}},sinkDown:function(t){for(var n=this.content.length,o=this.content[t],i=this.scoreFunction(o);;){var e=2*(t+1),r=e-1,l=null;if(n>r){var u=this.content[r],h=this.scoreFunction(u);i>h&&(l=r)}if(n>e){var s=this.content[e],c=this.scoreFunction(s);(null==l?i:h)>c&&(l=e)}if(null==l)break;this.content[t]=this.content[l],this.content[l]=o,t=l}}},this.kdTree=n,"undefined"!=typeof exports&&(exports.kdTree=n,exports.BinaryHeap=o)}();