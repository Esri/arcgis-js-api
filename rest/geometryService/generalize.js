/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","../operations/generalize","../support/GeneralizeParameters"],(function(e,r,t,n,a,s,o){"use strict";function i(e,r,t){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e,r,i){const l=(r=o.from(r)).toJSON(),u=s.generalizeToRESTParameters(r),p=a.parseUrl(e),c={...p.query,f:"json",...u},f=l.geometries[0].spatialReference,g=a.asValidOptions(c,i);return t(p.path+"/generalize",g).then((({data:e})=>(e.geometries||[]).map((e=>n.fromJSON(e).set({spatialReference:f})))))}))).apply(this,arguments)}e.generalize=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
