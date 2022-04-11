/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,s,i){"use strict";function o(e,o,n){const r=o.map((e=>e.toJSON())),a=o[0].spatialReference,l=i.parseUrl(e),p={...l.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(r)},u=i.asValidOptions(p,n);return t(l.path+"/labelPoints",u).then((({data:e})=>(e.labelPoints||[]).map((e=>s.fromJSON(e).set({spatialReference:a})))))}e.labelPoints=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
