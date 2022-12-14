/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DISPLAY_ID_TEXEL_MASK as t,createDisplayId as e}from"../../../engine/webgl/DisplayId.js";import{DisplayIdGenerator as s}from"./DisplayIdGenerator.js";import{StaticBitSet as i}from"./StaticBitSet.js";function n(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class r{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new s,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length;return this._bitsets.push(i.create(this._allocatedSize,t)),e+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);n(this._numerics[t],e,0)}_ensureInstanceId(t){n(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);n(this._strings[t],e,null)}createDisplayId(t=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),e(s,t)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e);return this._idGenerator.releaseId(e&t)}getComputedNumeric(e,s){return this.getComputedNumericAtIndex(e&t,0)}setComputedNumeric(e,s,i){return this.setComputedNumericAtIndex(e&t,i,0)}getComputedString(e,s){return this.getComputedStringAtIndex(e&t,0)}setComputedString(e,s,i){return this.setComputedStringAtIndex(e&t,0,i)}getComputedNumericAtIndex(e,s){const i=e&t;return this._ensureNumeric(s,i),this._numerics[s][i]}setComputedNumericAtIndex(e,s,i){const n=e&t;this._ensureNumeric(s,n),this._numerics[s][n]=i}getInstanceId(e){const s=e&t;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(e,s){const i=e&t;this._ensureInstanceId(i),this._instanceIds[i]=s}getComputedStringAtIndex(e,s){const i=e&t;return this._ensureString(s,i),this._strings[s][i]}setComputedStringAtIndex(e,s,i){const n=e&t;this._ensureString(s,n),this._strings[s][n]=i}getXMin(e){return this._bounds[4*(e&t)]}getYMin(e){return this._bounds[4*(e&t)+1]}getXMax(e){return this._bounds[4*(e&t)+2]}getYMax(e){return this._bounds[4*(e&t)+3]}setBounds(e,s){const i=s.readHydratedGeometry();if(!i||!i.coords.length)return!1;let r=1/0,u=1/0,o=-1/0,h=-1/0;i.forEachVertex(((t,e)=>{r=Math.min(r,t),u=Math.min(u,e),o=Math.max(o,t),h=Math.max(h,e)}));const d=e&t;return n(this._bounds,4*d+4,0),this._bounds[4*d]=r,this._bounds[4*d+1]=u,this._bounds[4*d+2]=o,this._bounds[4*d+3]=h,!0}}export{r as ComputedAttributeStorage};