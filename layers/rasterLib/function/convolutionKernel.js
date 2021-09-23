// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define([],(function(){var e={Default:[0,0,0,0,1,0,0,0,0],LineDetectionHorizontal:[-1,-1,-1,2,2,2,-1,-1,-1],LineDetectionVertical:[-1,2,-1,-1,2,-1,-1,2,-1],LineDetectionLeftDiagonal:[2,-1,-1,-1,2,-1,-1,-1,2],LineDetectionRightDiagonal:[-1,-1,2,-1,2,-1,2,-1,-1],GradientNorth:[-1,-2,-1,0,0,0,1,2,1],GradientWest:[-1,0,1,-2,0,2,-1,0,1],GradientEast:[1,0,-1,2,0,-2,1,0,-1],GradientSouth:[1,2,1,0,0,0,-1,-2,-1],GradientNorthEast:[0,-1,-2,1,0,-1,2,1,0],GradientNorthWest:[-2,-1,0,-1,0,1,0,1,2],SmoothArithmeticMean:[.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111],Smoothing3x3:[.0625,.125,.0625,.125,.25,.125,.0625,.125,.0625],Smoothing5x5:[1,1,1,1,1,1,4,4,4,1,1,4,12,4,1,1,4,4,4,1,1,1,1,1,1],Sharpening3x3:[-1,-1,-1,-1,9,-1,-1,-1,-1],Sharpening5x5:[-1,-3,-4,-3,-1,-3,0,6,0,-3,-4,6,21,6,-4,-3,0,6,0,-3,-1,-3,-4,-3,-1],Laplacian3x3:[0,-1,0,-1,4,-1,0,-1,0],Laplacian5x5:[0,0,-1,0,0,0,-1,-2,-1,0,-1,-2,17,-2,-1,0,-1,-2,-1,0,0,0,-1,0,0],SobelHorizontal:[-1,-2,-1,0,0,0,1,2,1],SobelVertical:[-1,0,1,-2,0,2,-1,0,1],Sharpen:[0,-.25,0,-.25,2,-.25,0,-.25,0],Sharpen2:[-.25,-.25,-.25,-.25,3,-.25,-.25,-.25,-.25],PointSpread:[-.627,.352,-.627,.352,2.923,.352,-.627,.352,-.627],getKernel:function(t){switch(t){case 0:return e.LineDetectionHorizontal;case 1:return e.LineDetectionVertical;case 2:return e.LineDetectionLeftDiagonal;case 3:return e.LineDetectionRightDiagonal;case 4:return e.GradientNorth;case 5:return e.GradientWest;case 6:return e.GradientEast;case 7:return e.GradientSouth;case 8:return e.GradientNorthEast;case 9:return e.GradientNorthWest;case 10:return e.SmoothArithmeticMean;case 11:return e.Smoothing3x3;case 12:return e.Smoothing5x5;case 13:return e.Sharpening3x3;case 14:return e.Sharpening5x5;case 15:return e.Laplacian3x3;case 16:return e.Laplacian5x5;case 17:return e.SobelHorizontal;case 18:return e.SobelVertical;case 19:return e.Sharpen;case 20:return e.Sharpen2;case 21:return e.PointSpread;default:return e.Default}}};return e}));