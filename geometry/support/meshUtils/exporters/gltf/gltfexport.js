/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{downloadBlobAsFile as e}from"../../../../../core/urlUtils.js";import{exportGLB as o,MODEL_NAME_GLB as t}from"./index.js";import{Node as r}from"./node.js";import{Asset as i}from"./asset.js";import{Scene as n}from"./scene.js";class s{constructor(e,o){this._file={type:"model/gltf-binary",data:e},this.origin=o}buffer(){return Promise.resolve(this._file)}download(o){e(new Blob([this._file.data],{type:this._file.type}),o)}}function f(e,f){const d=new i,l=new n;return d.addScene(l),l.addNode(new r(e)),o(d,f).then((e=>new s(e[t],e.origin)))}export{f as toBinaryGLTF};
