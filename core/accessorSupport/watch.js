// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../Scheduler","../ObjectPool","../ArrayPool","../lang","./utils","./get","./wire"],function(e,r,t,a,o,n,l,i,u){function c(e){w.has(e)?q.splice(q.indexOf(e),1):w.add(e),q.push(e),y||(y=t.schedule(h))}function v(e){if(!e.removed){var r=e.callback,t=e.path,a=e.propertyPath,o=e.oldValue,n=e.target,l=i.valueOf(n,a,!0);s(t,o,l)&&(e.oldValue=l,r.call(n,l,o,t,n))}}function s(e,r,t){return!n.equals(r,t)}function f(e){for(var r=O.copy(q),t=0;t<r.length;t++){var a=r[t];a.target===e&&(v(a),w["delete"](a),q.splice(q.indexOf(a),1))}}function d(e){for(var r=0;r<q.length;r++){var t=q[r];t.target===e&&(t.removed=!0)}if(P)for(var r=0;r<P.length;r++){var t=P[r];t.target===e&&(t.removed=!0)}}function h(){if(y){y=null;var e=q;q=O.acquire(),w.clear();for(var r=O.acquire(),t=0;t<e.length;t++){var a=e[t];v(a),a.removed&&r.push(a)}for(var t=0;t<q.length;t++){var a=q[t];a.removed&&(r.push(a),w["delete"](a),q.splice(t,1),t-=1)}for(var t=0;t<r.length;t++)m.pool.release(r[t]);O.release(e),O.release(r)}}function p(e,r,t){var a=l.parse(e,r,t,function(e,r,t){var o,n=i.valueOf(e,r,!0),v=u.wire(e,r,function(e,r){return e.__accessor__.destroyed?void a.remove():(o||(o=m.pool.acquire(e,r,n,t),n=null),void c(o))});return{remove:l.once(function(){v.remove(),o&&(o.removed=!0,c(o),o=null),a=v=n=null})}});return a}function _(e,r,t){var a=l.parse(e,r,t,function(e,t,o){var n=i.valueOf(e,t,!0),l=!1;return u.wire(e,t,function(e,t){if(e.__accessor__.destroyed)return void a.remove();if(!l){l=!0;var u=i.valueOf(e,t,!0);s(r,n,u)&&o.call(e,u,n,t,e),n=i.valueOf(e,t,!0),l=!1}})});return a}function g(e,r,t,a){return void 0===a&&(a=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:a?_(e,r,t):p(e,r,t)}Object.defineProperty(r,"__esModule",{value:!0});var m=function(){function e(e,r,t,a){this.target=e,this.path=r,this.oldValue=t,this.callback=a,this.removed=!1,this.propertyPath=l.pathToStringOrArray(r)}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.removed=!0},e}();m.pool=new a(m,!0);var y,O=new o,w=new Set,q=O.acquire(),P=null;r.dispatchTarget=f,r.removeTarget=d,r.dispatch=h,r.watch=g,r["default"]=g});