/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["./VoxelWasmPerScene"],(function(e){"use strict";return function(){function t(){this.view2WASM=new Map}t.getInstance=function(){return t.instance||(t.instance=new t),t.instance};var i=t.prototype;return i.isUpdating=function(e,t){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(t)},i.addLayer=function(t,i){return this.view2WASM.has(t)||this.view2WASM.set(t,new e(t)),this.view2WASM.get(t).addVoxelLayer(i)},i.removeLayer=function(e,t){if(this.view2WASM.has(e)){this.view2WASM.get(e).removeVoxelLayer(t)<1&&this.view2WASM.delete(e)}},i.setLayerEnabled=function(e,t,i){if(this.view2WASM.has(e)){this.view2WASM.get(e).setEnabled(t,i)}},t}()}));
