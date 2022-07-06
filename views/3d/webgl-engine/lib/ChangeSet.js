/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../core/PooledArray.js";class r{constructor(){this.adds=new e,this.removes=new e,this.updates=new e({allocator:e=>e||new s,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class s{}class t{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}export{r as ChangeSet,t as MaterialChangeSet,s as RenderGeometryUpdate};
