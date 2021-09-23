/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","./LodComponentData"],(function(n,e,t,o,i,r){"use strict";let u=function(){function n(n,e){this.minScreenSpaceRadius=n,this.components=e}n.create=function(){var t=e._asyncToGenerator((function*(e,t,o){const i=yield Promise.all(t.components.map((n=>e.schedule((()=>new r.LodComponentData(e,n)),o))));return new n(t.minScreenSpaceRadius,i)}));function o(n,e,o){return t.apply(this,arguments)}return o}();var u=n.prototype;return u.destroy=function(){this.components.forEach((n=>{n.destroy()}))},u.intersect=function(n,e,t,o,i,r){this.components.forEach((u=>{u.intersect(n,e,t,o,i,r)}))},e._createClass(n,[{key:"boundingBox",get:function(){if(!this._boundingBox){const n=i.empty();this.components.forEach((e=>{t.isSome(e.boundingInfo)&&(i.expandWithVec3(n,e.boundingInfo.bbMin),i.expandWithVec3(n,e.boundingInfo.bbMax))})),this._boundingBox=n}return this._boundingBox}},{key:"boundingSphere",get:function(){if(!this._boundingSphere){const n=this.boundingBox,e=o.create();i.center(n,e),this._boundingSphere={center:e,radius:.5*i.diameter(n)}}return this._boundingSphere}},{key:"triangleCount",get:function(){return this.components.reduce(((n,e)=>n+e.triangleCount),0)}}]),n}();n.LodLevel=u,Object.defineProperty(n,"__esModule",{value:!0})}));
