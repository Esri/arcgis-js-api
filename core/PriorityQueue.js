/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";let n=function(){function n(t=e){this._data=[],this._compare=t}var u=n.prototype;return u.enqueue=function(t){if(null==t)return;const{_data:n,_compare:e}=this;n.push(t);let u=n.length-1>>>0;const l=n[u];for(;u>0;){const t=u-1>>1,r=n[t];if(!(e(r,l)<=0))break;n[t]=l,n[u]=r,u=t}},u.dequeue=function(){const{_data:t,_compare:n}=this,e=t[0],u=t.pop();if(0===t.length)return e;t[0]=u;let l=0;const r=t.length,o=t[0];let s,c,i=null;for(;;){const e=2*l+1,u=2*l+2;if(i=null,e<r&&(s=t[e],n(s,o)>0&&(i=e)),u<r&&(c=t[u],(null===i&&n(c,o)<=0||null!==i&&n(c,s)<=0)&&(i=u)),null===i)break;t[l]=t[i],t[i]=o,l=i}return e},t._createClass(n,[{key:"size",get:function(){return this._data.length}}]),n}();const e=(t,n)=>t<n?-1:t>n?1:0;return n}));
