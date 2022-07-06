/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createDisplayId as e}from"../../../engine/webgl/DisplayId.js";class r{constructor(){this._freeIds=[],this._idCounter=1}createId(r=!1){return e(this._getFreeId(),r)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}export{r as DisplayIdGenerator};
