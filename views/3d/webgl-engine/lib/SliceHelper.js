/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../support/geometryUtils"],(function(e,n){"use strict";const t=n.boundedPlane.create();return function(){function n(){this._worldPlane=t}return e._createClass(n,[{key:"isEnabled",get:function(){return this.plane!==t}},{key:"plane",get:function(){return this._worldPlane},set:function(e){this._worldPlane=e||t}}]),n}()}));
