/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let n=function(){function e(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}var n=e.prototype;return n.addScene=function(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)},n.removeScene=function(e){const n=this._scenes.indexOf(e);n>=0&&this._scenes.splice(n,1)},n.forEachScene=function(e){this._scenes.forEach(e)},e}();e.Asset=n,Object.defineProperty(e,"__esModule",{value:!0})}));
