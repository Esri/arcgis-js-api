/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{remove as e}from"../../../../../core/arrayUtils.js";class s{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(s){e(this._scenes,s)}forEachScene(e){this._scenes.forEach(e)}}export{s as Asset};
