/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{result as r}from"../../core/asyncUtils.js";import e from"../../core/Error.js";import{eachAlways as o,throwIfAborted as t}from"../../core/promiseUtils.js";import{generateUUID as s}from"../../core/uuid.js";import{getSiblingOfSameTypeI as c}from"../../portal/support/resourceUtils.js";async function a(r,a,u){if(!a||!a.resources)return;const h=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((e=>{h.delete(e),r.paths.push(e)}));for(const e of a.resources.toUpdate)if(h.delete(e.resource.path),i.has(e.resource.path)||f.has(e.resource.path)){const{resource:o,content:t,finish:a,error:p}=e,h=c(o,s());r.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u))}else r.paths.push(e.resource.path),m.push(p(e,u)),f.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})))})),0===m.length)return;const l=await o(m);t(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new e("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await r(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource)}async function p(e,o){const t=await r(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource)}export{a as saveResources};