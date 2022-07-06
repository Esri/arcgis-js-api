/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(s){this._notify=s,this._accessed=[],this._handles=[],this._invalidCount=0}destroy(){this._accessed.length=0,this.clear()}onInvalidated(){this._invalidCount++}onCommitted(){const s=this._invalidCount;if(1===s)return this._invalidCount=0,void this._notify();this._invalidCount=s>0?s-1:0}onObservableAccessed(s){this._accessed.includes(s)||this._accessed.push(s)}onTrackingEnd(){const s=this._handles,t=this._accessed;for(let e=0;e<t.length;++e)s.push(t[e].observe(this));t.length=0}clear(){const s=this._handles;for(let t=0;t<s.length;++t)s[t].remove();s.length=0}}export{s as SimpleTrackingTarget};
