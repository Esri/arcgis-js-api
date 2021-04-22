/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/urlUtils","../../../../../core/uuid","../../../../../portal/support/resourceExtension","../../../../../chunks/vec3f64","../../../support/geometryUtils","../../utils/navigationUtils","./MomentumController"],(function(t,o,e,r,n,s,l,c,u,i,a,p,m,y,_){"use strict";t.RotationMomentumController=function(t){function e(o){var e;return(e=t.call(this,o)||this).interactionType=2,e}return o._inheritsLoose(e,t),e.prototype.momentumStep=function(t,o){const e=this.momentum.value(t);y.applyRotation(o,this.center,m.axisAngle.wrapAxisAngle(this.axis,e))},o._createClass(e,[{key:"center",set:function(t){this._set("center",p.clone(t))}},{key:"axis",set:function(t){this._set("axis",p.clone(t))}}]),e}(_.MomentumController),e.__decorate([l.property({constructOnly:!0})],t.RotationMomentumController.prototype,"momentum",void 0),e.__decorate([l.property({constructOnly:!0})],t.RotationMomentumController.prototype,"center",null),e.__decorate([l.property({constructOnly:!0})],t.RotationMomentumController.prototype,"axis",null),t.RotationMomentumController=e.__decorate([c.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],t.RotationMomentumController),Object.defineProperty(t,"__esModule",{value:!0})}));
