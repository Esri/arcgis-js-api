/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","../../tasks/operations/generalize","../../tasks/support/GeneralizeParameters"],(function(e,t,r,s,a,n){"use strict";async function o(e,o,i){const l=(o=n.from(o)).toJSON(),p=a.generalizeToRESTParameters(o),u=s.parseUrl(e),f={...u.query,f:"json",...p},c=l.geometries[0].spatialReference,m=s.asValidOptions(f,i);return r(u.path+"/generalize",m).then((({data:e})=>(e.geometries||[]).map((e=>t.fromJSON(e).set({spatialReference:c})))))}e.generalize=o,Object.defineProperty(e,"__esModule",{value:!0})}));
