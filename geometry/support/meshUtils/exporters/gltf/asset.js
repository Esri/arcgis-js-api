/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/arrayUtils"],(function(e,t){"use strict";let n=function(){function e(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}var n=e.prototype;return n.addScene=function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)},n.removeScene=function(e){t.remove(this._scenes,e)},n.forEachScene=function(e){this._scenes.forEach(e)},e}();e.Asset=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
