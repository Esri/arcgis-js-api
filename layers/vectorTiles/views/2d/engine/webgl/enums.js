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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports"],function(E,T){Object.defineProperty(T,"__esModule",{value:!0});!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL",E[E.NONE=5]="NONE",E[E.UNKNOWN=6]="UNKNOWN",E[E.COUNT=7]="COUNT"}(T.WGLGeometryType||(T.WGLGeometryType={}));!function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T.WGLGeometryTransactionStatus||(T.WGLGeometryTransactionStatus={}));!function(E){E[E.NONE=0]="NONE",E[E.FILL=1]="FILL",E[E.LINE=2]="LINE",E[E.MARKER=4]="MARKER",E[E.TEXT=8]="TEXT",E[E.LABEL=16]="LABEL",E[E.LABEL_ALPHA=32]="LABEL_ALPHA",E[E.HITTEST=64]="HITTEST",E[E.HIGHLIGHT=128]="HIGHLIGHT",E[E.CLIP=256]="CLIP",E[E.DEBUG=512]="DEBUG",E[E.NUM_DRAW_PHASES=12]="NUM_DRAW_PHASES"}(T.WGLDrawPhase||(T.WGLDrawPhase={}));!function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(T.VVType||(T.VVType={}));!function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(T.WGLVVFlag||(T.WGLVVFlag={}));!function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(T.WGLVVTarget||(T.WGLVVTarget={}));!function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.BUTT=1]="BUTT",E[E.ROUND=2]="ROUND",E[E.SQUARE=3]="SQUARE"}(T.CapType||(T.CapType={}));!function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.MITER=1]="MITER",E[E.BEVEL=2]="BEVEL",E[E.ROUND=3]="ROUND"}(T.JoinType||(T.JoinType={}));!function(E){E.SIMPLE_MARKER="esriSMS",E.SIMPLE_LINE="esriSLS",E.SIMPLE_FILL="esriSFS",E.PICTURE_MARKER="esriPMS",E.PICTURE_FILL="esriPFS",E.TEXT="esriTS"}(T.EsriSymbolType||(T.EsriSymbolType={}));!function(E){E.SIMPLE_MARKER="simple-marker",E.SIMPLE_LINE="simple-line",E.SIMPLE_FILL="simple-fill",E.PICTURE_MARKER="picture-marker",E.PICTURE_FILL="picture-fill",E.TEXT="text"}(T.EsriSymbolTypeKebab||(T.EsriSymbolTypeKebab={}))});