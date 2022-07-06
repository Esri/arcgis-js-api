/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../core/Logger.js";function r(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(o){return e.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}export{r as default};
