/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import t from"../SmartMappingPrimaryHandleSliderViewModel.js";let e=class extends t{constructor(r){super(r)}get stops(){return this.stops}getStopInfo(){const{min:r,max:o,stops:s}=this;return s&&s.length?s.map((s=>({color:s.color,offset:(o-s.value)/(o-r)}))):[]}};r([o()],e.prototype,"stops",null),e=r([s("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],e);const p=e;export{p as default};
