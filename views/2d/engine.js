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

define(["require","exports","./engine/Bitmap","./engine/BitmapContainer","./engine/BitmapTile","./engine/Container","./engine/DisplayObject","./engine/Stage","./engine/webgl/AttributeStoreView","./engine/webgl/collisions/CollisionGrid","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter","./engine/webgl/Geometry","./engine/webgl/alignmentUtils","./engine/webgl/color","./engine/webgl/definitions","./engine/webgl/enums","./engine/webgl/fontUtils","./engine/webgl/Utils","./engine/webgl/util/debug","./engine/webgl/TileClipper","./engine/webgl/TurboLine","./engine/webgl/mesh/factories/matcherUtils","./engine/webgl/mesh/factories/WGLMeshFactory","./engine/webgl/mesh/MeshData","./engine/webgl/mesh/templates/WGLTemplateStore","./engine/webgl/Painter","./engine/webgl/TextShaping","./engine/webgl/TextShapingNew","./engine/webgl/TileData","./engine/webgl/util/BidiText","./engine/webgl/util/Matcher","./engine/webgl/util/vvFlagUtils","./engine/webgl/visualVariablesUtils","./engine/webgl/WGLRendererInfo","./engine/webgl/WGLTile","./engine/webgl/BitBlitRenderer","./engine/webgl/shaders/MagnifierPrograms","../../symbols/cim/CIMSymbolHelper","./engine/webgl/Rect","./engine/webgl/mesh/templates/util"],function(e,i,n,t,l,g,a,r,o,s,b,p,w,m,T,c,S,u,h,d,f,C,B,L,M,y,V,G,x,W,D,P,U,F,O,R,I,j,v,A,E){Object.defineProperty(i,"__esModule",{value:!0}),i.Bitmap=n.Bitmap,i.BitmapContainer=t.BitmapContainer,i.BitmapTile=l.BitmapTile,i.Container=g.Container,i.DisplayObject=a.DisplayObject,i.Stage=r.Stage,i.AttributeStoreView=o.AttributeStoreView,i.CollisionGrid=s.CollisionGrid,i.CollisionEngine=b.CollisionEngine,i.LayerViewSorter=p.LayerViewSorter,i.Point=w.Point,i.alignmentUtils=m,i.color=T,i.definitions=c,i.enums=S,i.fontUtils=u,i.Utils=h,i.debug=d,i.TileClipper=f.TileClipper,i.SimpleBuilder=f.SimpleBuilder,i.tessellate=C.tessellate,i.TessellationState=C.TessellationState,i.splitVertex=C.splitVertex,i.createMatcher=B.createMatcher,i.WGLMeshFactory=L.WGLMeshFactory,i.MeshData=M.MeshData,i.WGLTemplateStore=y.WGLTemplateStore,i.PainterOptions=V.PainterOptions,i.TextShaping=G.TextShaping,i.TextShapingNew=x.TextShaping,i.TileData=W.TileData,i.bidiText=D.bidiText,i.FeatureMatcher=P.FeatureMatcher,i.getVVFlags=U.getVVFlags,i.getTypeOfSizeVisualVariable=F.getTypeOfSizeVisualVariable,i.WGLRendererInfo=O.WGLRendererInfo,i.WGLTile=R.WGLTile,i.BitBlitRenderer=I.BitBlitRenderer,i.createMagnifierProgram=j.createMagnifierProgram,i.magnifier=j.magnifier,i.CIMSymbolHelper=v.CIMSymbolHelper,i.Rect=A.default,i.getLimitCosine=E.getLimitCosine});