/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/Collection","../../core/accessorSupport/trackingUtils"],(function(e,r,t){"use strict";const n=new r,o=new WeakMap;function s(e){c(e)&&n.push(e)}function i(e){c(e)&&n.includes(e)&&n.remove(e)}function c(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function f(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:f(r,e%r):0}let a=0,l=0;function u(){const e=Date.now();for(const t of n)if(t.refreshInterval){var r;e-(null!=(r=o.get(t))?r:0)+5>=6e4*t.refreshInterval&&(o.set(t,e),t.refresh(e))}}t.autorun((()=>{const e=Date.now();let r=0;for(const t of n)r=f(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?o.get(t)||o.set(t,e):o.delete(t);if(r!==l){if(l=r,clearInterval(a),0===l)return void(a=0);a=setInterval(u,l)}}));const h={get hasRefreshTimer(){return a>0},get tickInterval(){return l},forceRefresh(){u()},hasLayer:e=>c(e)&&n.includes(e),clear(){for(const e of n)o.delete(e);n.removeAll()}};e.registerLayer=s,e.test=h,e.unregisterLayer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
