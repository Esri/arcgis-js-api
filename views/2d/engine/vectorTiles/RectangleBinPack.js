/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../webgl/Rect"],(function(e,h){"use strict";return function(){function t(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new h(0,0,e,t))}var i=t.prototype;return i.allocate=function(e,t){if(e>this._width||t>this._height)return new h;let i=null,s=-1;for(let h=0;h<this._free.length;++h){const n=this._free[h];e<=n.width&&t<=n.height&&(null===i||n.y<=i.y&&n.x<=i.x)&&(i=n,s=h)}return null===i?new h:(this._free.splice(s,1),i.width<i.height?(i.width>e&&this._free.push(new h(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new h(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new h(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new h(i.x,i.y+t,e,i.height-t))),new h(i.x,i.y,e,t))},i.release=function(e){for(let h=0;h<this._free.length;++h){const t=this._free[h];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(h,1),this.release(e)}this._free.push(e)},e._createClass(t,[{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}}]),t}()}));
