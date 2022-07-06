/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(s){this._stage=s,this._materials=new Map}get(s){return this._materials.get(s)}add(s,t){this._materials.set(s,t),this._stage.add(t)}dispose(){this._stage.removeMany(Array.from(this._materials.values())),this._materials.clear()}}export{s as MaterialCollection};
