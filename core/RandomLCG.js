/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t=1){this._seed=t}set seed(e){this._seed=null==e?Math.random()*t._m:e}getInt(){return this._seed=(t._a*this._seed+t._c)%t._m,this._seed}getFloat(){return this.getInt()/(t._m-1)}getIntRange(t,e){return Math.round(this.getFloatRange(t,e))}getFloatRange(e,s){const n=s-e;return e+this.getInt()/t._m*n}}t._m=2147483647,t._a=48271,t._c=0;export{t as default};
