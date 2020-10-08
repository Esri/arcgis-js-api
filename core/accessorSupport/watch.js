// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","./get","./utils","./wire"],(function(e,t,r,a,n,o,i,u,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValueInUse=t.watch=t.afterDispatch=t.dispatch=t.removeTarget=t.dispatchTarget=void 0;var c,s=function(){function e(){this.uid=0,this.target=null,this.path=null,this.oldValue=null,this.callback=null,this.removed=!1,this.propertyPath=null}return e.prototype.acquire=function(t,r,a,n){this.target=t,this.path=r,this.oldValue=a,this.callback=n,this.propertyPath=u.pathToStringOrArray(r),this.uid=++e.uid,this.removed=!1},e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++e.uid,this.removed=!0},e.pool=new n.ReentrantObjectPool(e),e.uid=0,e}(),d=new r,h=new Set,f=d.acquire();function v(e){h.has(e)?f.splice(f.indexOf(e),1):h.add(e),f.push(e),c||(c=o.schedule(m))}function p(e){if(!e.removed){var t=e.callback,r=e.path,a=e.propertyPath,n=e.oldValue,o=e.target,u=i.valueOf(o,a,!0);g(n,u)&&(e.oldValue=u,t.call(o,u,n,r,o))}}function g(e,t){return!a.equals(e,t)}function m(){for(var e=10;c&&e--;){c=null;var t=f;f=d.acquire(),h.clear();for(var r=d.acquire(),a=0,n=t;a<n.length;a++){var o=(u=n[a]).uid;p(u),o===u.uid&&u.removed&&r.push(u)}for(var i=0;i<f.length;i++){var u;(u=f[i]).removed&&(r.push(u),h.delete(u),f.splice(i,1),i-=1)}for(i=0;i<r.length;i++)s.pool.release(r[i]);d.release(t),d.release(r),_.forEach((function(e){return e()}))}}t.dispatchTarget=function(e){for(var t=d.copy(f),r=0;r<t.length;r++){var a=t[r];a.target===e&&(p(a),h.delete(a),f.splice(f.indexOf(a),1))}},t.removeTarget=function(e){for(var t=0;t<f.length;t++){(r=f[t]).target===e&&(r.removed=!0)}var r},t.dispatch=m;var _=new Set;function y(e,t,r,a){return void 0===a&&(a=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:a?function(e,t,r){var a=u.parse(e,t,r,(function(e,t,r){var n=i.valueOf(e,t,!0),o=!1;return l.wire(e,t,(function(e,t){if(e&&!e.__accessor__.destroyed){if(!o&&t){o=!0;var u=i.valueOf(e,t,!0);g(n,u)&&r.call(e,u,n,t,e),n=i.valueOf(e,t,!0),o=!1}}else a.remove()}))}));return a}(e,t,r):function(e,t,r){var a=u.parse(e,t,r,(function(e,t,r){var n,o,c=i.valueOf(e,t,!0),d=l.wire(e,t,(function(e,t){e.__accessor__.destroyed||n&&n.uid!==o?a.remove():(n||(n=s.pool.acquire(e,t,c,r),o=n.uid,c=null),v(n))}));return{remove:u.once((function(){d.remove(),n&&(n.uid!==o||n.removed||(n.removed=!0,v(n)),n=null),a=d=c=null}))}}));return a}(e,t,r)}t.afterDispatch=function(e){return _.add(e),{remove:function(){_.delete(e)}}},t.watch=y,t.isValueInUse=function(e){return f.some((function(t){return t.oldValue===e}))},t.default=y}));