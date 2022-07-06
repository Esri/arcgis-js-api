/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{Milliseconds as t}from"../../../../core/time.js";class i{constructor(){this.enabled=!0,this._time=0}get time(){return t(this._time)}advance(t){return e(t.forcedTime)?this._time!==t.forcedTime&&(this._time=t.forcedTime,!0):!(!this.enabled||0===t.dt)&&(this._time+=t.dt,!0)}}export{i as AnimationTimer};
