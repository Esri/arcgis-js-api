// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../../../toolbars/draw","../../../kernel"],(function(o,e,l,n){var r={point:{id:"esriPointTool",_enabledIcon:"toolbarIcon pointIcon",_disabledIcon:"toolbarIcon pointIconDisabled",_drawType:l.POINT,_geomType:"esriGeometryPoint",_label:"NLS_pointLbl"},polyline:{id:"toolDrawFreehandPolyline",_enabledIcon:"toolbarIcon polylineIcon",_disabledIcon:"toolbarIcon polylineIconDisabled",_drawType:l.POLYLINE,_geomType:"esriGeometryPolyline",_label:"NLS_polylineLbl"},freehandpolyline:{id:"toolDrawPolyline",_enabledIcon:"toolbarIcon freehandPolylineIcon",_disabledIcon:"toolbarIcon freehandPolylineIcon",_drawType:l.FREEHAND_POLYLINE,_geomType:"esriGeometryPolyline",_label:"NLS_freehandPolylineLbl"},polygon:{id:"toolDrawPolygon",_enabledIcon:"toolbarIcon polygonIcon",_disabledIcon:"toolbarIcon polygonIconDisabled",_drawType:l.POLYGON,_geomType:"esriGeometryPolygon",_label:"NLS_polygonLbl"},freehandpolygon:{id:"toolDrawFreehandPolygon",_enabledIcon:"toolbarIcon freehandPolygonIcon",_disabledIcon:"toolbarIcon freehandPolygonIconDisabled",_drawType:l.FREEHAND_POLYGON,_label:"NLS_freehandPolygonLbl",_geomType:"esriGeometryPolygon"},autocomplete:{id:"btnFeatureAutoComplete",_enabledIcon:"toolbarIcon autoCompleteIcon",_disabledIcon:"toolbarIcon autoCompleteIcon",_drawType:l.POLYGON,_label:"NLS_autoCompleteLbl",_geomType:"esriGeometryPolygon"},rectangle:{id:"toolDrawRect",_enabledIcon:"toolbarIcon rectangleIcon",_disabledIcon:"toolbarIcon rectangleIcon",_drawType:l.RECTANGLE,_geomType:"esriGeometryPolygon",_label:"NLS_rectangleLbl"},arrow:{id:"toolDrawArrow",_enabledIcon:"toolbarIcon arrowIcon",_disabledIcon:"toolbarIcon arrowIcon",_drawType:l.ARROW,_geomType:"esriGeometryPolygon",_label:"NLS_arrowLbl"},uparrow:{id:"toolDrawArrowUp",_enabledIcon:"toolbarIcon arrowUpIcon",_disabledIcon:"toolbarIcon arrowUpIcon",_drawType:l.UP_ARROW,_geomType:"esriGeometryPolygon",_label:"NLS_arrowUpLbl"},downarrow:{id:"toolDrawDownArrow",_enabledIcon:"toolbarIcon arrowDownIcon",_disabledIcon:"toolbarIcon arrowDownIcon",_drawType:l.DOWN_ARROW,_geomType:"esriGeometryPolygon",_label:"NLS_arrowDownLbl"},leftarrow:{id:"toolDrawLeftArrow",_enabledIcon:"toolbarIcon arrowLeftIcon",_disabledIcon:"toolbarIcon arrowLeftIcon",_drawType:l.LEFT_ARROW,_geomType:"esriGeometryPolygon",_label:"NLS_arrowLeftLbl"},rightarrow:{id:"toolDrawRightArrow",_enabledIcon:"toolbarIcon arrowIcon",_disabledIcon:"toolbarIcon arrowIcon",_drawType:l.RIGHT_ARROW,_geomType:"esriGeometryPolygon",_label:"NLS_arrowRightLbl"},circle:{id:"toolDrawCircle",_enabledIcon:"toolbarIcon circleIcon",_disabledIcon:"toolbarIcon circleIcon",_drawType:l.CIRCLE,_geomType:"esriGeometryPolygon",_label:"NLS_circleLbl"},ellipse:{id:"toolDrawEllipse",_enabledIcon:"toolbarIcon ellipseIcon",_disabledIcon:"toolbarIcon ellipseIcon",_drawType:l.ELLIPSE,_geomType:"esriGeometryPolygon",_label:"NLS_ellipseLbl"},triangle:{id:"toolDrawTriangle",_enabledIcon:"toolbarIcon triangleIcon",_disabledIcon:"toolbarIcon triangleIcon",_drawType:l.TRIANGLE,_geomType:"esriGeometryPolygon",_label:"NLS_triangleLbl"},attributes:{id:"btnAttributes",_enabledIcon:"toolbarIcon attributesIcon",_disabledIcon:"toolbarIcon attributesIcon",_enabled:!1,_label:"NLS_attributesLbl"},del:{id:"btnDelete2",_enabledIcon:"toolbarIcon deleteFeatureIcon",_disabledIcon:"toolbarIcon deleteFeatureIcon",_enabled:!1,_label:"NLS_deleteLbl"},undo:{id:"btnUndo",_enabledIcon:"dijitEditorIcon dijitEditorIconUndo",_disabledIcon:"dijitEditorIcon dijitEditorIconUndo",_enabled:!1,_label:"NLS_undoLbl"},redo:{id:"btnRedo",_enabledIcon:"dijitEditorIcon dijitEditorIconRedo",_disabledIcon:"dijitEditorIcon dijitEditorIconRedo",_enabled:!1,_label:"NLS_redoLbl"}};return e("extend-esri")&&o.setObject("dijit.editing.tools.EditingTools",r,n),r}));