/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{removeUnordered as t}from"../../../../core/arrayUtils.js";import{TaskPriority as e}from"../../../support/Scheduler.js";class r{constructor(t){this.referenceCount=0,this.callbacks=[],this.runIndex=0,this.handle=t.registerTask(e.I3S_CONTROLLER,this)}destroy(){this.handle&&(this.handle.remove(),this.handle=null)}get running(){for(const t of this.callbacks)if(t.needsUpdate())return!0;return!1}runTask(t){this._sort();const e=this.callbacks,r={numIndexLoading:0,numNodesLoading:0};for(let s=0;s<e.length&&!t.done;++s)e[s].priority=e[s].update(t,r),this.runIndex=s}_sort(){const t=this.callbacks;let e=t.length;for(let r=this.runIndex;r>0;r--){const s=t[r-1];let n=r;for(;n<t.length&&s.priority<=t[n].priority&&(n!==e||s.priority<t[n].priority);)t[n-1]=t[n],n++;t[n-1]=s,e=n-1}this.runIndex=0}add(t){this._sort(),t.priority=1/0,this.callbacks.unshift(t)}remove(e){t(this.callbacks,e),this.runIndex=this.callbacks.length,this._sort()}}const s=new Map;function n(t,e){let n=s.get(t);return null==n&&(n=new r(t),s.set(t,n)),n.add(e),{remove:()=>{if(null==n)return;n.remove(e);n.callbacks.length>0||(s.delete(t),n.destroy()),n=null}}}export{n as addTask};