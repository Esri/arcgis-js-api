/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/boundedPlane"],(function(e,n){"use strict";const t=n.create();return function(){function u(){this._plane=n.create()}return e._createClass(u,[{key:"isEnabled",get:function(){return!n.equals(this.plane,t)}},{key:"plane",get:function(){return this._plane},set:function(e){n.copy(e||t,this._plane)}}]),u}()}));
