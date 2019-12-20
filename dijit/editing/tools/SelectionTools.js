// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../../../layers/FeatureLayer","../../../toolbars/draw","../../../kernel"],function(e,o,l,n,c){var t={select:{id:"btnNewSelection",_enabledIcon:"toolbarIcon newSelectionIcon",_disabledIcon:"toolbarIcon newSelectionIcon",_drawType:n.EXTENT,_selectMethod:l.SELECTION_NEW,_label:"NLS_selectionNewLbl"},selectadd:{id:"btnAddToSelection",_enabledIcon:"toolbarIcon addToSelectionIcon",_disabledIcon:"toolbarIcon addToSelectionIcon",_drawType:n.EXTENT,_selectMethod:l.SELECTION_ADD,_label:"NLS_selectionAddLbl"},selectremove:{id:"btnSubtractFromSelection",_enabledIcon:"toolbarIcon removeFromSelectionIcon",_disabledIcon:"toolbarIcon removeFromSelectionIcon",_drawType:n.EXTENT,_selectMethod:l.SELECTION_SUBTRACT,_label:"NLS_selectionRemoveLbl"},selectClear:{id:"btnClearSelection",_enabledIcon:"toolbarIcon clearSelectionIcon",_disabledIcon:"toolbarIcon clearSelectionIcon",_enabled:!1,_label:"NLS_selectionClearLbl"}};return o("extend-esri")&&e.setObject("dijit.editing.tools.SelectionTools",t,c),t});