// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../ArrayPool","../lang","../ObjectPool","../scheduling","./get","./utils","./wire"],(function(e,r,t,n,o,a,l,u,i){Object.defineProperty(r,"__esModule",{value:!0});var c,s=function(){function e(e,r,t,n){this.target=e,this.path=r,this.oldValue=t,this.callback=n,this.removed=!1,this.propertyPath=u.pathToStringOrArray(r)}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.removed=!0},e.pool=new o(e,!0),e}(),f=new t,d=new Set,v=f.acquire();function h(e){d.has(e)?v.splice(v.indexOf(e),1):d.add(e),v.push(e),c||(c=a.schedule(g))}function p(e){if(!e.removed){var r=e.callback,t=e.path,n=e.propertyPath,o=e.oldValue,a=e.target,u=l.valueOf(a,n,!0);_(t,o,u)&&(e.oldValue=u,r.call(a,u,o,t,a))}}function _(e,r,t){return!n.equals(r,t)}function g(){if(c){c=null;var e=v;v=f.acquire(),d.clear();for(var r=f.acquire(),t=0;t<e.length;t++){p(n=e[t]),n.removed&&r.push(n)}for(t=0;t<v.length;t++){var n;(n=v[t]).removed&&(r.push(n),d.delete(n),v.splice(t,1),t-=1)}for(t=0;t<r.length;t++)s.pool.release(r[t]);f.release(e),f.release(r),m.forEach((function(e){return e()}))}}r.dispatchTarget=function(e){for(var r=f.copy(v),t=0;t<r.length;t++){var n=r[t];n.target===e&&(p(n),d.delete(n),v.splice(v.indexOf(n),1))}},r.removeTarget=function(e){for(var r=0;r<v.length;r++){(t=v[r]).target===e&&(t.removed=!0)}var t},r.dispatch=g;var m=new Set;function y(e,r,t,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?function(e,r,t){var n=u.parse(e,r,t,(function(e,r,t){var o=l.valueOf(e,r,!0),a=!1;return i.wire(e,r,(function(e,r){if(e.__accessor__.destroyed)n.remove();else if(!a){a=!0;var u=l.valueOf(e,r,!0);_(0,o,u)&&t.call(e,u,o,r,e),o=l.valueOf(e,r,!0),a=!1}}))}));return n}(e,r,t):function(e,r,t){var n=u.parse(e,r,t,(function(e,r,t){var o,a=l.valueOf(e,r,!0),c=i.wire(e,r,(function(e,r){e.__accessor__.destroyed?n.remove():(o||(o=s.pool.acquire(e,r,a,t),a=null),h(o))}));return{remove:u.once((function(){c.remove(),o&&(o.removed=!0,h(o),o=null),n=c=a=null}))}}));return n}(e,r,t)}r.afterDispatch=function(e){return m.add(e),{remove:function(){m.delete(e)}}},r.watch=y,r.isValueInUse=function(e){return v.some((function(r){return r.oldValue===e}))},r.default=y}));