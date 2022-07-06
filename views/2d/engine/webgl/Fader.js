/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t=400){this.duration=t,this._lastTime=0,this._elapsed=0,this._value=0,this._finished=!1}get value(){return this._value}reset(){this._lastTime=0,this._elapsed=0,this._value=0}step(){const t=performance.now();if(0===this._lastTime)return this._lastTime=t,this._value=0,!0;if(this._elapsed>=this.duration)return!0;const s=t-this._lastTime;return this._elapsed+=s,this._lastTime=t,this._value=Math.min(this._elapsed/this.duration,1),!1}}export{t as default};
