/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/Logger","../../core/screenUtils","../../core/string","../../support/arcadeOnDemand","./CIMSymbolHelper","./SDFHelper","./utils","../../views/2d/arcade/callExpressionWithFeature"],(function(e,t,i,r,o,n,l,a,s,c,f){"use strict";const m=r.getLogger("esri.symbols.cim.cimAnalyzer");function u(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function p(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function y(e){switch(e){default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function h(e){switch(e){default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function g(e){let t="normal",i="normal";if(e){const r=e.toLowerCase();-1!==r.indexOf("italic")?t="italic":-1!==r.indexOf("oblique")&&(t="oblique"),-1!==r.indexOf("bold")?i="bold":-1!==r.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}function d(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function S(e,t,i,r){let o;e[t]?o=e[t]:(o={},e[t]=o),o[i]=r}function C(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}function b(e,t,i,r){return v.apply(this,arguments)}function v(){return(v=t._asyncToGenerator((function*(e,t,i,r){const o=null!=i?i:[];if(!e)return o;let n,a;const s={};if("CIMSymbolReference"!==e.type)return m.error("Expect cim type to be 'CIMSymbolReference'"),o;if(n=e.symbol,a=e.primitiveOverrides,a){const e=[];for(const i of a){const r=i.valueExpressionInfo;if(r&&t){const o=r.expression,n=l.createRendererExpression(o,t.spatialReference,t.fields).then((e=>{e&&S(s,i.primitiveName,i.propertyName,e)}));e.push(n)}else null!=i.value&&S(s,i.primitiveName,i.propertyName,i.value)}yield Promise.all(e)}switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":N(n,a,s,t,o,r)}return o}))).apply(this,arguments)}function N(e,t,i,r,o,n){if(!e)return;const l=e.symbolLayers;if(!l)return;let s;const c=a.CIMSymbolHelper.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(s=1);let f=l.length;for(;f--;){const u=l[f];if(!u||!1===u.enable)continue;const p=[];switch(a.OverrideHelper.findApplicableOverrides(u,t,p),u.type){case"CIMSolidFill":O(u,i,p,r,o);break;case"CIMPictureFill":k(u,i,p,r,o);break;case"CIMHatchFill":M(u,i,p,r,o);break;case"CIMGradientFill":H(u,i,p,r,o);break;case"CIMSolidStroke":I(u,i,p,r,o,"CIMPolygonSymbol"===e.type,c);break;case"CIMPictureStroke":P(u,i,p,r,o,"CIMPolygonSymbol"===e.type,c);break;case"CIMGradientStroke":L(u,i,p,r,o,"CIMPolygonSymbol"===e.type,c);break;case"CIMCharacterMarker":if(x(u,i,p,r,o))break;break;case"CIMPictureMarker":if(x(u,i,p,r,o))break;"CIMLineSymbol"===e.type&&(s=C(u)),X(u,i,p,r,o,s,c);break;case"CIMVectorMarker":if(x(u,i,p,r,o))break;"CIMLineSymbol"===e.type&&(s=C(u)),z(u,i,p,r,o,s,c,n);break;default:m.error("Cannot analyze CIM layer",u.type)}}}function O(e,t,i,r,o){const l=e.primitiveName,a=c.fromCIMColor(e.color),[s,f]=D(i,l),m=n.numericHash(JSON.stringify(e)+f).toString();o.push({type:"fill",templateHash:m,materialHash:s?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:F(l,t,"Color",r,a,$),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function k(e,t,i,r,o){const l=e.primitiveName,a=e.tintColor?c.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},[s,f]=D(i,l),m=n.numericHash(JSON.stringify(e)+f).toString(),u=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();o.push({type:"fill",templateHash:m,materialHash:s?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:F(l,t,"TintColor",r,a,$),height:F(l,t,"Height",r,e.height),scaleX:F(l,t,"ScaleX",r,e.scaleX),angle:F(l,t,"Rotation",r,e.rotation),offsetX:F(l,t,"OffsetX",r,e.offsetX),offsetY:F(l,t,"OffsetY",r,e.offsetY)})}function M(e,t,i,r,o){const l=["Rotation","OffsetX","OffsetY"],a=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),s=e.primitiveName,[c,f]=D(i,s),m=n.numericHash(JSON.stringify(e)+f).toString(),u=n.numericHash(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();o.push({type:"fill",templateHash:m,materialHash:c?W(u,t,a,r):u,cim:e,materialOverrides:a,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:F(s,t,"Separation",r,e.separation),scaleX:1,angle:F(s,t,"Rotation",r,e.rotation),offsetX:F(s,t,"OffsetX",r,e.offsetX),offsetY:F(s,t,"OffsetY",r,e.offsetY)})}function H(e,t,i,r,o){const l=e.primitiveName,[a,s]=D(i,l),c=n.numericHash(JSON.stringify(e)+s).toString();o.push({type:"fill",templateHash:c,materialHash:a?W(c,t,i,r):c,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function I(e,t,i,r,o,l,a){const s=e.primitiveName,f=c.fromCIMColor(e.color),m=void 0!==e.width?e.width:4,y=u(e.capStyle),h=p(e.joinStyle),g=e.miterLimit,[d,S]=D(i,s),C=n.numericHash(JSON.stringify(e)+S).toString();o.push({type:"line",templateHash:C,materialHash:d?()=>C:C,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:e.effects,color:F(s,t,"Color",r,f,$),width:F(s,t,"Width",r,m),cap:F(s,t,"CapStyle",r,y),join:F(s,t,"JoinStyle",r,h),miterLimit:F(s,t,"MiterLimit",r,g),referenceWidth:a,zOrder:A(e.name),isDashed:!1})}function P(e,t,i,r,o,l,a){const s=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=c.fromCIMColor(e.tintColor),y=void 0!==e.width?e.width:4,h=u(e.capStyle),g=p(e.joinStyle),d=e.miterLimit,[S,C]=D(i,f),b=n.numericHash(JSON.stringify(e)+C).toString();o.push({type:"line",templateHash:b,materialHash:S?()=>s:s,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:e.effects,color:F(f,t,"TintColor",r,m,$),width:F(f,t,"Width",r,y),cap:F(f,t,"CapStyle",r,h),join:F(f,t,"JoinStyle",r,g),miterLimit:F(f,t,"MiterLimit",r,d),referenceWidth:a,zOrder:A(e.name),isDashed:!1})}function L(e,t,i,r,o,l,a){const s=e.primitiveName,c=void 0!==e.width?e.width:4,f=u(e.capStyle),m=p(e.joinStyle),y=e.miterLimit,[h,g]=D(i,s),d=n.numericHash(JSON.stringify(e)+g).toString();o.push({type:"line",templateHash:d,materialHash:h?W(d,t,i,r):d,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:F(s,t,"Width",r,c),cap:F(s,t,"CapStyle",r,f),join:F(s,t,"JoinStyle",r,m),miterLimit:F(s,t,"MiterLimit",r,y),referenceWidth:a,zOrder:A(e.name),isDashed:!1})}function x(e,t,i,r,o){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;const a=l,s=["Rotation","OffsetX","OffsetY"],c=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===s.indexOf(t.propertyName))),[f,m]=D(i,a.primitiveName),u=n.numericHash(JSON.stringify(e)+m).toString();return o.push({type:"fill",templateHash:u,materialHash:f?W(u,t,c,r):u,cim:e,materialOverrides:c,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:F(a.primitiveName,t,"StepY",r,a.stepY),scaleX:1,angle:F(a.primitiveName,t,"GridAngle",r,a.gridAngle),offsetX:F(a.primitiveName,t,"OffsetX",r,a.offsetX),offsetY:F(a.primitiveName,t,"OffsetY",r,a.offsetY)}),!0}function X(e,t,i,r,o,l,a){const s=e.primitiveName,f=e.size,m=e.scaleX,u=e.rotation,p=e.offsetX,y=e.offsetY,h=e.tintColor?c.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},g=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[d,S]=D(i,s),C=n.numericHash(JSON.stringify(e)+S).toString();o.push({type:"marker",templateHash:C,materialHash:d?()=>g:g,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:l,size:F(s,t,"Size",r,f),scaleX:F(s,t,"ScaleX",r,m),rotation:F(s,t,"Rotation",r,u),offsetX:F(s,t,"OffsetX",r,p),offsetY:F(s,t,"OffsetY",r,y),color:F(s,t,"TintColor",r,h,$),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:a,sizeRatio:1,markerPlacement:e.markerPlacement})}function z(e,t,i,r,o,n,l,a){const s=e.markerGraphics;if(!s)return;let c=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(c=t.ymax-t.ymin)}for(const f of s)if(f){const s=f.symbol;if(!s)continue;switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":w(e,f,i,t,r,o,n,l,c,a);break;case"CIMTextSymbol":J(e,f,t,i,r,o,n,l,c)}}}function J(e,t,i,r,o,l,s,f,m){const u=[];a.OverrideHelper.findApplicableOverrides(t,r,u);const p=t.geometry;if(!("x"in p)||!("y"in p))return;const S=t.symbol,C=d(S),b=g(S.fontStyleName);S.font={family:S.fontFamilyName,decoration:C,...b};const v=e.frame,N=p.x-.5*(v.xmin+v.xmax),O=p.y-.5*(v.ymin+v.ymax),k=e.size/m,M=e.primitiveName,H=(S.height||0)*k,I=S.angle||0,P=((S.offsetX||0)+N)*k,L=((S.offsetY||0)+O)*k,x=c.fromCIMColor(a.CIMSymbolHelper.getFillColor(S));let X=c.fromCIMColor(a.CIMSymbolHelper.getStrokeColor(S)),z=a.CIMSymbolHelper.getStrokeWidth(S);z||(X=c.fromCIMColor(a.CIMSymbolHelper.getFillColor(S.haloSymbol)),z=S.haloSize*k);let J="";for(const n of r)n.primitiveName===M&&void 0!==n.value&&(J+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`);const w=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),Y=n.numericHash(JSON.stringify(t)+w+J).toString();l.push({type:"text",templateHash:Y,materialHash:()=>n.numericHash(JSON.stringify(S.font)).toString(),cim:S,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:s,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:S.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:F(M,i,"Size",o,H),angle:F(M,i,"Rotation",o,I),offsetX:F(M,i,"OffsetX",o,P),offsetY:F(M,i,"OffsetY",o,L),horizontalAlignment:y(S.horizontalAlignment),verticalAlignment:h(S.verticalAlignment),text:F(t.primitiveName,i,"TextString",o,t.textString,c._adjustTextCase,S.textCase),color:x,outlineColor:X,outlineSize:z,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement})}function w(e,t,i,r,o,l,f,m,u,p){const y=t.symbol,h=t.geometry;if(!h)return;const g=y.symbolLayers;if(!g)return;if(p)return void Y(e,t,r,i,o,l,f,m,u);let d=g.length;for(;d--;){const p=g[d];if(p&&!1!==p.enable)switch(p.type){case"CIMSolidFill":case"CIMSolidStroke":{const y=s.getExtent(h);if(!y)continue;const[g,d,S]=s.getSDFMetrics(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),C="CIMSolidFill"===p.type,b={type:"sdf",geom:h,asFill:C},v=e.primitiveName,N=e.size,O=e.rotation||0,k=e.offsetX,M=e.offsetY,H=p.primitiveName,I=C?c.fromCIMColor(a.CIMSymbolHelper.getFillColor(p)):c.fromCIMColor(a.CIMSymbolHelper.getStrokeColor(p)),P=C?{r:0,g:0,b:0,a:0}:c.fromCIMColor(a.CIMSymbolHelper.getStrokeColor(p)),L=a.CIMSymbolHelper.getStrokeWidth(p);if(!C&&!L)break;let x=!1,X="";for(const e of i)e.primitiveName!==H&&e.primitiveName!==v||(void 0!==e.value?X+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(x=!0));const z=JSON.stringify({...e,markerGraphics:null}),J=n.numericHash(JSON.stringify(b)).toString(),w={type:"marker",templateHash:n.numericHash(JSON.stringify(t)+JSON.stringify(p)+z+X).toString(),materialHash:x?()=>J:J,cim:b,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:f,anchorPoint:{x:d,y:S},isAbsoluteAnchorPoint:!1,size:F(e.primitiveName,r,"Size",o,N),rotation:F(e.primitiveName,r,"Rotation",o,O),offsetX:F(e.primitiveName,r,"OffsetX",o,k),offsetY:F(e.primitiveName,r,"OffsetY",o,M),scaleX:1,frameHeight:u,rotateClockwise:e.rotateClockwise,referenceSize:m,sizeRatio:g,color:F(H,r,"Color",o,I,$),outlineColor:F(H,r,"Color",o,P,$),outlineWidth:F(H,r,"Width",o,L),markerPlacement:e.markerPlacement};l.push(w);break}default:Y(e,t,r,i,o,l,f,m,u)}}}function Y(e,t,i,r,l,s,c,f,m){const u=R(e,t);let p=[];const y=["Rotation","OffsetX","OffsetY"];p=r.filter((t=>t.primitiveName!==e.primitiveName||-1===y.indexOf(t.propertyName)));let h="";for(const o of r)void 0!==o.value&&(h+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`);const[g,d,S]=a.CIMSymbolHelper.getTextureAnchor(u),C=e.primitiveName,b=e.rotation||0,v=e.offsetX||0,N=e.offsetY||0,O=n.numericHash(JSON.stringify(u)+h).toString(),k={type:"marker",templateHash:O,materialHash:0===p.length?O:W(O,i,p,l),cim:u,materialOverrides:p,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:g,y:d},isAbsoluteAnchorPoint:!1,size:e.size,rotation:F(C,i,"Rotation",l,b),offsetX:F(C,i,"OffsetX",l,v),offsetY:F(C,i,"OffsetY",l,N),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:S/o.pt2px(e.size),markerPlacement:e.markerPlacement};s.push(k)}function R(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}function A(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function $(e){if(!e||0===e.length)return null;const t=new i(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function F(e,t,i,r,o,n,a){const s=t[e];if(s){const e=s[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,a):e;if(null!=e&&e instanceof l.ArcadeExpression)return(t,i,l)=>{let s=f(e,t,{$view:l},r.geometryType,i);return null!==s&&n&&(s=n.call(null,s,a)),null!==s?s:o}}return o}function W(e,t,i,r){for(const o of i){if(o.valueExpressionInfo){const e=t[o.primitiveName]&&t[o.primitiveName][o.propertyName];e instanceof l.ArcadeExpression&&(o.fn=(t,i,o)=>f(e,t,{$view:o},r.geometryType,i))}}return(t,r,o)=>{for(const e of i)e.fn&&(e.value=e.fn(t,r,o));return n.numericHash(e+a.OverrideHelper.buildOverrideKey(i)).toString()}}function T(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return a.OverrideHelper.applyOverrides(i,t),i}function D(e,t){let i=!1,r="";for(const o of e)o.primitiveName===t&&(void 0!==o.value?r+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`:o.valueExpressionInfo&&(i=!0));return[i,r]}e.analyzeCIMResource=T,e.analyzeCIMSymbol=b,Object.defineProperty(e,"__esModule",{value:!0})}));
