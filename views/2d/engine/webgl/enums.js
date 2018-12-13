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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(E,T){var L,I,N,S,O,_,A,e,R,U;Object.defineProperty(T,"__esModule",{value:!0}),(L=T.WGLGeometryType||(T.WGLGeometryType={}))[L.FILL=0]="FILL",L[L.LINE=1]="LINE",L[L.MARKER=2]="MARKER",L[L.TEXT=3]="TEXT",L[L.LABEL=4]="LABEL",L[L.NONE=5]="NONE",L[L.UNKNOWN=6]="UNKNOWN",L[L.COUNT=7]="COUNT",(I=T.WGLGeometryTransactionStatus||(T.WGLGeometryTransactionStatus={}))[I.SUCCEEDED=0]="SUCCEEDED",I[I.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(N=T.WGLDrawPhase||(T.WGLDrawPhase={}))[N.NONE=0]="NONE",N[N.MAP=1]="MAP",N[N.LABEL=2]="LABEL",N[N.LABEL_ALPHA=4]="LABEL_ALPHA",N[N.HITTEST=8]="HITTEST",N[N.HIGHLIGHT=16]="HIGHLIGHT",N[N.CLIP=32]="CLIP",N[N.DEBUG=64]="DEBUG",N[N.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(S=T.VVType||(T.VVType={}))[S.SIZE=0]="SIZE",S[S.COLOR=1]="COLOR",S[S.OPACITY=2]="OPACITY",S[S.ROTATION=3]="ROTATION",(O=T.WGLVVFlag||(T.WGLVVFlag={}))[O.NONE=0]="NONE",O[O.OPACITY=1]="OPACITY",O[O.COLOR=2]="COLOR",O[O.ROTATION=4]="ROTATION",O[O.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",O[O.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",O[O.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",O[O.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(_=T.WGLVVTarget||(T.WGLVVTarget={}))[_.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",_[_.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",_[_.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",_[_.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(A=T.CapType||(T.CapType={}))[A.UNKNOWN=0]="UNKNOWN",A[A.BUTT=1]="BUTT",A[A.ROUND=2]="ROUND",A[A.SQUARE=3]="SQUARE",(e=T.JoinType||(T.JoinType={}))[e.UNKNOWN=0]="UNKNOWN",e[e.MITER=1]="MITER",e[e.BEVEL=2]="BEVEL",e[e.ROUND=3]="ROUND",(R=T.EsriSymbolType||(T.EsriSymbolType={})).SIMPLE_MARKER="esriSMS",R.SIMPLE_LINE="esriSLS",R.SIMPLE_FILL="esriSFS",R.PICTURE_MARKER="esriPMS",R.PICTURE_FILL="esriPFS",R.TEXT="esriTS",(U=T.EsriSymbolTypeKebab||(T.EsriSymbolTypeKebab={})).SIMPLE_MARKER="simple-marker",U.SIMPLE_LINE="simple-line",U.SIMPLE_FILL="simple-fill",U.PICTURE_MARKER="picture-marker",U.PICTURE_FILL="picture-fill",U.TEXT="text"});