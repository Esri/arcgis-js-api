/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./nextTick"],(function(t,i){"use strict";let e=function(){function t(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}var e=t.prototype;return e.get=function(){return 0===this._itemsPtr&&i.nextTick((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]},e.reset=function(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0},e.grow=function(){for(let t=0;t<Math.max(8,Math.min(this._items.length,s));t++)this._items.push(this.allocator())},t}();const s=1024;t.ObjectStack=e,Object.defineProperty(t,"__esModule",{value:!0})}));
