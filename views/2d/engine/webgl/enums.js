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

define(["require","exports"],(function(T,E){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.MosaicType=E.WGLVVTarget=E.WGLVVFlag=E.VVType=E.WGLDrawPhase=E.WGLGeometryTransactionStatus=E.WGLGeometryType=void 0,function(T){T[T.FILL=0]="FILL",T[T.LINE=1]="LINE",T[T.MARKER=2]="MARKER",T[T.TEXT=3]="TEXT",T[T.LABEL=4]="LABEL"}(E.WGLGeometryType||(E.WGLGeometryType={})),function(T){T[T.SUCCEEDED=0]="SUCCEEDED",T[T.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(E.WGLGeometryTransactionStatus||(E.WGLGeometryTransactionStatus={})),function(T){T[T.NONE=0]="NONE",T[T.MAP=1]="MAP",T[T.LABEL=2]="LABEL",T[T.LABEL_ALPHA=4]="LABEL_ALPHA",T[T.HITTEST=8]="HITTEST",T[T.HIGHLIGHT=16]="HIGHLIGHT",T[T.CLIP=32]="CLIP",T[T.DEBUG=64]="DEBUG",T[T.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(E.WGLDrawPhase||(E.WGLDrawPhase={})),function(T){T[T.SIZE=0]="SIZE",T[T.COLOR=1]="COLOR",T[T.OPACITY=2]="OPACITY",T[T.ROTATION=3]="ROTATION"}(E.VVType||(E.VVType={})),function(T){T[T.NONE=0]="NONE",T[T.OPACITY=1]="OPACITY",T[T.COLOR=2]="COLOR",T[T.ROTATION=4]="ROTATION",T[T.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",T[T.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",T[T.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",T[T.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(E.WGLVVFlag||(E.WGLVVFlag={})),function(T){T[T.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",T[T.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",T[T.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",T[T.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(E.WGLVVTarget||(E.WGLVVTarget={})),function(T){T[T.SPRITE=0]="SPRITE",T[T.GLYPH=1]="GLYPH"}(E.MosaicType||(E.MosaicType={}))}));