/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/urlUtils","./index","./node","./asset","./scene"],(function(e,t,n,o,i,r){"use strict";let l=function(){function e(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}var n=e.prototype;return n.buffer=function(){return Promise.resolve(this._file)},n.download=function(e){t.downloadBlobAsFile(new Blob([this._file.data],{type:this._file.type}),e)},e}();function s(e,t){const s=new i.Asset,d=new r.Scene;return s.addScene(d),d.addNode(new o.Node(e)),n.exportGLB(s,t).then((e=>new l(e[n.MODEL_NAME_GLB],e.origin)))}e.toBinaryGLTF=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
