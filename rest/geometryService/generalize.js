/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../support/GeneralizeParameters","../../tasks/operations/generalize"],(function(e,r,t,n,s,a,o){"use strict";function i(e,r,t){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e,r,i){const l=(r=a.from(r)).toJSON(),p=o.generalizeToRESTParameters(r),u=s.parseUrl(e),c={...u.query,f:"json",...p},f=l.geometries[0].spatialReference,g=s.asValidOptions(c,i);return t(u.path+"/generalize",g).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:f})))))}))).apply(this,arguments)}e.generalize=i,Object.defineProperty(e,"__esModule",{value:!0})}));
