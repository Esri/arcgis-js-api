/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../has","../extensions","../metadata","../tracking"],(function(e,t,s,r,o,a){"use strict";const i=new Set,n=new Set;function c(e){return s=>{s.prototype.declaredClass=e,r.processPrototypeMetadatas(o.getOwnClassMetadata(s.prototype).properties,e),p(s);const a=[],c=[];let l=s.prototype;for(;l;)l.hasOwnProperty("initialize")&&!i.has(l.initialize)&&(i.add(l.initialize),a.push(l.initialize)),l.hasOwnProperty("destroy")&&!n.has(l.destroy)&&(n.add(l.destroy),c.push(l.destroy)),l=Object.getPrototypeOf(l);i.clear(),n.clear();let d=function(e){function s(...r){var o;if((o=e.call(this,...r)||this).constructor===s&&"function"==typeof o.postscript){if(a.length&&Object.defineProperty(t._assertThisInitialized(o),"initialize",{enumerable:!1,configurable:!0,value(){for(let e=a.length-1;e>=0;e--)a[e].call(this)}}),c.length){let e=!1;Object.defineProperty(t._assertThisInitialized(o),"destroy",{enumerable:!1,configurable:!0,value(){if(!e){e=!0;for(let e=0;e<c.length;e++)c[e].call(this)}}})}o.postscript(...r)}return o}return t._inheritsLoose(s,e),s}(s);return d.__accessorMetadata__=o.getOwnClassMetadata(s.prototype),d.prototype.declaredClass=e,d}}function l(e,t){return null==t.get?function(){const t=this.__accessor__.properties.get(e);if(void 0===t)return;a.trackAccess(t);const s=this.__accessor__.store;return s.has(e)?s.get(e):t.metadata.value}:function(){const t=this.__accessor__.properties.get(e);if(void 0!==t)return t.getComputed()}}function p(e){const t=e.prototype,s=t.declaredClass,a=o.getOwnClassMetadata(t).properties;r.processClassMetadatas(a,s);const i={};for(const r of Object.getOwnPropertyNames(a)){const e=a[r];i[r]={enumerable:!0,configurable:!0,get:l(r,e),set(t){const s=this.__accessor__;if(void 0!==s){if(!Object.isFrozen(this)){if(s.initialized&&e.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${r}' of ${this.declaredClass}`);if(2===s.lifecycle&&e.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${r}' of ${this.declaredClass}`);s.set(r,t)}}else Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:t})}}}Object.defineProperties(e.prototype,i)}e.processClass=p,e.subclass=c,Object.defineProperty(e,"__esModule",{value:!0})}));
