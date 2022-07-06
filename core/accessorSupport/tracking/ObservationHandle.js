/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{remove as r}from"../../arrayUtils.js";class s{constructor(r,s){this._observers=r,this._observer=s}remove(){r(this._observers,this._observer)}}export{s as ObservationHandle};
