/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3f64"],(function(e,t,o,i,r,s,n,a,c,l){"use strict";e.LineOfSightAnalysis=function(e){function o(t){var o;return(o=e.call(this,t)||this).elevationAlignedTargetLocation=null,o.inputPoints={isValid:!1,observer:l.create(),observerSurfaceNormal:null,target:l.create(),targetSurfaceNormal:null,observerAdjusted:l.create(),targetAdjusted:l.create()},o.computationResult={start:l.create(),end:l.create(),intersection:l.create(),isValid:!1,isTargetVisible:!1},o.result=null,o}t._inheritsLoose(o,e);var i=o.prototype;return i.updateComputationResults=function(){this.notifyChange("computationResult")},i.updateInputPoints=function(){this.notifyChange("inputPoints")},i.onElevationChange=function(){this.notifyChange("elevationAlignedTargetLocation")},o}(i),o.__decorate([r.property()],e.LineOfSightAnalysis.prototype,"target",void 0),o.__decorate([r.property()],e.LineOfSightAnalysis.prototype,"elevationAlignedTargetLocation",void 0),o.__decorate([r.property()],e.LineOfSightAnalysis.prototype,"inputPoints",void 0),o.__decorate([r.property()],e.LineOfSightAnalysis.prototype,"computationResult",void 0),o.__decorate([r.property()],e.LineOfSightAnalysis.prototype,"result",void 0),e.LineOfSightAnalysis=o.__decorate([c.subclass("esri.views.3d.layers.analysis.LineOfSight.LineOfSightAnalysis")],e.LineOfSightAnalysis),Object.defineProperty(e,"__esModule",{value:!0})}));
