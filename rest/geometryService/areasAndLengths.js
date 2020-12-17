/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils"],(function(e,t,n){"use strict";e.areasAndLengths=async function(e,s,a){const r=n.parseUrl(e),o={...r.query,f:"json",...s.toJSON()},u=n.asValidOptions(o,a);return t(r.path+"/areasAndLengths",u).then((e=>e.data))},Object.defineProperty(e,"__esModule",{value:!0})}));
