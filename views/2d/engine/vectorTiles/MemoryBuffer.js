/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this._array=[],t<=0&&console.error("strideInBytes must be positive!"),this._stride=t}get array(){return this._array}get index(){return 4*this._array.length/this._stride}get itemSize(){return this._stride}get sizeInBytes(){return 4*this._array.length}reset(){this.array.length=0}toBuffer(){return new Uint32Array(this._array).buffer}static i1616to32(t,r){return 65535&t|r<<16}static i8888to32(t,r,e,s){return 255&t|(255&r)<<8|(255&e)<<16|s<<24}static i8816to32(t,r,e){return 255&t|(255&r)<<8|e<<16}}export{t as default};
