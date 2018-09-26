// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../ArrayPool","../lang","../ObjectPool","../scheduling","./get","./utils","./wire"],function(e,r,t,n,a,o,u,l,i){function c(e){P.has(e)?V.splice(V.indexOf(e),1):P.add(e),V.push(e),O||(O=o.schedule(h))}function f(e){if(!e.removed){var r=e.callback,t=e.path,n=e.propertyPath,a=e.oldValue,o=e.target,l=u.valueOf(o,n,!0);s(t,a,l)&&(e.oldValue=l,r.call(o,l,a,t,o))}}function s(e,r,t){return!n.equals(r,t)}function v(e){for(var r=q.copy(V),t=0;t<r.length;t++){var n=r[t];n.target===e&&(f(n),P.delete(n),V.splice(V.indexOf(n),1))}}function d(e){for(var r=0;r<V.length;r++){var t=V[r];t.target===e&&(t.removed=!0)}if(b)for(var r=0;r<b.length;r++){var t=b[r];t.target===e&&(t.removed=!0)}}function h(){if(O){O=null;var e=V;V=q.acquire(),P.clear();for(var r=q.acquire(),t=0;t<e.length;t++){var n=e[t];f(n),n.removed&&r.push(n)}for(var t=0;t<V.length;t++){var n=V[t];n.removed&&(r.push(n),P.delete(n),V.splice(t,1),t-=1)}for(var t=0;t<r.length;t++)w.pool.release(r[t]);q.release(e),q.release(r),k.forEach(function(e){return e()})}}function p(e){return k.add(e),{remove:function(){k.delete(e)}}}function g(e,r,t){var n=l.parse(e,r,t,function(e,r,t){var a,o=u.valueOf(e,r,!0),f=i.wire(e,r,function(e,r){if(e.__accessor__.destroyed)return void n.remove();a||(a=w.pool.acquire(e,r,o,t),o=null),c(a)});return{remove:l.once(function(){f.remove(),a&&(a.removed=!0,c(a),a=null),n=f=o=null})}});return n}function _(e,r,t){var n=l.parse(e,r,t,function(e,t,a){var o=u.valueOf(e,t,!0),l=!1;return i.wire(e,t,function(e,t){if(e.__accessor__.destroyed)return void n.remove();if(!l){l=!0;var i=u.valueOf(e,t,!0);s(r,o,i)&&a.call(e,i,o,t,e),o=u.valueOf(e,t,!0),l=!1}})});return n}function m(e,r,t,n){return void 0===n&&(n=!1),!e.__accessor__||e.__accessor__.destroyed?{remove:function(){}}:n?_(e,r,t):g(e,r,t)}function y(e){return V.some(function(r){return r.oldValue===e})}Object.defineProperty(r,"__esModule",{value:!0});var O,w=function(){function e(e,r,t,n){this.target=e,this.path=r,this.oldValue=t,this.callback=n,this.removed=!1,this.propertyPath=l.pathToStringOrArray(r)}return e.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.removed=!0},e.pool=new a(e,!0),e}(),q=new t,P=new Set,V=q.acquire(),b=null;r.dispatchTarget=v,r.removeTarget=d,r.dispatch=h;var k=new Set;r.afterDispatch=p,r.watch=m,r.isValueInUse=y,r.default=m});