// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

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
!function(){function t(t,n,o){this.obj=t,this.left=null,this.right=null,this.parent=o,this.dimension=n}function n(n,i,e){var r,l=this;Array.isArray(n)?this.root=function n(o,i,r){var l,u,h=i%e.length;return 0===o.length?null:1===o.length?new t(o[0],h,r):(o.sort((function(t,n){return t[e[h]]-n[e[h]]})),(u=new t(o[l=Math.floor(o.length/2)],h,r)).left=n(o.slice(0,l),i+1,u),u.right=n(o.slice(l+1),i+1,u),u)}(n,0,null):(r=n,l.root=r,function t(n){n.left&&(n.left.parent=n,t(n.left)),n.right&&(n.right.parent=n,t(n.right))}(l.root)),this.toJSON=function(n){n||(n=this.root);var o=new t(n.obj,n.dimension,null);return n.left&&(o.left=l.toJSON(n.left)),n.right&&(o.right=l.toJSON(n.right)),o},this.insert=function(n){var o,i,r=function t(o,i){if(null===o)return i;var r=e[o.dimension];return n[r]<o.obj[r]?t(o.left,o):t(o.right,o)}(this.root,null);null!==r?(o=new t(n,(r.dimension+1)%e.length,r),i=e[r.dimension],n[i]<r.obj[i]?r.left=o:r.right=o):this.root=new t(n,0,null)},this.remove=function(t){var n;null!==(n=function n(o){if(null===o)return null;if(o.obj===t)return o;var i=e[o.dimension];return t[i]<o.obj[i]?n(o.left):n(o.right)}(l.root))&&function t(n){var o,i,r;if(null===n.left&&null===n.right)return null===n.parent?void(l.root=null):(r=e[n.parent.dimension],void(n.obj[r]<n.parent.obj[r]?n.parent.left=null:n.parent.right=null));i=(o=null!==n.left?function t(n,o){var i,r,l,u,h;return null===n?null:(i=e[o],n.dimension===o?null!==n.right?t(n.right,o):n:(r=n.obj[i],l=t(n.left,o),u=t(n.right,o),h=n,null!==l&&l.obj[i]>r&&(h=l),null!==u&&u.obj[i]>h.obj[i]&&(h=u),h))}(n.left,n.dimension):function t(n,o){var i,r,l,u,h;return null===n?null:(i=e[o],n.dimension===o?null!==n.left?t(n.left,o):n:(r=n.obj[i],l=t(n.left,o),u=t(n.right,o),h=n,null!==l&&l.obj[i]<r&&(h=l),null!==u&&u.obj[i]<h.obj[i]&&(h=u),h))}(n.right,n.dimension)).obj,t(o),n.obj=i}(n)},this.nearest=function(t,n,r,u){var h,s,c;if(c=new o((function(t){return-t[1]})),u)for(h=0;h<n;h+=1)c.push([null,u]);for(function o(l){var u,h,s,f,a=e[l.dimension],g=i(t,l.obj),b={};function p(t,o){c.push([t,o]),c.size()>n&&c.pop()}for(f=0;f<e.length;f+=1)f===l.dimension?b[e[f]]=t[e[f]]:b[e[f]]=l.obj[e[f]];h=i(b,l.obj),null!==l.right||null!==l.left?(o(u=null===l.right?l.left:null===l.left?l.right:t[a]<l.obj[a]?l.left:l.right),(c.size()<n||g<c.peek()[1])&&(r&&!r(l.obj)||p(l,g)),(c.size()<n||Math.abs(h)<c.peek()[1])&&null!==(s=u===l.left?l.right:l.left)&&o(s)):(c.size()<n||g<c.peek()[1])&&(r&&!r(l.obj)||p(l,g))}(l.root),s=[],h=0;h<n&&h<c.content.length;h+=1)c.content[h][0]&&s.push([c.content[h][0].obj,c.content[h][1]]);return s},this.balanceFactor=function(){return function t(n){return null===n?0:Math.max(t(n.left),t(n.right))+1}(l.root)/(Math.log(function t(n){return null===n?0:t(n.left)+t(n.right)+1}(l.root))/Math.log(2))}}function o(t){this.content=[],this.scoreFunction=t}o.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),t},peek:function(){return this.content[0]},remove:function(t){for(var n=this.content.length,o=0;o<n;o++)if(this.content[o]==t){var i=this.content.pop();return void(o!=n-1&&(this.content[o]=i,this.scoreFunction(i)<this.scoreFunction(t)?this.bubbleUp(o):this.sinkDown(o)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var n=this.content[t];t>0;){var o=Math.floor((t+1)/2)-1,i=this.content[o];if(!(this.scoreFunction(n)<this.scoreFunction(i)))break;this.content[o]=n,this.content[t]=i,t=o}},sinkDown:function(t){for(var n=this.content.length,o=this.content[t],i=this.scoreFunction(o);;){var e=2*(t+1),r=e-1,l=null;if(r<n){var u=this.content[r],h=this.scoreFunction(u);h<i&&(l=r)}if(e<n){var s=this.content[e];this.scoreFunction(s)<(null==l?i:h)&&(l=e)}if(null==l)break;this.content[t]=this.content[l],this.content[l]=o,t=l}}},this.kdTree=n,"undefined"!=typeof exports&&(exports.kdTree=n,exports.BinaryHeap=o)}();