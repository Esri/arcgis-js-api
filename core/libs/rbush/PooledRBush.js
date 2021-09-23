/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../arrayUtils","../../maybe","../../PooledArray","../../../chunks/quickselect"],(function(t,n,i,e,h,o){"use strict";let s=function(){function t(t=9,n){this.compareMinX=c,this.compareMinY=u,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}var n=t.prototype;return n.destroy=function(){this.clear(),B.prune(),M.prune(),X.prune(),Y.prune()},n.all=function(t){this._all(this.data,t)},n.search=function(t,n){let i=this.data;const e=this.toBBox;if(_(t,i))for(B.clear();i;){for(let h=0,o=i.children.length;h<o;h++){const o=i.children[h],s=i.leaf?e(o):o;_(t,s)&&(i.leaf?n(o):p(t,s)?this._all(o,n):B.push(o))}i=B.pop()}},n.collides=function(t){let n=this.data;const i=this.toBBox;if(!_(t,n))return!1;for(B.clear();n;){for(let e=0,h=n.children.length;e<h;e++){const h=n.children[e],o=n.leaf?i(h):h;if(_(t,o)){if(n.leaf||p(t,o))return!0;B.push(h)}}n=B.pop()}return!1},n.load=function(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,i=t.length;n<i;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},n.insert=function(t){return t&&this._insert(t,this.data.height-1),this},n.clear=function(){return this.data=new v([]),this},n.remove=function(t){if(!t)return this;let n,h=this.data,o=null,s=0,a=!1;const r=this.toBBox(t);for(X.clear(),Y.clear();h||X.length>0;){var l;if(!h)h=e.assumeNonNull(X.pop()),o=X.data[X.length-1],s=null!=(l=Y.pop())?l:0,a=!0;if(h.leaf&&(n=i.indexOf(h.children,t,h.children.length,h.indexHint),-1!==n))return h.children.splice(n,1),X.push(h),this._condense(X),this;a||h.leaf||!p(h,r)?o?(s++,h=o.children[s],a=!1):h=null:(X.push(h),Y.push(s),s=0,o=h,h=h.children[0])}return this},n.toJSON=function(){return this.data},n.fromJSON=function(t){return this.data=t,this},n._all=function(t,n){let i=t;for(M.clear();i;){var e;if(!0===i.leaf)for(const t of i.children)n(t);else M.pushArray(i.children);i=null!=(e=M.pop())?e:null}},n._build=function(t,n,i,e){const h=i-n+1;let o=this._maxEntries;if(h<=o){const e=new v(t.slice(n,i+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/o**(e-1)));const s=new y([]);s.height=e;const r=Math.ceil(h/o),l=r*Math.ceil(Math.sqrt(o));g(t,n,i,l,this.compareMinX);for(let a=n;a<=i;a+=l){const n=Math.min(a+l-1,i);g(t,a,n,r,this.compareMinY);for(let i=a;i<=n;i+=r){const h=Math.min(i+r-1,n);s.children.push(this._build(t,i,h,e-1))}}return a(s,this.toBBox),s},n._chooseSubtree=function(t,n,i,e){for(;e.push(n),!0!==n.leaf&&e.length-1!==i;){let i,e=1/0,h=1/0;for(let o=0,s=n.children.length;o<s;o++){const s=n.children[o],a=f(s),r=d(t,s)-a;r<h?(h=r,e=a<e?a:e,i=s):r===h&&a<e&&(e=a,i=s)}n=i||n.children[0]}return n},n._insert=function(t,n,i){const e=this.toBBox,h=i?t:e(t);X.clear();const o=this._chooseSubtree(h,this.data,n,X);for(o.children.push(t),l(o,h);n>=0&&X.data[n].children.length>this._maxEntries;)this._split(X,n),n--;this._adjustParentBBoxes(h,X,n)},n._split=function(t,n){const i=t.data[n],e=i.children.length,h=this._minEntries;this._chooseSplitAxis(i,h,e);const o=this._chooseSplitIndex(i,h,e);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=i.children.splice(o,i.children.length-o),r=i.leaf?new v(s):new y(s);r.height=i.height,a(i,this.toBBox),a(r,this.toBBox),n?t.data[n-1].children.push(r):this._splitRoot(i,r)},n._splitRoot=function(t,n){this.data=new y([t,n]),this.data.height=t.height+1,a(this.data,this.toBBox)},n._chooseSplitIndex=function(t,n,i){let e,h,o;e=h=1/0;for(let s=n;s<=i-n;s++){const n=r(t,0,s,this.toBBox),a=r(t,s,i,this.toBBox),l=x(n,a),c=f(n)+f(a);l<e?(e=l,o=s,h=c<h?c:h):l===e&&c<h&&(h=c,o=s)}return o},n._chooseSplitAxis=function(t,n,i){const e=t.leaf?this.compareMinX:c,h=t.leaf?this.compareMinY:u;this._allDistMargin(t,n,i,e)<this._allDistMargin(t,n,i,h)&&t.children.sort(e)},n._allDistMargin=function(t,n,i,e){t.children.sort(e);const h=this.toBBox,o=r(t,0,n,h),s=r(t,i-n,i,h);let a=m(o)+m(s);for(let r=n;r<i-n;r++){const n=t.children[r];l(o,t.leaf?h(n):n),a+=m(o)}for(let r=i-n-1;r>=n;r--){const n=t.children[r];l(s,t.leaf?h(n):n),a+=m(s)}return a},n._adjustParentBBoxes=function(t,n,i){for(let e=i;e>=0;e--)l(n.data[e],t)},n._condense=function(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const h=t.data[n-1],o=h.children;o.splice(i.indexOf(o,e,o.length,h.indexHint),1)}else this.clear();else a(e,this.toBBox)}},n._initFormat=function(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")},t}();function a(t,n){r(t,0,t.children.length,n,t)}function r(t,n,i,e,h){h||(h=new v([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let o,s=n;s<i;s++)o=t.children[s],l(h,t.leaf?e(o):o);return h}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function c(t,n){return t.minX-n.minX}function u(t,n){return t.minY-n.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function x(t,n){const i=Math.max(t.minX,n.minX),e=Math.max(t.minY,n.minY),h=Math.min(t.maxX,n.maxX),o=Math.min(t.maxY,n.maxY);return Math.max(0,h-i)*Math.max(0,o-e)}function p(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function _(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function g(t,n,i,h,s){const a=[n,i];for(;a.length;){const n=e.assumeNonNull(a.pop()),i=e.assumeNonNull(a.pop());if(n-i<=h)continue;const r=i+Math.ceil((n-i)/h/2)*h;o.quickselect(t,r,i,n,s),a.push(i,r,r,n)}}const B=new h,M=new h,X=new h,Y=new h({deallocator:void 0});let w=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},b=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).height=1,n.indexHint=new i.PositionHint,n}return n._inheritsLoose(e,t),e}(w),v=function(t){function i(n){var i;return(i=t.call(this)||this).children=n,i.leaf=!0,i}return n._inheritsLoose(i,t),i}(b),y=function(t){function i(n){var i;return(i=t.call(this)||this).children=n,i.leaf=!1,i}return n._inheritsLoose(i,t),i}(b);t.BBox=w,t.PooledRBush=s,t.default=s,Object.defineProperty(t,"__esModule",{value:!0})}));
