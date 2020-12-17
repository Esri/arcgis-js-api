/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../core/Logger"],(function(e){"use strict";return function(r,t,a){r.referencesGeometry();const n=t.readArcadeFeature();try{return r.evaluate({...a,$feature:n})}catch(r){return e.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",r),null}}}));
