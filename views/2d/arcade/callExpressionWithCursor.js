/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../core/Logger","../../../core/maybe"],(function(e,r){"use strict";function a(a,t,n){if(r.isNone(a))return null;const u=t.readArcadeFeature();try{return a.evaluate({...n,$feature:u})}catch(c){return e.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}return a}));
