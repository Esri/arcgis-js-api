/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/ValidateNetworkTopologyResult"],(function(e,t,o,i,r){"use strict";function a(e,t,o){return n.apply(this,arguments)}function n(){return(n=t._asyncToGenerator((function*(e,t,a){const n=i.parseUrl(e),l=t.toJSON();t.validationSet&&(l.validationSet=JSON.stringify(t.validationSet));const s={...l,f:"json"},u=i.encode({...n.query,...s}),d=i.asValidOptions(u,{...a,method:"post"}),p=`${n.path}/validateNetworkTopology`,{data:c}=yield o(p,d);if(!c)return null;const y=r.fromJSON(c);return y.serviceEdits=y.serviceEdits.map((e=>({layerId:e.id,editedFeatures:e.editedFeatures}))),y}))).apply(this,arguments)}e.validateNetworkTopology=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
