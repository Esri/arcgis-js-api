/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{VTLUniqueSymbol as t}from"./core.js";import{CollisionJob as e}from"./jobs.js";import{SymbolDeclutterer as r}from"./SymbolDeclutterer.js";import{SymbolRepository as o}from"./SymbolRepository.js";import{writeOpacityToBuffers as s}from"./util.js";import{Visibility as i}from"../style/StyleDefinition.js";function p(p,y){const a=[],m=new o(4096,a,(()=>{const e=new t;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),n=new r(a,m,((t,r,o)=>new e(t,r,o,p.styleRepository,p.key.level,0)),((t,e)=>{s(t,e,!1)}),(()=>0),(t=>{const e=y.getStyleLayerByUID(t).getLayoutProperty("visibility");return!e||e.getValue()!==i.NONE}));a.push(p),m.add(p),n.setScreenSize(512,512),n.continue(1/0)}export{p as declutterSingleTile};
