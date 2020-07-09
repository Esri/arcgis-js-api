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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/asyncUtils","../../core/Error","../../core/promiseUtils","../../core/SetUtils","../../core/uuid","../../portal/support/resourceUtils"],(function(e,r,t,o,s,n,u,a,c){function i(e,r){return t.__awaiter(this,void 0,void 0,(function(){var s;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o.result(e.resource.portalItem.addResource(e.resource,e.content,r))];case 1:if(!0!==(s=t.sent()).ok)throw e.error&&e.error(s.error),s.error;return e.finish&&e.finish(e.resource),[2]}}))}))}function h(e,r){return t.__awaiter(this,void 0,void 0,(function(){var s;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,o.result(e.resource.update(e.content,r))];case 1:if(!0!==(s=t.sent()).ok)throw e.error(s.error),s.error;return e.finish(e.resource),[2]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.saveResources=function(e,r,o){return t.__awaiter(this,void 0,void 0,(function(){var p,l,f,d,m,v,w,_,g,I,b,S,U,y,F,A,E;return t.__generator(this,(function(t){switch(t.label){case 0:if(!r||!r.resources)return[2];for(p=r.portalItem===e.portalItem?u.SetFromValues(e.paths):new Set,e.paths.length=0,e.portalItem=r.portalItem,l=u.SetFromValues(r.resources.toKeep.map((function(e){return e.resource.path}))),f=new Set,d=[],l.forEach((function(r){p.delete(r),e.paths.push(r)})),m=0,v=r.resources.toUpdate;m<v.length;m++)w=v[m],p.delete(w.resource.path),l.has(w.resource.path)||f.has(w.resource.path)?(_=w.resource,g=w.content,I=w.finish,b=w.error,S=c.getSiblingOfSameType(_,a.generateUUID()),e.paths.push(S.path),d.push(i({resource:S,content:g,finish:I,error:b},o))):(e.paths.push(w.resource.path),d.push(h(w,o)),f.add(w.resource.path));for(U=0,y=r.resources.toAdd;U<y.length;U++)F=y[U],d.push(i(F,o)),e.paths.push(F.resource.path);return p.forEach((function(e){var t=r.portalItem.resourceFromPath(e);d.push(t.portalItem.removeResource(t).catch((function(){})))})),0===d.length?[2]:[4,n.eachAlways(d)];case 1:if(A=t.sent(),n.throwIfAborted(o),(E=A.filter((function(e){return"error"in e})).map((function(e){return e.error}))).length>0)throw new s("save:resources","Failed to save one or more resources",{errors:E});return[2]}}))}))}}));