/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this._gain=t}reset(t){this._value=t}set gain(t){this._gain=t}get value(){return void 0===this._value?0:this._value}update(t){void 0===this._value?this._value=t:this._value=this._gain*t+(1-this._gain)*this._value}}export{t as ExponentialFalloff};
