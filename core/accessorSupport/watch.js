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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","./get","./utils","./wire"],function(e,r,t,n,a,o,i,u,l){function c(e){b.has(e)?q.splice(q.indexOf(e),1):b.add(e),q.push(e),O||(O=o.schedule(h))}function s(e){if(!e.removed){var r=e.callback,t=e.path,n=e.propertyPath,a=e.oldValue,o=e.target,u=i.valueOf(o,n,!0);d(t,a,u)&&(e.oldValue=u,r.call(o,u,a,t,o))}}function d(e,r,t){return!n.equals(r,t)}function f(e){for(var r=P.copy(q),t=0;t<r.length;t++){var n=r[t];n.target===e&&(s(n),b.delete(n),q.splice(q.indexOf(n),1))}}function v(e){for(var r=0;r<q.length;r++){var t=q[r];t.target===e&&(t.removed=!0)}if(V)for(var r=0;r<V.length;r++){var t=V[r];t.target===e&&(t.removed=!0)}}function h(){for(var e=10;O&&e--;){O=null;var r=q;q=P.acquire(),b.clear();for(var t=P.acquire(),n=0,a=r;n<a.length;n++){var o=a[n];s(o),o.removed&&t.push(o)}for(var i=0;i<q.length;i++){var o=q[i];o.removed&&(t.push(o),b.delete(o),q.splice(i,1),i-=1)}for(var i=0;i<t.length;i++)w.pool.release(t[i]);P.release(r),P.release(t),j.forEach(function(e){return e()})}}function p(e){return j.add(e),{remove:function(){j.delete(e)}}}function g(e,r,t){var n=u.parse(e,r,t,function(e,r,t){var a,o,s=i.valueOf(e,r,!0),d=l.wire(e,r,function(e,r){if(e.__accessor__.destroyed||a&&a.uid!==o)return void n.remove();a||(a=w.pool.acquire(e,r,s,t),o=a.uid,s=null),c(a)});return{remove:u.once(function(){d.remove(),a&&(a.uid!==o||a.removed||(a.removed=!0,c(a)),a=null),n=d=s=null})}});return n}function _(e,r,t){var n=u.parse(e,r,t,function(e,t,a){var o=i.valueOf(e,t,!0),u=!1;return l.wire(e,t,function(e,t){if(e.__accessor__.destroyed)return void n.remove();if(!u){u=!0;var l=i.valueOf(e,t,!0);d(r,o,l)&&a.call(e,l,o,t,e),o=i.valueOf(e,t,!0),u=!1}})});return n}function m(e,r,t,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?_(e,r,t):g(e,r,t)}function y(e){return q.some(function(r){return r.oldValue===e})}Object.defineProperty(r,"__esModule",{value:!0});var O,w=function(){function e(r,t,n,a){this.target=r,this.path=t,this.oldValue=n,this.callback=a,this.uid=0,this.removed=!1,this.propertyPath=u.pathToStringOrArray(t),this.uid=++e.uid}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++e.uid,this.removed=!0},e.pool=new a.ReentrantObjectPool(e,!0),e.uid=0,e}(),P=new t,b=new Set,q=P.acquire(),V=null;r.dispatchTarget=f,r.removeTarget=v,r.dispatch=h;var j=new Set;r.afterDispatch=p,r.watch=m,r.isValueInUse=y,r.default=m});