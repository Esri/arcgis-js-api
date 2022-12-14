/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{isSome as r}from"../../core/maybe.js";import{verifyBasicFieldValidity as a}from"./support/utils.js";import{createLayerAdapter as t,defaultSupportedLayerTypes as i,getLayerTypeLabels as o}from"../support/adapters/support/layerUtils.js";async function s(s){if(!(s&&s.layer&&s.view&&s.fields))throw new e("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");const{layer:n,...l}=s,p=t(n,i),m={layerAdapter:p,...l};if(!p)throw new e("predominant-categories:invalid-parameters","'layer' must be one of these types: "+o(i).join(", "));const d=r(m.signal)?{signal:m.signal}:null;await Promise.all([m.view.when(),p.load(d)]);const f=a(p,m.fields,"predominant-categories:invalid-parameters");if(f)throw f;return m}async function n(e){const{layerAdapter:r,...a}=await s(e);return r.predominantCategories(a)}export{n as default};