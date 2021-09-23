/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./ArrayPool","./Evented","./lang","./maybe","./ObjectPool","./scheduling","./accessorSupport/ensureType","./accessorSupport/tracking","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass","./accessorSupport/tracking/SimpleObservable"],(function(e,t,s,i,n,r,c,h,o,a,l,f,u){"use strict";var _;const g=new c(function(){function e(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}var t=e.prototype;return t.preventDefault=function(){this.cancellable&&(this.defaultPrevented=!0)},t.reset=function(e){this.defaultPrevented=!1,this.item=e},e}(),void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),m=()=>{};function p(e){return e?e instanceof x?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function b(e){if(e&&e.length)return e[0]}function d(e,t,s,i){const n=Math.min(e.length-s,t.length-i);let r=0;for(;r<n&&e[s+r]===t[i+r];)r++;return r}function v(e,t,s,i){t&&t.forEach(((t,n,r)=>{e.push(t),v(e,s.call(i,t,n,r),s,i)}))}const A=new Set,y=new Set,k=new Set,C=new Map;let E=0,x=_=function(t,i){function c(s){var i;return(i=t.call(this,s)||this)._chgListeners=[],i._notifications=null,i._timer=null,i._observable=new u.SimpleObservable,i.length=0,i._items=[],Object.defineProperty(e._assertThisInitialized(i),"uid",{value:E++}),i}e._inheritsLoose(c,t),c.isCollection=function(e){return null!=e&&e instanceof _};var o=c.prototype;return o.normalizeCtorArgs=function(e){return e?Array.isArray(e)||e instanceof _?{items:e}:e:{}},o[i]=function*(){yield*this.items},o.hasEventListener=function(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)},o.on=function(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=m,s.removed=!0,e.splice(e.indexOf(s),1)}}}return this._emitter.on(e,t)},o.once=function(e,t){const s=this.on(e,t);return{remove(){s.remove()}}},o.add=function(e,t){if(a.trackAccess(this._observable),this._emitBeforeChanges(1))return this;const s=this.getNextIndex(null!=t?t:null);return this._splice(s,0,e),this._emitAfterChanges(1),this},o.addMany=function(e,t=this._items.length){if(a.trackAccess(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(1))return this;const s=this.getNextIndex(t);return this._splice(s,0,...p(e)),this._emitAfterChanges(1),this},o.removeAll=function(){if(a.trackAccess(this._observable),!this.length||this._emitBeforeChanges(2))return[];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(2),e},o.clone=function(){return a.trackAccess(this._observable),this._createNewInstance({items:this._items.map(n.clone)})},o.concat=function(...e){a.trackAccess(this._observable);const t=e.map(p);return this._createNewInstance({items:this._items.concat(...t)})},o.drain=function(e,t){if(a.trackAccess(this._observable),!this.length||this._emitBeforeChanges(2))return;const s=r.assumeNonNull(this._splice(0,this.length)),i=s.length;for(let n=0;n<i;n++)e.call(t,s[n],n,s);this._emitAfterChanges(2)},o.every=function(e,t){return a.trackAccess(this._observable),this._items.every(e,t)},o.filter=function(e,t){let s;return a.trackAccess(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})},o.find=function(e,t){return a.trackAccess(this._observable),this._items.find(e,t)},o.findIndex=function(e,t){return a.trackAccess(this._observable),this._items.findIndex(e,t)},o.flatten=function(e,t){a.trackAccess(this._observable);const s=[];return v(s,this,e,t),new _(s)},o.forEach=function(e,t){return a.trackAccess(this._observable),this._items.forEach(e,t)},o.getItemAt=function(e){return a.trackAccess(this._observable),this._items[e]},o.getNextIndex=function(e){a.trackAccess(this._observable);const t=this.length;return(e=null==e?t:e)<0?e=0:e>t&&(e=t),e},o.includes=function(e,t=0){return a.trackAccess(this._observable),this._items.includes(e,t)},o.indexOf=function(e,t=0){return a.trackAccess(this._observable),this._items.indexOf(e,t)},o.join=function(e=","){return a.trackAccess(this._observable),this._items.join(e)},o.lastIndexOf=function(e,t=this.length-1){return a.trackAccess(this._observable),this._items.lastIndexOf(e,t)},o.map=function(e,t){a.trackAccess(this._observable);const s=this._items.map(e,t);return new _({items:s})},o.reorder=function(e,t=this.length-1){a.trackAccess(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(4))return e;this._splice(s,1),this._splice(t,0,e),this._emitAfterChanges(4)}return e}},o.pop=function(){if(a.trackAccess(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=b(this._splice(this.length-1,1));return this._emitAfterChanges(2),e},o.push=function(...e){return a.trackAccess(this._observable),this._emitBeforeChanges(1)||(this._splice(this.length,0,...e),this._emitAfterChanges(1)),this.length},o.reduce=function(e,t){a.trackAccess(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)},o.reduceRight=function(e,t){a.trackAccess(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)},o.remove=function(e){return a.trackAccess(this._observable),this.removeAt(this.indexOf(e))},o.removeAt=function(e){if(a.trackAccess(this._observable),e<0||e>=this.length||this._emitBeforeChanges(2))return;const t=b(this._splice(e,1));return this._emitAfterChanges(2),t},o.removeMany=function(e){if(a.trackAccess(this._observable),!e||!e.length||this._emitBeforeChanges(2))return[];const t=e instanceof _?e.toArray():e,s=this._items,i=[],n=t.length;for(let r=0;r<n;r++){const e=t[r],n=s.indexOf(e);if(n>-1){const e=1+d(t,s,r+1,n+1),c=this._splice(n,e);c&&c.length>0&&i.push.apply(i,c),r+=e-1}}return this._emitAfterChanges(2),i},o.reverse=function(){if(a.trackAccess(this._observable),this._emitBeforeChanges(4))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,...e)),this._emitAfterChanges(4),this},o.shift=function(){if(a.trackAccess(this._observable),!this.length||this._emitBeforeChanges(2))return;const e=b(this._splice(0,1));return this._emitAfterChanges(2),e},o.slice=function(e=0,t=this.length){return a.trackAccess(this._observable),this._createNewInstance({items:this._items.slice(e,t)})},o.some=function(e,t){return a.trackAccess(this._observable),this._items.some(e,t)},o.sort=function(e){if(a.trackAccess(this._observable),!this.length||this._emitBeforeChanges(4))return this;const t=r.assumeNonNull(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,...t),this._emitAfterChanges(4),this},o.splice=function(e,t,...s){a.trackAccess(this._observable);const i=(t?2:0)|(s.length?1:0);if(this._emitBeforeChanges(i))return[];const n=this._splice(e,t,...s)||[];return this._emitAfterChanges(i),n},o.toArray=function(){return a.trackAccess(this._observable),this._items.slice()},o.toJSON=function(){return a.trackAccess(this._observable),this.toArray()},o.toLocaleString=function(){return a.trackAccess(this._observable),this._items.toLocaleString()},o.toString=function(){return a.trackAccess(this._observable),this._items.toString()},o.unshift=function(...e){return a.trackAccess(this._observable),!e.length||this._emitBeforeChanges(1)||(this._splice(0,0,...e),this._emitAfterChanges(1)),this.length},o._createNewInstance=function(e){return new this.constructor(e)},o._splice=function(e,t,...s){const i=this._items,n=this.constructor.prototype.itemType;let r,c;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=h.schedule((()=>this._dispatchChange()))),t){if(c=i.splice(e,t),this.hasEventListener("before-remove")){const t=g.acquire();t.target=this,t.cancellable=!0;for(let s=0,n=c.length;s<n;s++)r=c[s],t.reset(r),this.emit("before-remove",t),t.defaultPrevented&&(c.splice(s,1),i.splice(e,0,r),e+=1,s-=1,n-=1);g.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=g.acquire();e.target=this,e.cancellable=!1;const t=c.length;for(let s=0;s<t;s++)e.reset(c[s]),this.emit("after-remove",e);g.release(e)}}if(s&&s.length){if(n){const e=[];for(const t of s){const s=n.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),r=this.hasEventListener("after-add"),c=e===this.length;if(t||r){const n=g.acquire();n.target=this,n.cancellable=!0;const h=g.acquire();h.target=this,h.cancellable=!1;for(const o of s)t?(n.reset(o),this.emit("before-add",n),n.defaultPrevented||(c?i.push(o):i.splice(e++,0,o),this._set("length",i.length),r&&(h.reset(o),this.emit("after-add",h)))):(c?i.push(o):i.splice(e++,0,o),this._set("length",i.length),h.reset(o),this.emit("after-add",h));g.release(h),g.release(n)}else{if(c)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length)}}return(s&&s.length||c&&c.length)&&this._notifyChangeEvent(s,c),c},o._emitBeforeChanges=function(e){let t=!1;if(this.hasEventListener("before-changes")){const s=g.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,g.release(s)}return t},o._emitAfterChanges=function(e){if(this.hasEventListener("after-changes")){const t=g.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),g.release(t)}this._observable.notify()},o._notifyChangeEvent=function(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})},o._dispatchChange=function(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;A.clear(),y.clear(),k.clear();for(const{added:t,removed:s}of e){if(t)if(0===k.size&&0===y.size)for(const e of t)A.add(e);else for(const e of t)y.has(e)?(k.add(e),y.delete(e)):k.has(e)||A.add(e);if(s)if(0===k.size&&0===A.size)for(const e of s)y.add(e);else for(const e of s)A.has(e)?A.delete(e):(k.delete(e),y.add(e))}const i=s.acquire();A.forEach((e=>{i.push(e)}));const n=s.acquire();y.forEach((e=>{n.push(e)}));const r=this._items,c=t.items,h=s.acquire();if(k.forEach((e=>{c.indexOf(e)!==r.indexOf(e)&&h.push(e)})),t.listeners&&(i.length||n.length||h.length)){const e={target:this,added:i,removed:n,moved:h},s=t.listeners.length;for(let i=0;i<s;i++){const s=t.listeners[i];s.removed||s.callback.call(this,e)}}s.release(i),s.release(n),s.release(h)}A.clear(),y.clear(),k.clear()},e._createClass(c,[{key:"items",get:function(){return a.trackAccess(this._observable),this._items},set:function(e){this._emitBeforeChanges(1)||(this._splice(0,this.length,...p(e)),this._emitAfterChanges(1))}}]),c}(i.EventedAccessor,Symbol.iterator);return x.ofType=s=>{if(!s)return _;if(C.has(s))return C.get(s);let i=null;if("function"==typeof s)i=s.prototype.declaredClass;else if(s.base)i=s.base.prototype.declaredClass;else for(const e in s.typeMap){const t=s.typeMap[e].prototype.declaredClass;i?i+=` | ${t}`:i=t}let n=function(t){function s(){return t.apply(this,arguments)||this}return e._inheritsLoose(s,t),s}(_);n=t.__decorate([f.subclass(`esri.core.Collection<${i}>`)],n);const r={Type:s,ensureType:"function"==typeof s?o.ensureType(s):o.ensureOneOfType(s)};return Object.defineProperty(n.prototype,"itemType",{value:r}),C.set(s,n),n},t.__decorate([l.property()],x.prototype,"length",void 0),t.__decorate([l.property()],x.prototype,"items",null),x=_=t.__decorate([f.subclass("esri.core.Collection")],x),x}));
