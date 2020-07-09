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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n=t.HAlign||(t.HAlign={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r=t.VAlign||(t.VAlign={})),t.getXAnchorDirection=function(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}},t.getYAnchorDirection=function(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}},t.getAlignmentFromPlacement=function(e){switch(e){case"above-left":return[n.Right,r.Bottom];case"above-center":case"above-along":return[n.Center,r.Bottom];case"above-right":return[n.Left,r.Bottom];case"center-left":return[n.Right,r.Center];case"center-center":case"center-along":return[n.Center,r.Center];case"center-right":return[n.Left,r.Center];case"below-left":return[n.Right,r.Top];case"below-center":case"below-along":return[n.Center,r.Top];case"below-right":return[n.Left,r.Top];case"always-horizontal":return[n.Center,r.Baseline];default:return console.debug("Found invalid placement type "+e),[n.Center,r.Center]}},t.getXDirection=function(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug("Found invalid horizontal alignment "+e),0}},t.getYDirection=function(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug("Found invalid vertical alignment "+e),0}},t.getJustification=function(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}}}));