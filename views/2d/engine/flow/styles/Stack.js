/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this._styles=t}get animated(){return this._styles.reduce(((t,s)=>t||s.animated),!1)}isCompatible(s){if(!(s instanceof t))return!1;if(this._styles.length!==s._styles.length)return!1;const e=this._styles.length;for(let t=0;t<e;t++)if(!this._styles[t].isCompatible(s._styles[t]))return!1;return!0}async load(t,e){const r=await Promise.all(this._styles.map((s=>s.load(t,e))));return new s(r)}render(t,s,e){for(let r=0;r<this._styles.length;r++)this._styles[r].render(t,s,e.resources[r])}}class s{constructor(t){this.resources=t}attach(t){for(const s of this.resources)s.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce(((t,s)=>t&&s.ready),!0)}}export{s as StackResources,t as default};
