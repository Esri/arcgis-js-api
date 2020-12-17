/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function t(t){this.materials={},this.stage=t}var i=t.prototype;return i.getMaterial=function(t){return this.materials[t]},i.addMaterial=function(t,i){this.materials[t]=i,this.stage.add(3,i)},i.dispose=function(){for(const t in this.materials)this.stage.remove(3,this.materials[t].id);this.materials={}},t}()}));
