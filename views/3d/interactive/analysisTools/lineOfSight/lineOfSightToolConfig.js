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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../Color","../../../../../core/Accessor","../../../../../core/accessorSupport/decorators"],(function(e,r,o,t,i,p,n){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(r){var o=e.call(this,r)||this;return o.laserLineEnabled=!0,o.laserLineGlowColor=new i([255,127,0]),o.laserLineGlowWidth=8,o.laserLineInnerColor=new i([255,255,255]),o.laserLineInnerWidth=.75,o.laserLineGlobalAlpha=.75,o.observerManipulatorSize=.5,o.observerManipulatorColor=new i([255,127,0,.75]),o.targetManipulatorSize=.5,o.targetManipulatorVisibleColor=new i([3,252,111,.75]),o.targetManipulatorOccludedColor=new i([252,3,69,.75]),o.targetManipulatorUndefinedColor=new i([127,127,127,.75]),o.lineOfSightInnerWidth=2,o.lineOfSightOuterWidth=8,o.lineOfSightVisibleInnerColor=new i([3,252,111,1]),o.lineOfSightVisibleOuterColor=new i([3,252,111,.15]),o.lineOfSightOccludedInnerColor=new i([252,3,69,1]),o.lineOfSightOccludedOuterColor=new i([252,3,69,.1]),o.lineOfSightUndefinedInnerColor=new i([255,255,255,1]),o.lineOfSightUndefinedOuterColor=new i([127,127,127,.2]),o}return o(r,e),t([n.property({type:Boolean})],r.prototype,"laserLineEnabled",void 0),t([n.property({type:i})],r.prototype,"laserLineGlowColor",void 0),t([n.property({type:Number})],r.prototype,"laserLineGlowWidth",void 0),t([n.property({type:i})],r.prototype,"laserLineInnerColor",void 0),t([n.property({type:Number})],r.prototype,"laserLineInnerWidth",void 0),t([n.property({type:Number})],r.prototype,"laserLineGlobalAlpha",void 0),t([n.property({type:Number})],r.prototype,"observerManipulatorSize",void 0),t([n.property({type:i})],r.prototype,"observerManipulatorColor",void 0),t([n.property({type:Number})],r.prototype,"targetManipulatorSize",void 0),t([n.property({type:i})],r.prototype,"targetManipulatorVisibleColor",void 0),t([n.property({type:i})],r.prototype,"targetManipulatorOccludedColor",void 0),t([n.property({type:i})],r.prototype,"targetManipulatorUndefinedColor",void 0),t([n.property({type:Number})],r.prototype,"lineOfSightInnerWidth",void 0),t([n.property({type:Number})],r.prototype,"lineOfSightOuterWidth",void 0),t([n.property({type:i})],r.prototype,"lineOfSightVisibleInnerColor",void 0),t([n.property({type:i})],r.prototype,"lineOfSightVisibleOuterColor",void 0),t([n.property({type:i})],r.prototype,"lineOfSightOccludedInnerColor",void 0),t([n.property({type:i})],r.prototype,"lineOfSightOccludedOuterColor",void 0),t([n.property({type:i})],r.prototype,"lineOfSightUndefinedInnerColor",void 0),t([n.property({type:i})],r.prototype,"lineOfSightUndefinedOuterColor",void 0),r=t([n.subclass("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightConfiguration")],r)}(n.declared(p));r.Configuration=l}));