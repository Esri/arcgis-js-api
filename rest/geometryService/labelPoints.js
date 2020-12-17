/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils"],(function(e,t,s,i){"use strict";e.labelPoints=function(e,n,o){const r=n.map((e=>e.toJSON())),a=n[0].spatialReference,l=i.parseUrl(e),p={...l.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(r)},f=i.asValidOptions(p,o);return s(l.path+"/labelPoints",f).then((({data:e})=>(e.labelPoints||[]).map((e=>t.fromJSON(e).set({spatialReference:a})))))},Object.defineProperty(e,"__esModule",{value:!0})}));
