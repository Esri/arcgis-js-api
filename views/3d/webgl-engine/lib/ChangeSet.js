/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/PooledArray"],(function(e,t){"use strict";let r=function(){function e(){this.adds=new t,this.removes=new t,this.updates=new t({allocator:e=>e||new n,deallocator:e=>(e.renderGeometry=null,e)})}var r=e.prototype;return r.clear=function(){this.adds.clear(),this.removes.clear(),this.updates.clear()},r.prune=function(){this.adds.prune(),this.removes.prune(),this.updates.prune()},e}(),n=function(){},s=function(){this.adds=new Array,this.removes=new Array,this.updates=new Array};e.ChangeSet=r,e.MaterialChangeSet=s,e.RenderGeometryUpdate=n,Object.defineProperty(e,"__esModule",{value:!0})}));
