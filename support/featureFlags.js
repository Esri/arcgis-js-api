/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/has"],(function(e,a){"use strict";const t=()=>!!a("enable-feature:force-wosr"),r=()=>!!a("enable-feature:direct-3d-object-feature-layer-display"),n=()=>a.cache["enable-feature:direct-3d-object-feature-layer-display"]=!0,c=()=>!!a("enable-feature:SceneLayer-editing"),i=()=>{a.cache["enable-feature:SceneLayer-editing"]=!0,n()};e.enableDirect3DObjectFeatureLayerDisplay=r,e.enableSceneLayerEditing=i,e.enableWebStyleForceWOSR=t,e.sceneLayerEditingEnabled=c,e.turnOnDirect3DObjectFeatureLayerDisplay=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
