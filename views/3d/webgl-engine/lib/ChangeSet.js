/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/PooledArray"],(function(e,t,r){"use strict";let n=function(){function e(){this.adds=new r,this.removes=new r,this.updates=new r({allocator:e=>e||new s,deallocator:e=>(e.renderGeometry=null,e)})}var n=e.prototype;return n.clear=function(){this.adds.clear(),this.removes.clear(),this.updates.clear()},n.prune=function(){this.adds.prune(),this.removes.prune(),this.updates.prune()},t._createClass(e,[{key:"empty",get:function(){return 0===this.adds.length&&0===this.removes.length&&0===this.updates.length}}]),e}(),s=function(){},a=function(){this.adds=new Array,this.removes=new Array,this.updates=new Array};e.ChangeSet=n,e.MaterialChangeSet=a,e.RenderGeometryUpdate=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
