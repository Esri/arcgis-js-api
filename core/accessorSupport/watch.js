// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","./get","./utils","./wire"],function(e,r,t,n,a,o,l,u,i){function c(e){b.has(e)?q.splice(q.indexOf(e),1):b.add(e),q.push(e),O||(O=o.schedule(h))}function f(e){if(!e.removed){var r=e.callback,t=e.path,n=e.propertyPath,a=e.oldValue,o=e.target,u=l.valueOf(o,n,!0);s(t,a,u)&&(e.oldValue=u,r.call(o,u,a,t,o))}}function s(e,r,t){return!n.equals(r,t)}function v(e){for(var r=P.copy(q),t=0;t<r.length;t++){var n=r[t];n.target===e&&(f(n),b.delete(n),q.splice(q.indexOf(n),1))}}function d(e){for(var r=0;r<q.length;r++){var t=q[r];t.target===e&&(t.removed=!0)}if(V)for(var r=0;r<V.length;r++){var t=V[r];t.target===e&&(t.removed=!0)}}function h(){if(O){O=null;var e=q;q=P.acquire(),b.clear();for(var r=P.acquire(),t=0,n=e;t<n.length;t++){var a=n[t];f(a),a.removed&&r.push(a)}for(var o=0;o<q.length;o++){var a=q[o];a.removed&&(r.push(a),b.delete(a),q.splice(o,1),o-=1)}for(var o=0;o<r.length;o++)w.pool.release(r[o]);P.release(e),P.release(r),j.forEach(function(e){return e()})}}function p(e){return j.add(e),{remove:function(){j.delete(e)}}}function g(e,r,t){var n=u.parse(e,r,t,function(e,r,t){var a,o=l.valueOf(e,r,!0),f=i.wire(e,r,function(e,r){if(e.__accessor__.destroyed)return void n.remove();a||(a=w.pool.acquire(e,r,o,t),o=null),c(a)});return{remove:u.once(function(){f.remove(),a&&(a.removed=!0,c(a),a=null),n=f=o=null})}});return n}function _(e,r,t){var n=u.parse(e,r,t,function(e,t,a){var o=l.valueOf(e,t,!0),u=!1;return i.wire(e,t,function(e,t){if(e.__accessor__.destroyed)return void n.remove();if(!u){u=!0;var i=l.valueOf(e,t,!0);s(r,o,i)&&a.call(e,i,o,t,e),o=l.valueOf(e,t,!0),u=!1}})});return n}function m(e,r,t,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?_(e,r,t):g(e,r,t)}function y(e){return q.some(function(r){return r.oldValue===e})}Object.defineProperty(r,"__esModule",{value:!0});var O,w=function(){function e(e,r,t,n){this.target=e,this.path=r,this.oldValue=t,this.callback=n,this.removed=!1,this.propertyPath=u.pathToStringOrArray(r)}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.removed=!0},e.pool=new a.ReentrantObjectPool(e,!0),e}(),P=new t,b=new Set,q=P.acquire(),V=null;r.dispatchTarget=v,r.removeTarget=d,r.dispatch=h;var j=new Set;r.afterDispatch=p,r.watch=m,r.isValueInUse=y,r.default=m});