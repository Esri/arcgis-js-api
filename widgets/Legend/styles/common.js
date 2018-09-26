// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../support/relationshipRampUtils","../support/styleUtils","../../support/widget"],function(a,e,l,s,i){function r(a,e){var r=a.focus,o=a.labels,d=!!r,b=l.renderRamp(a,e);return d?i.tsx("div",{class:t.diamondContainer},i.tsx("div",{class:t.diamondLeftCol},o.left),i.tsx("div",{class:t.diamondMidCol},i.tsx("div",{class:t.diamondMidColLabel},o.top),i.tsx("div",{class:t.diamondMidColRamp,bind:b,afterCreate:s.attachToNode}),i.tsx("div",{class:t.diamondMidColLabel},o.bottom)),i.tsx("div",{class:t.diamondRightCol},o.right)):i.tsx("div",{class:t.squareTable},i.tsx("div",{class:t.squareTableRow},i.tsx("div",{class:i.classes(t.squareTableCell,t.squareTableLabel,t.squareTableLabelRightBottom)},o.left),i.tsx("div",{class:t.squareTableCell}),i.tsx("div",{class:i.classes(t.squareTableCell,t.squareTableLabel,t.squareTableLabelLeftBottom)},o.top)),i.tsx("div",{class:t.squareTableRow},i.tsx("div",{class:t.squareTableCell}),i.tsx("div",{class:t.squareTableCell,bind:b,afterCreate:s.attachToNode}),i.tsx("div",{class:t.squareTableCell})),i.tsx("div",{class:t.squareTableRow},i.tsx("div",{class:i.classes(t.squareTableCell,t.squareTableLabel,t.squareTableLabelRightTop)},o.bottom),i.tsx("div",{class:t.squareTableCell}),i.tsx("div",{class:i.classes(t.squareTableCell,t.squareTableLabel,t.squareTableLabelLeftTop)},o.right)))}Object.defineProperty(e,"__esModule",{value:!0});var t={diamondContainer:"esri-relationship-ramp--diamond__container",diamondLeftCol:"esri-relationship-ramp--diamond__left-column",diamondRightCol:"esri-relationship-ramp--diamond__right-column",diamondMidCol:"esri-relationship-ramp--diamond__middle-column",diamondMidColLabel:"esri-relationship-ramp--diamond__middle-column--label",diamondMidColRamp:"esri-relationship-ramp--diamond__middle-column--ramp",squareTable:"esri-relationship-ramp--square__table",squareTableRow:"esri-relationship-ramp--square__table-row",squareTableCell:"esri-relationship-ramp--square__table-cell",squareTableLabel:"esri-relationship-ramp--square__table-label",squareTableLabelLeftBottom:"esri-relationship-ramp--square__table-label--left-bottom",squareTableLabelRightBottom:"esri-relationship-ramp--square__table-label--right-bottom",squareTableLabelLeftTop:"esri-relationship-ramp--square__table-label--left-top",squareTableLabelRightTop:"esri-relationship-ramp--square__table-label--right-top"};e.renderRelationshipRamp=r});