/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as t}from"../../../../core/lang.js";import{isSome as e,isNone as n}from"../../../../core/maybe.js";import{attributeLookup as r}from"../support/attributeUtils.js";const o={setAttribute(){},rollback(){},commit(){}};var s;function i(e,r){const i=r.attributes[e.objectIdField],a=e.sessions.get(i);if(a)return a;const u=t(r.attributes),c=new Set;if(null==i)return o;const f=e.attributeOverrides.createInteractiveEditSession(i),l=new Map,d=(t,e)=>{const n=l.get(t);if(null==n){const n=e.indexOf(i);return l.set(t,n),n}return n};let I=s.EDITING;const b={setAttribute(t,o){if(I!==s.EDITING)return;const i=e.fieldsIndex.get(t);if(n(i))return;const a=e.attributeStorageInfo.findIndex((t=>t.name===i.name));if(a<0)return;f.set(a,o);const u=e.attributeStorageInfo[a];let l=!1;c.add(t),e.forEachNode(((t,n)=>{const s=d(t,n);if(-1===s)return;const i=e.getAttributeData(t.index);if(i){const n=i[u.name];n&&(n[s]=o,e.setAttributeData(t.index,i,r),l=!0)}})),l&&e.clearMemCache()},rollback(){if(I===s.EDITING){for(const t of c)this.setAttribute(t,u[t]);f.rollback(),I=s.ROLLED_BACK,e.sessions.delete(i)}},commit(){I===s.EDITING&&(f.commit(),I=s.COMMITTED,e.sessions.delete(i))}};return e.sessions.set(i,b),b}function a(t,n){const r=u(t,n);if(0===r.size)return;const o=new Map;for(let e=0;e<t.attributeStorageInfo.length;e++)o.set(t.attributeStorageInfo[e].name,e);let s=!1;r.forEach(((n,r)=>{const i=t.getAttributeData(r);let a=!1;n.forEach(((n,r)=>{const u=e(i)?i[r]:null,c=o.get(r);for(const{featureIndex:e,value:o,featureId:i}of n)u&&(u[e]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o)})),a&&t.setAttributeData(r,i,null)})),s&&t.clearMemCache()}function u(t,e){const n=e.edits.updateFeatures;if(!n||0===n.length)return new I;const o=l(e),s=new I,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,u=t.objectIdField,f=n.filter((t=>{const e=r(a,t.attributes,u);return o.has(e)}));return t.forEachNode(((e,n)=>{const o=new Set(n);for(const i of f){const f=r(a,i.attributes,u);if(!o.has(f))continue;const l=n.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=c(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a})}}})),s}function c(t,e,n){const r=f(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function f(t,e){const n=t.get(e);if(n)return n;const r=new d;return t.set(e,r),r}function l(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}!function(t){t[t.EDITING=0]="EDITING",t[t.ROLLED_BACK=1]="ROLLED_BACK",t[t.COMMITTED=2]="COMMITTED"}(s||(s={}));const d=Map,I=Map;export{i as createInteractiveEditSession,a as processAttributeEdits};