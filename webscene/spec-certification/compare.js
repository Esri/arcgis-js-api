/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./utils"],(function(e,n){"use strict";function t(e){const n=p(e),t=[],i=c(n),s={};a("api","",e.api,n,i.api,s);const r={};a("spec","",e.spec,n,i.spec,r);const u=o(n);for(const a in s){const e=s[a],n=r[a],i=u[e.container.id],c=`${e.container.name} (${n.container.name})${e.container.typeValue?` <${e.container.typeValue}>`:""}`;t.push({name:c,api:e,spec:n,indent:i})}return t}function i(e,n,t,c,o,p,r,u,f){if(r.has(c))return f;for(const l of c.properties){const d=n?`${n}.${l.name}`:l.name,m=t?`${t}.${l.name}`:l.name,y=o[m];if(y){const n=p[y[e].id];f.push({name:d,type:"ref",ref:y,refName:n}),a(e,m,y[e],o,p,u)}else"string"==typeof l.type?f.push(s(d,l)):(r.add(c),i(e,d,m,l.type,o,p,r,u,f))}return r.delete(c),f}function a(e,n,t,a,c,o){if(t.id in o)return o;const p={container:t,text:null,props:[]};return c[t.id].forEach((e=>o[e]=p)),i(e,"",n,t,a,c,new Set,o,p.props),p.props.sort(r),o}function c(e){const n={api:{},spec:{}};for(const t in e){const i=e[t],a=`${i.api.name} (${i.spec.name})${i.api.typeValue?` <${i.api.typeValue}>`:""}`;let c=n.api[i.api.id];c||(c=new Set,n.api[i.api.id]=c),c.add(a);let o=n.spec[i.spec.id];o||(o=new Set,n.spec[i.spec.id]=o),o.add(a)}return n}function o(e){const n={};for(const t in e){const i=t?t.split(".").length:0,a=e[t].api.id;n[a]=a in n?Math.min(i,n[a]):i}return n}function p(e){const t=n.collectClassPaths(e.api),i=n.collectClassPaths(e.spec),a={};a[""]={api:e.api,spec:e.spec};for(const n in t){const e=i[n];if(e){const i=t[n];a[n]={api:i,spec:e}}}return a}function s(e,n){return{name:e,type:n.enum||("string"==typeof n.type?n.type:""),default:JSON.stringify(n.default)}}function r(e,n){const t=e.name.localeCompare(n.name);if(0!==t)return t;const i=(e.type||"").localeCompare(n.type||"");return 0!==i?i:(e.default||"").localeCompare(n.default||"")}e.collect=t,Object.defineProperty(e,"__esModule",{value:!0})}));
