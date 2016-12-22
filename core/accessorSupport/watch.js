// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../Scheduler","../ArrayPool","../lang","./utils","./get","./wire"],function(e,r,a,t,n,u,i,l){function o(e){var r=e.uid,t=u.uid(e.target),n=w[r];n?q.splice(q.indexOf(n),1):(w[r]=e,y[t]||(y[t]=m.acquire()),y[t].push(r)),q.push(e),h||(h=a.schedule(v))}function f(e){if(!e.removed){var r=e.callback,a=e.propertyName,t=e.oldValue,u=e.target,l=i.valueOf(u,a,!0);n.equals(t,l)||(e.oldValue=l,r.call(u,l,t,a,u))}}function c(e){var r="string"!=typeof e?u.uid(e):e,a=y[r];if(a){delete y[r];for(var t=0,n=a;t<n.length;t++){var i=n[t],l=w[i];delete w[i],q.splice(q.indexOf(l),1),f(l)}m.release(a)}}function d(e){var r="string"!=typeof e?u.uid(e):e,a=y[r];if(a){delete y[r];for(var t=0,n=a;t<n.length;t++){var i=n[t],l=w[i];delete w[i],q.splice(q.indexOf(l),1)}}}function v(){if(h){h=null;var e=q;w={},y={},q=O.acquire();for(var r=0,a=e;r<a.length;r++){var t=a[r];f(t)}O.release(e)}}function s(e,r,a){return u.parse(e,r,a,function(e,r,a){var t,n=i.valueOf(e,r,!0),f=l.wire(e,r,function(e,r){t||(t={uid:u.uid(),target:e,propertyName:r,oldValue:n,callback:a,removed:!1}),o(t)});return{remove:u.once(function(){f.remove(),t&&(t.removed=!0)})}})}function p(e,r,a){return u.parse(e,r,a,function(e,r,a){var t=i.valueOf(e,r,!0),u=!1;return l.wire(e,r,function(e,r){if(!u){u=!0;var l=i.valueOf(e,r,!0);n.equals(t,l)||a.call(e,l,t,r,e),t=i.valueOf(e,r,!0),u=!1}})})}function g(e,r,a,t){return void 0===t&&(t=!1),t?p(e,r,a):s(e,r,a)}var h,O=new t,m=new t,w={},y={},q=[];r.dispatchTarget=c,r.removeTarget=d,r.dispatch=v,r.watch=g,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=g});