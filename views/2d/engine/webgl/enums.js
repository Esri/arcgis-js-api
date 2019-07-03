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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(E,T){var L,I,A,_,O,S,N;Object.defineProperty(T,"__esModule",{value:!0}),(L=T.WGLGeometryType||(T.WGLGeometryType={}))[L.FILL=0]="FILL",L[L.LINE=1]="LINE",L[L.MARKER=2]="MARKER",L[L.TEXT=3]="TEXT",L[L.LABEL=4]="LABEL",(I=T.WGLGeometryTransactionStatus||(T.WGLGeometryTransactionStatus={}))[I.SUCCEEDED=0]="SUCCEEDED",I[I.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(A=T.WGLDrawPhase||(T.WGLDrawPhase={}))[A.NONE=0]="NONE",A[A.MAP=1]="MAP",A[A.LABEL=2]="LABEL",A[A.LABEL_ALPHA=4]="LABEL_ALPHA",A[A.HITTEST=8]="HITTEST",A[A.HIGHLIGHT=16]="HIGHLIGHT",A[A.CLIP=32]="CLIP",A[A.DEBUG=64]="DEBUG",A[A.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(_=T.VVType||(T.VVType={}))[_.SIZE=0]="SIZE",_[_.COLOR=1]="COLOR",_[_.OPACITY=2]="OPACITY",_[_.ROTATION=3]="ROTATION",(O=T.WGLVVFlag||(T.WGLVVFlag={}))[O.NONE=0]="NONE",O[O.OPACITY=1]="OPACITY",O[O.COLOR=2]="COLOR",O[O.ROTATION=4]="ROTATION",O[O.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",O[O.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",O[O.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",O[O.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(S=T.WGLVVTarget||(T.WGLVVTarget={}))[S.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",S[S.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",S[S.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",S[S.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(N=T.MosaicType||(T.MosaicType={}))[N.SPRITE=0]="SPRITE",N[N.GLYPH=1]="GLYPH"});