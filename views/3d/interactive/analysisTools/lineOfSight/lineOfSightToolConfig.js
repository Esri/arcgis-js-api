// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../Color","../../../../../core/Accessor","../../../../../core/accessorSupport/decorators"],(function(e,o,r,t,i,p){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Configuration=void 0;var n=function(e){function o(o){var r=e.call(this,o)||this;return r.laserLineEnabled=!0,r.laserLineGlowColor=new t([255,127,0]),r.laserLineGlowWidth=8,r.laserLineInnerColor=new t([255,255,255]),r.laserLineInnerWidth=.75,r.laserLineGlobalAlpha=.75,r.observerManipulatorSize=.5,r.observerManipulatorColor=new t([255,127,0,.75]),r.targetManipulatorSize=.5,r.targetManipulatorVisibleColor=new t([3,252,111,.75]),r.targetManipulatorOccludedColor=new t([252,3,69,.75]),r.targetManipulatorUndefinedColor=new t([127,127,127,.75]),r.lineOfSightInnerWidth=2,r.lineOfSightOuterWidth=8,r.lineOfSightVisibleInnerColor=new t([3,252,111,1]),r.lineOfSightVisibleOuterColor=new t([3,252,111,.15]),r.lineOfSightOccludedInnerColor=new t([252,3,69,1]),r.lineOfSightOccludedOuterColor=new t([252,3,69,.1]),r.lineOfSightUndefinedInnerColor=new t([255,255,255,1]),r.lineOfSightUndefinedOuterColor=new t([127,127,127,.2]),r}return r.__extends(o,e),r.__decorate([p.property({type:Boolean})],o.prototype,"laserLineEnabled",void 0),r.__decorate([p.property({type:t})],o.prototype,"laserLineGlowColor",void 0),r.__decorate([p.property({type:Number})],o.prototype,"laserLineGlowWidth",void 0),r.__decorate([p.property({type:t})],o.prototype,"laserLineInnerColor",void 0),r.__decorate([p.property({type:Number})],o.prototype,"laserLineInnerWidth",void 0),r.__decorate([p.property({type:Number})],o.prototype,"laserLineGlobalAlpha",void 0),r.__decorate([p.property({type:Number})],o.prototype,"observerManipulatorSize",void 0),r.__decorate([p.property({type:t})],o.prototype,"observerManipulatorColor",void 0),r.__decorate([p.property({type:Number})],o.prototype,"targetManipulatorSize",void 0),r.__decorate([p.property({type:t})],o.prototype,"targetManipulatorVisibleColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"targetManipulatorOccludedColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"targetManipulatorUndefinedColor",void 0),r.__decorate([p.property({type:Number})],o.prototype,"lineOfSightInnerWidth",void 0),r.__decorate([p.property({type:Number})],o.prototype,"lineOfSightOuterWidth",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightVisibleInnerColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightVisibleOuterColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightOccludedInnerColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightOccludedOuterColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightUndefinedInnerColor",void 0),r.__decorate([p.property({type:t})],o.prototype,"lineOfSightUndefinedOuterColor",void 0),o=r.__decorate([p.subclass("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightConfiguration")],o)}(i);o.Configuration=n}));