/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/GPMessage"],(function(e,t,s,u,n){"use strict";function r(e,t,s,u){return o.apply(this,arguments)}function o(){return(o=t._asyncToGenerator((function*(e,t,r,o){return r=s.from(r||{}),u.constructRequest(e,"execute",r,t,o).then((e=>{const t=e.data.results||[],s=e.data.messages||[];return{results:t.map(u.decode),messages:s.map((e=>n.fromJSON(e)))}}))}))).apply(this,arguments)}e.execute=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
