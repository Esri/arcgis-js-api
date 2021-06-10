/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils"],(function(e,t,n){"use strict";async function s(e,s,a){const r=n.parseUrl(e),o={...r.query,f:"json",...s.toJSON()},u=n.asValidOptions(o,a);return t(r.path+"/areasAndLengths",u).then((e=>e.data))}e.areasAndLengths=s,Object.defineProperty(e,"__esModule",{value:!0})}));
