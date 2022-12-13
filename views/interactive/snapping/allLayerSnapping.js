/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/Collection","../../../core/reactiveUtils","./FeatureSnappingLayerSource","./Settings","./SnappingOptions"],(function(e,t,i,n,a,l){"use strict";function r(e,r){const o=new l({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:r?.distance??a.defaults.distance,touchSensitivityMultiplier:r?.touchSensitivityMultiplier??a.defaults.touchSensitivityMultiplier});return{...i.watch((()=>e.map?.allLayers?.toArray()??[]),(e=>{o.featureSources=new t(e.map((e=>new n({layer:e,enabled:!0}))))}),i.initial),options:o}}e.makeAllLayerSnappingOptions=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
