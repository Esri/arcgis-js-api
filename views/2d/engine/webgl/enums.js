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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(E,T){var L,I,A,O,N,S,_,e,R,U;Object.defineProperty(T,"__esModule",{value:!0}),(L=T.WGLGeometryType||(T.WGLGeometryType={}))[L.FILL=0]="FILL",L[L.LINE=1]="LINE",L[L.MARKER=2]="MARKER",L[L.TEXT=3]="TEXT",L[L.LABEL=4]="LABEL",(I=T.WGLGeometryTransactionStatus||(T.WGLGeometryTransactionStatus={}))[I.SUCCEEDED=0]="SUCCEEDED",I[I.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(A=T.WGLDrawPhase||(T.WGLDrawPhase={}))[A.NONE=0]="NONE",A[A.MAP=1]="MAP",A[A.LABEL=2]="LABEL",A[A.LABEL_ALPHA=4]="LABEL_ALPHA",A[A.HITTEST=8]="HITTEST",A[A.HIGHLIGHT=16]="HIGHLIGHT",A[A.CLIP=32]="CLIP",A[A.DEBUG=64]="DEBUG",A[A.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(O=T.VVType||(T.VVType={}))[O.SIZE=0]="SIZE",O[O.COLOR=1]="COLOR",O[O.OPACITY=2]="OPACITY",O[O.ROTATION=3]="ROTATION",(N=T.WGLVVFlag||(T.WGLVVFlag={}))[N.NONE=0]="NONE",N[N.OPACITY=1]="OPACITY",N[N.COLOR=2]="COLOR",N[N.ROTATION=4]="ROTATION",N[N.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",N[N.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",N[N.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",N[N.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(S=T.WGLVVTarget||(T.WGLVVTarget={}))[S.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",S[S.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",S[S.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",S[S.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(_=T.CapType||(T.CapType={}))[_.UNKNOWN=0]="UNKNOWN",_[_.BUTT=1]="BUTT",_[_.ROUND=2]="ROUND",_[_.SQUARE=3]="SQUARE",(e=T.JoinType||(T.JoinType={}))[e.UNKNOWN=0]="UNKNOWN",e[e.MITER=1]="MITER",e[e.BEVEL=2]="BEVEL",e[e.ROUND=3]="ROUND",(R=T.Alignment||(T.Alignment={}))[R.SCREEN=0]="SCREEN",R[R.MAP=1]="MAP",(U=T.MosaicType||(T.MosaicType={}))[U.SPRITE=0]="SPRITE",U[U.GLYPH=1]="GLYPH"});