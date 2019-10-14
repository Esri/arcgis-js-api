// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./engine/Bitmap","./engine/BitmapContainer","./engine/BitmapTile","./engine/Container","./engine/webgl/TileContainer","./engine/DisplayObject","./engine/Stage","./engine/webgl/AttributeStoreView","./engine/webgl/collisions/CollisionGrid","./engine/webgl/collisions/CollisionEngine","./engine/webgl/collisions/LayerViewSorter","./engine/webgl/Geometry","./engine/webgl/alignmentUtils","./engine/webgl/color","./engine/webgl/definitions","./engine/webgl/enums","./engine/webgl/fontUtils","./engine/webgl/Utils","./engine/webgl/brushes/BrushBitmap","./engine/webgl/brushes/BrushClip","./engine/webgl/brushes/WGLBrushStencil","./engine/webgl/brushes/WGLGeometryBrush","./engine/webgl/brushes/WGLGeometryBrushFill","./engine/webgl/brushes/WGLGeometryBrushLabel","./engine/webgl/brushes/WGLGeometryBrushLine","./engine/webgl/brushes/WGLGeometryBrushMarker","./engine/webgl/brushes/WGLGeometryBrushText","./engine/webgl/util/debug","./engine/webgl/TileClipper","./engine/webgl/TurboLine","./engine/webgl/mesh/factories/matcherUtils","./engine/webgl/mesh/factories/WGLMeshFactory","./engine/webgl/mesh/MeshData","./engine/webgl/mesh/templates/WGLTemplateStore","./engine/webgl/Painter","./engine/webgl/TextShaping","./engine/webgl/TextShapingNew","./engine/webgl/TileData","./engine/webgl/util/BidiText","./engine/webgl/util/Matcher","./engine/webgl/util/vvFlagUtils","./engine/webgl/visualVariablesUtils","./engine/webgl/WGLRendererInfo","./engine/webgl/WGLTile","./engine/webgl/BitBlitRenderer","./engine/webgl/shaders/MagnifierPrograms","../../symbols/cim/CIMSymbolHelper","./engine/webgl/Rect","./engine/webgl/mesh/templates/util","./engine/webgl/painter/RenderPass","./engine/webgl/TiledDisplayObject","./engine/BitmapTileContainer"],function(e,i,n,t,l,r,a,g,s,o,b,u,p,w,m,h,d,T,c,f,B,G,L,S,y,C,M,W,V,x,D,P,O,F,R,U,j,I,v,A,E,H,k,z,N,_,q,J,K,Q,X,Y,Z,$){Object.defineProperty(i,"__esModule",{value:!0}),i.Bitmap=n.Bitmap,i.BitmapContainer=t.BitmapContainer,i.BitmapTile=l.BitmapTile,i.Container=r.Container,i.TileContainer=a.default,i.DisplayObject=g.DisplayObject,i.Stage=s.Stage,i.AttributeStoreView=o.AttributeStoreView,i.CollisionGrid=b.CollisionGrid,i.CollisionEngine=u.CollisionEngine,i.LayerViewSorter=p.LayerViewSorter,i.Point=w.Point,i.alignmentUtils=m,i.color=h,i.definitions=d,i.enums=T,i.fontUtils=c,i.Utils=f,i.debug=x,i.TileClipper=D.TileClipper,i.SimpleBuilder=D.SimpleBuilder,i.tessellate=P.tessellate,i.TessellationState=P.TessellationState,i.splitVertex=P.splitVertex,i.createMatcher=O.createMatcher,i.WGLMeshFactory=F.WGLMeshFactory,i.MeshData=R.MeshData,i.WGLTemplateStore=U.WGLTemplateStore,i.Painter=j.default,i.PainterOptions=j.PainterOptions,i.TextShaping=I.TextShaping,i.TextShapingNew=v.TextShaping,i.TileData=A.TileData,i.bidiText=E.bidiText,i.FeatureMatcher=H.FeatureMatcher,i.getVVFlags=k.getVVFlags,i.getTypeOfSizeVisualVariable=z.getTypeOfSizeVisualVariable,i.WGLRendererInfo=N.WGLRendererInfo,i.WGLTile=_.WGLTile,i.BitBlitRenderer=q.BitBlitRenderer,i.createMagnifierProgram=J.createMagnifierProgram,i.magnifier=J.magnifier,i.CIMSymbolHelper=K.CIMSymbolHelper,i.Rect=Q.default,i.getLimitCosine=X.getLimitCosine;!function(e){e.Geometry=S.default,e.Marker=W.default,e.Line=M.default,e.Fill=y.default,e.Text=V.default,e.Label=C.default,e.Clip=G.default,e.Stencil=L.default,e.Bitmap=B.default}(i.brushes||(i.brushes={})),i.RenderPass=Y.default,i.TiledDisplayObject=Z.TiledDisplayObject,i.BitmapTileContainer=$.BitmapTileContainer});