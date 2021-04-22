/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Logger","./accessorSupport/decorators/subclass","./accessorSupport/tracking","./accessorSupport/tracking/SimpleTrackingTarget","./Accessor"],(function(t,e,s,n,a,c,r,i){"use strict";const o=t=>{let c=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).asyncUpdateState=new Map,e}e._inheritsLoose(s,t);var a=s.prototype;return a.autoUpdateAsync=function(t,e){return u((e=>this.updateAsync(t,e)),e)},a.updateAsync=async function(t,e){if(!this.startAsyncUpdate(t)){try{const s=await e();this._set(t,s)}catch(s){n.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`)}this.endAsyncUpdate(t)&&this.updateAsync(t,e)}},a.startAsyncUpdate=function(t){var e;const s=null!=(e=this.asyncUpdateState.get(t))?e:0;return 1&s?(this.asyncUpdateState.set(t,2|s),!0):(this.asyncUpdateState.set(t,1|s),!1)},a.endAsyncUpdate=function(t){var e;const s=-2&(null!=(e=this.asyncUpdateState.get(t))?e:0);return 2&s?(this.asyncUpdateState.set(t,-3&s),!0):(this.asyncUpdateState.set(t,s),!1)},s}(t);return c=s.__decorate([a.subclass("esri.core.AsyncUpdate")],c),c};function u(t,e){const s=()=>{i&&!o&&t(n)},n=()=>{if(!i||o)return e();i.clear(),o=!0;const t=c.runTracked(i,e);return o=!1,t},a=()=>{i&&(i.destroy(),i=null)};let i=new r.SimpleTrackingTarget(s),o=!1;return t(n),{remove:a}}t.AsyncUpdate=function(t){function s(){return t.apply(this,arguments)||this}return e._inheritsLoose(s,t),s}(o(i)),t.AsyncUpdate=s.__decorate([a.subclass("esri.core.AsyncUpdate")],t.AsyncUpdate),t.AsyncUpdateMixin=o,Object.defineProperty(t,"__esModule",{value:!0})}));
