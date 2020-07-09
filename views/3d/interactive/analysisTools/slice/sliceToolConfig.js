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

define(["require","exports","tslib","../../../../../core/has","../../../../../core/mathUtils"],(function(_,E,T,R,A){Object.defineProperty(E,"__esModule",{value:!0}),E.forceHorizontalModifier=R("mac")?"Meta":"Control",E.forceVerticalModifier="Shift",E.DISPLAY_FOCUS_MULTIPLIER=2,E.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER=1.15,E.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER=1.15,E.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER=1.1,E.POINTER_MOVE_TIMER_MS=2500,E.INITIAL_DEPTH_OFFSET_FRAC=.02,E.VERTICAL_DOT_THRESHOLD=Math.cos(A.deg2rad(45)),E.SMALL_ANGLE_DOT_THRESHOLD=Math.cos(A.deg2rad(5)),E.PREVIEW_FADE_DOT_THRESHOLD=.95,E.PREVIEW_FADE_DURATION_SECONDS=.3,E.HANDLE_OPACITY=.7,E.HANDLE_COLOR=[1,.5,0],E.PLANE_OUTLINE_WIDTH=2,E.PLANE_OUTLINE_COLOR=T.__spreadArrays(E.HANDLE_COLOR,[E.HANDLE_OPACITY]),E.PLANE_BACKGROUND_COLOR=[0,0,0,.04],E.GRID_COLOR=T.__spreadArrays(E.HANDLE_COLOR,[.5]),E.ROTATE_HEADING_CALLOUT_COLOR=T.__spreadArrays(E.HANDLE_COLOR,[1]),E.SHIFT_RESTART_ARROW_TIP_COLOR=[1,1,1,1],E.SHIFT_RESTART_ARROW_CAP_COLOR=[1,.8,.6,1],E.SHIFT_RESTART_TUBE_COLOR=[1,.93,.86,1],E.SHIFT_RESTART_CALLOUT_COLOR=T.__spreadArrays(E.HANDLE_COLOR,[1]),E.SHIFT_RESTART_OUTLINE_COLOR=T.__spreadArrays(E.HANDLE_COLOR,[1]),E.SHIFT_RESTART_TUBE_RADIUS=3,E.SHIFT_RESTART_TIP_RADIUS=11,E.SHIFT_RESTART_TIP_LENGTH=22.5,E.SHIFT_RESTART_OFFSET_DISTANCE=40,E.SHIFT_RESTART_ARROW_LENGTH=48,E.SHIFT_RESTART_ARROW_OUTLINE_WIDTH=2.25,E.RESIZE_HANDLE_CORNER_WIDTH=4,E.RESIZE_HANDLE_EDGE_WIDTH=1,E.RESIZE_HANDLE_EDGE_PADDING_FRAC=.3,E.RESIZE_HANDLE_CORNER_INPUT_RADIUS=6,E.RESIZE_HANDLE_EDGE_INPUT_RADIUS=4,E.ROTATE_HEADING_TIP_LENGTH=12,E.ROTATE_HEADING_OFFSET_DISTANCE=40,E.ROTATE_HEADING_DISC_RADIUS=27,E.PLANE_MIN_BASIS_SCREEN_LEN2=1600,E.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION=.4}));