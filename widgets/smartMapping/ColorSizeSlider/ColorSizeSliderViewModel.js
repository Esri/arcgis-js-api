/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import e from"../SizeSlider/SizeSliderViewModel.js";let t=class extends e{constructor(o){super(o)}get stops(){return this.stops}getStopInfo(){const{min:o,max:r,stops:s}=this;return s&&s.length?s.map((s=>({color:s.color,offset:(r-s.value)/(r-o)}))):[]}};o([r()],t.prototype,"stops",null),t=o([s("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],t);const p=t;export{p as default};
