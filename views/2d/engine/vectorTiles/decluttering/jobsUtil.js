/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util"],(function(e,t,o,r,i,s){"use strict";function y(e,y){const l=[],n=new i.SymbolRepository(4096,l,(()=>{const e=new t.VTLUniqueSymbol;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),u=new r.SymbolDeclutterer(l,n,((t,r,i)=>new o.CollisionJob(t,r,i,e.styleRepository,e.key.level,0)),((e,t)=>{s.writeOpacityToBuffers(e,t,!1)}),(()=>0),(e=>{const t=y.getStyleLayerByUID(e).getLayoutProperty("visibility");return!t||1!==t.getValue()}));l.push(e),n.add(e),u.setScreenSize(512,512),u.continue(1/0)}e.declutterSingleTile=y,Object.defineProperty(e,"__esModule",{value:!0})}));
