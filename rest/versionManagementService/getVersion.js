/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../utils"],(function(e,n,r,t,i){"use strict";function s(e,n,r){return o.apply(this,arguments)}function o(){return(o=n._asyncToGenerator((function*(e,n,s){if(!n||n.length<1)throw new t("get-version:missing-guid","guid for version is missing");const o=i.parseUrl(e),u=i.asValidOptions(o.query,{query:i.encode({f:"json"}),...s});n.startsWith("{")&&(n=n.slice(1,-1));const l=`${o.path}/versions/${n}`,{data:a}=yield r(l,u);return a||null}))).apply(this,arguments)}e.getVersion=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
