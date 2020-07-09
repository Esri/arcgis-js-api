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

define(["require","exports","./effects/EffectAddControlPoints","./effects/EffectArrow","./effects/EffectBuffer","./effects/EffectCut","./effects/EffectDashes","./effects/EffectDonut","./effects/EffectJog","./effects/EffectMove","./effects/EffectOffset","./effects/EffectReverse","./effects/EffectRotate","./effects/EffectScale","./effects/EffectWave","./placements/PlacementAlongLineSameSize","./placements/PlacementAtExtremities","./placements/PlacementAtRatioPositions","./placements/PlacementOnLine","./placements/PlacementOnVertices","./placements/PlacementPolygonCenter"],(function(e,t,c,f,r,n,a,l,o,s,i,m,E,u,M,P,C,I,A,G,p){Object.defineProperty(t,"__esModule",{value:!0}),t.getEffectOperator=function(e){if(!e)return null;switch(e.type){case"CIMGeometricEffectAddControlPoints":return c.EffectAddControlPoints.local();case"CIMGeometricEffectArrow":return f.EffectArrow.local();case"CIMGeometricEffectBuffer":return r.EffectBuffer.local();case"CIMGeometricEffectCut":return n.EffectCut.local();case"CIMGeometricEffectDashes":return a.EffectDashes.local();case"CIMGeometricEffectDonut":return l.EffectDonut.local();case"CIMGeometricEffectJog":return o.EffectJog.local();case"CIMGeometricEffectMove":return s.EffectMove.local();case"CIMGeometricEffectOffset":return i.EffectOffset.local();case"CIMGeometricEffectReverse":return m.EffectReverse.local();case"CIMGeometricEffectRotate":return E.EffectRotate.local();case"CIMGeometricEffectScale":return u.EffectScale.local();case"CIMGeometricEffectWave":return M.EffectWave.local()}return null},t.getPlacementOperator=function(e){if(!e)return null;switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":return P.PlacementAlongLineSameSize.local();case"CIMMarkerPlacementAtExtremities":return C.PlacementAtExtremities.local();case"CIMMarkerPlacementAtRatioPositions":return I.PlacementAtRatioPositions.local();case"CIMMarkerPlacementOnLine":return A.PlacementOnLine.local();case"CIMMarkerPlacementOnVertices":return G.PlacementOnVertices.local();case"CIMMarkerPlacementPolygonCenter":return p.PlacementPolygonCenter.local()}return null}}));