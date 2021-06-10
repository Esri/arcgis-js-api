/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../core/maybe","../../core/Error","./support/utils","../support/adapters/support/layerUtils"],(function(e,r,a,i){"use strict";async function t(t){if(!(t&&t.layer&&t.view&&t.fields))throw new r("predominant-categories:missing-parameters","'layer', 'view' and 'fields' parameters are required");const n=[0,2,1,3,4],{layer:s,...o}=t,l=i.createLayerAdapter(s,n),p={layerAdapter:l,...o};if(!l)throw new r("predominant-categories:invalid-parameters","'layer' must be one of these types: "+i.getLayerTypeLabels(n).join(", "));const d=e.isSome(p.signal)?{signal:p.signal}:null;await Promise.all([p.view.when(),l.load(d)]);const c=a.verifyBasicFieldValidity(l,p.fields,"predominant-categories:invalid-parameters");if(c)throw c;return p}async function n(e){const{layerAdapter:r,...a}=await t(e);return r.predominantCategories(a)}return n}));
