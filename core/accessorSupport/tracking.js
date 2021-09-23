/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../has","../Logger","./utils"],(function(e,t,n,r){"use strict";let o,c=[];const s=n.getLogger("esri.core.Accessor");function i(){c=[]}function l(e){void 0!==o&&o.onObservableAccessed(e)}let a=!1,f=!1;function u(e,t,n){if(a)return g(e,t,n);d(e);const r=t.call(n);return p(),r}function g(e,t,n){const r=a;a=!0,d(e);let o=null;try{o=t.call(n)}catch(c){f&&s.error(c)}return p(),a=r,o}function d(e){o=e,c.push(e)}function p(){const e=c.pop();o=c.length>0?c[c.length-1]:void 0,void 0!==e&&e.onTrackingEnd()}function h(e,t){if(32&t.flags)return;const n=f;f=!1,64&t.flags?g(t,t.metadata.get,e):A(e,t),f=n}const y=[];function A(e,t){128&t.flags||(t.flags|=128,g(t,(()=>{const n=t.metadata.dependsOn||y;for(const t of n)if("string"==typeof t&&-1===t.indexOf("."))v(e,t,!1);else{const n=r.pathToArray(t);for(let t=0,r=e;t<n.length&&null!=r&&"object"==typeof r;++t)r=v(r,n[t],t!==n.length-1)}})),t.flags&=-129)}function v(e,t,n){const o="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(o,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const c=r.getProperties(e),s=null==c?void 0:c.properties.get(o);return s&&(l(s),h(e,s)),n?e[o]:void 0}e.initializeDependencyTracking=h,e.resetGlobalTarget=i,e.runTracked=u,e.runTrackedNoThrow=g,e.trackAccess=l,e.trackExplicitDependencies=A,Object.defineProperty(e,"__esModule",{value:!0})}));
