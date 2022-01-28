/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./GPOptions","./utils","../support/GPMessage"],(function(e,t,s,n,r){"use strict";function u(e,t,s,n){return o.apply(this,arguments)}function o(){return(o=t._asyncToGenerator((function*(e,t,u,o){return u=s.from(u||{}),n.constructRequest(e,"execute",u,t,o).then((e=>{const t=e.data.results||[],s=e.data.messages||[];return{results:t.map(n.decode),messages:s.map((e=>r.fromJSON(e)))}}))}))).apply(this,arguments)}e.execute=u,Object.defineProperty(e,"__esModule",{value:!0})}));
