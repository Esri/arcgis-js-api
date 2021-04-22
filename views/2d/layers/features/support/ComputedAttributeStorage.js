/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./StaticBitSet","./displayIdUtils"],(function(t,e,n){"use strict";function s(t,e,n){if(!(t.length>e))for(;t.length<=e;)t.push(n)}const i=2147483647,r=2147483648,u=(t,e)=>((e?r:0)|t)>>>0;let o=function(){function t(){this._numerics=[],this._strings=[],this._idGenerator=new n.DisplayIdGenerator,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}var r=t.prototype;return r.createBitset=function(){const t=this._bitsets.length;return this._bitsets.push(e.StaticBitSet.create(this._allocatedSize,i)),t+1},r.getBitset=function(t){return this._bitsets[t-1]},r._expand=function(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)},r._ensureNumeric=function(t,e){this._numerics[t]||(this._numerics[t]=[]);s(this._numerics[t],e,0)},r._ensureInstanceId=function(t){s(this._instanceIds,t,0)},r._ensureString=function(t,e){this._strings[t]||(this._strings[t]=[]);s(this._strings[t],e,null)},r.createDisplayId=function(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),u(e,t)},r.releaseDisplayId=function(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&i)},r.getComputedNumeric=function(t,e){return this.getComputedNumericAtIndex(t&i,0)},r.setComputedNumeric=function(t,e,n){return this.setComputedNumericAtIndex(t&i,n,0)},r.getComputedString=function(t,e){return this.getComputedStringAtIndex(t&i,0)},r.setComputedString=function(t,e,n){return this.setComputedStringAtIndex(t&i,0,n)},r.getComputedNumericAtIndex=function(t,e){const n=t&i;return this._ensureNumeric(e,n),this._numerics[e][n]},r.setComputedNumericAtIndex=function(t,e,n){const s=t&i;this._ensureNumeric(e,s),this._numerics[e][s]=n},r.getInstanceId=function(t){const e=t&i;return this._ensureInstanceId(e),this._instanceIds[e]},r.setInstanceId=function(t,e){const n=t&i;this._ensureInstanceId(n),this._instanceIds[n]=e},r.getComputedStringAtIndex=function(t,e){const n=t&i;return this._ensureString(e,n),this._strings[e][n]},r.setComputedStringAtIndex=function(t,e,n){const s=t&i;this._ensureString(e,s),this._strings[e][s]=n},r.getXMin=function(t){return this._bounds[4*(t&i)]},r.getYMin=function(t){return this._bounds[4*(t&i)+1]},r.getXMax=function(t){return this._bounds[4*(t&i)+2]},r.getYMax=function(t){return this._bounds[4*(t&i)+3]},r.setBounds=function(t,e){const n=e.readHydratedGeometry();if(!n||!n.coords.length)return!1;let r=1/0,u=1/0,o=-1/0,c=-1/0;n.forEachVertex(((t,e)=>{r=Math.min(r,t),u=Math.min(u,e),o=Math.max(o,t),c=Math.max(c,e)}));const d=t&i;return s(this._bounds,4*d+4,0),this._bounds[4*d]=r,this._bounds[4*d+1]=u,this._bounds[4*d+2]=o,this._bounds[4*d+3]=c,!0},t}();t.ComputedAttributeStorage=o,Object.defineProperty(t,"__esModule",{value:!0})}));
