/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/urlUtils","./index","./node","./asset","./scene"],(function(e,t,n,o,i,r){"use strict";let d=function(){function e(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}var n=e.prototype;return n.buffer=function(){return Promise.resolve(this._file)},n.download=function(e){t.downloadBlobAsFile(new Blob([this._file.data],{type:this._file.type}),e)},e}();function l(e,t){const l=new i.Asset,s=new r.Scene;return l.addScene(s),s.addNode(new o.Node(e)),n.exportGLB(l,t).then((e=>new d(e[n.MODEL_NAME_GLB],e.origin)))}e.toBinaryGLTF=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
