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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../Scheduler","../ArrayPool","../lang","./utils","./get","./whenMayChange"],function(e,a,n,r,u,t,i,l){function f(e){var a=e.uid,u=t.uid(e.target),i=O[a];i?m.splice(m.indexOf(i),1):(O[a]=e,y[u]||(y[u]=r.acquire()),y[u].push(a)),m.push(e),p||(p=n.schedule(v))}function c(e){var a=e.callback,n=e.name,r=e.oldValue,t=e.target,l=i.valueOf(t,n,!0);u.equals(r,l)||(a.call(t,l,r,n,t),e.oldValue=l)}function o(e){var a="string"!=typeof e?t.uid(e):e,n=y[a];if(n){delete y[a];for(var r=0,u=n;r<u.length;r++){var i=u[r],l=O[i];delete O[i],m.splice(m.indexOf(l),1),c(l)}}}function d(e){var a="string"!=typeof e?t.uid(e):e,n=y[a];if(n){delete y[a];for(var r=0,u=n;r<u.length;r++){var i=u[r],l=O[i];delete O[i],m.splice(m.indexOf(l),1)}}}function v(){if(p){p=null;var e=m;O={},y={},m=r.acquire();for(var a=0,n=e;a<n.length;a++){var u=n[a];c(u)}r.release(e)}}function s(e,a,n){return t.parse(e,a,n,function(e,a,n){var r,u=i.valueOf(e,a,!0),c=l.whenMayChange(e,a,function(e,a){r||(r={uid:t.uid(),target:a,name:e,oldValue:u,callback:n}),f(r)});return{remove:t.once(function(){c.remove();var e=r&&O[r.uid];e&&m.splice(m.indexOf(e),1)})}})}function h(e,a,n){return t.parse(e,a,n,function(e,a,n){var r=i.valueOf(e,a,!0),t=!1;return l.whenMayChange(e,a,function(e,a){if(!t){t=!0;var l=i.valueOf(a,e,!0);u.equals(r,l)||n.call(a,l,r,e,a),r=i.valueOf(a,e,!0),t=!1}})})}function g(e,a,n,r){return void 0===r&&(r=!1),r?h(e,a,n):s(e,a,n)}var p,O={},y={},m=[];a.dispatchTarget=o,a.removeTarget=d,a.dispatch=v,a.watch=g,Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=g});