/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../geometry","../../../../../core/compilerUtils","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/quat","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/boundedPlane","../../../../../geometry/support/plane","../../../../../geometry/support/ray","../../../../../geometry/support/vector","../../../../../geometry/support/vectorStacks","../../Manipulator3D","../../manipulatorUtils","./sliceToolConfig","../../visualElements/LineVisualElement","../../visualElements/SlicePlaneVisualElement","../../../support/ElevationProvider","../../../support/geometryUtils/ray","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/materials/ColorMaterial","../../../webgl-engine/materials/ImageMaterial","../../../webgl-engine/materials/NativeLineMaterial","../../../webgl-engine/materials/RibbonLineMaterial","../../../../../widgets/Slice/SlicePlane","../../../../../geometry/Point"],(function(e,t,s,a,i,r,n,o,c,l,d,u,g,m,p,T,_,R,E,b,S,f,h,A,I,y,O,v,L,P,w,M){"use strict";const N=a.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils");function H(e,t,s,a,i,r,n,o){return D(t,n.worldUpAtPosition(e,_.sv3d.get()),i,r,o.basis1,o.basis2),d.scale(o.basis1,o.basis1,s),d.scale(o.basis2,o.basis2,a),d.copy(o.origin,e),m.fromVectorsAndPoint(o.basis2,o.basis1,o.origin,o.plane),o}function D(e,t,s,a,i,r){const n=d.dot(e,t),o=_.sv3d.get(),c=_.sv3d.get();switch(0===a?Math.abs(n)>b.VERTICAL_DOT_THRESHOLD?1:2:a){case 2:{const a=Math.abs(n)<=b.SMALL_ANGLE_DOT_THRESHOLD?e:s.viewUp;d.cross(o,a,t),d.copy(c,t);break}case 1:d.cross(o,s.viewUp,t),d.cross(c,t,o);break;case 3:{const a=Math.abs(n)<=b.SMALL_ANGLE_DOT_THRESHOLD?t:s.viewUp;d.cross(o,a,e),d.cross(c,e,o);break}}const l=d.cross(_.sv3d.get(),o,c);d.dot(l,s.viewForward)>0&&d.scale(c,c,-1),d.normalize(i,o),d.normalize(r,c)}function F(e,t,s){const a=t.worldUpAtPosition(e.origin,_.sv3d.get()),i=e.basis1,r=ne(e,a),n=Math.round(r/Te)*Te;return g.rotate(e,n-r,i,s)}function C(e,t,s,a,i,r){const n=d.copy(_.sv3d.get(),i.origin);d.add(n,n,d.scale(_.sv3d.get(),i.basis1,e.direction[0]<0?1:-1)),d.add(n,n,d.scale(_.sv3d.get(),i.basis2,e.direction[1]<0?1:-1));const o=d.length(i.basis1),c=d.length(i.basis2),l=d.subtract(_.sv3d.get(),s,n),u=d.subtract(_.sv3d.get(),t,n);let m=0,p=0;if(K(e)){const t=X(i),s=X(r);m=o-.5*e.direction[0]*d.dot(i.basis1,u)/o,p=c-.5*e.direction[1]*d.dot(i.basis2,u)/c;const a=s/t;m*=a,p*=a}const T=m+.5*e.direction[0]*d.dot(i.basis1,l)/o,R=p+.5*e.direction[1]*d.dot(i.basis2,l)/c,E=d.scale(_.sv3d.get(),i.basis1,T/o),S=d.scale(_.sv3d.get(),i.basis2,R/c);(T<=0||q(r.origin,E,a)<=b.PLANE_MIN_BASIS_SCREEN_LEN2)&&d.copy(E,r.basis1),(R<=0||q(r.origin,S,a)<=b.PLANE_MIN_BASIS_SCREEN_LEN2)&&d.copy(S,r.basis2);const f=d.copy(_.sv3d.get(),n);return d.add(f,f,d.scale(_.sv3d.get(),E,e.direction[0]<0?-1:1)),d.add(f,f,d.scale(_.sv3d.get(),S,e.direction[1]<0?-1:1)),g.fromValues(f,E,S,r)}function U(e,t){return b.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function k(e,t,s,a){const i=d.cross(_.sv3d.get(),t,s);return d.cross(i,i,t),m.fromPositionAndNormal(e,i,a)}function G(e,t){return E.calculateTranslateRotateFromBases(e.basis1,e.basis2,e.origin,t)}function z(e,t,s,a){const i=t.worldUpAtPosition(e.origin,_.sv3d.get()),r=_.sv3d.get();switch(s){case 1:d.copy(r,i);break;case 2:d.copy(r,e.basis1)}return m.fromPositionAndNormal(e.origin,r,a)}function V(e,t,s,a){const i=x(s,2),r=_.sm4d.get();o.rotateZ(r,t,i.edge*Math.PI/2);const c=d.normalize(_.sv3d.get(),i.basis);let l=d.scale(_.sv3d.get(),c,i.direction*a.computeScreenPixelSizeAt(i.position)*b.SHIFT_RESTART_OFFSET_DISTANCE);d.add(l,l,i.position);const m=a.projectToRenderScreen(l,n.castRenderScreenPointArray3(_.sv3d.get())),p=j(a,m);A.fromRender(a,m,pe),d.normalize(pe.direction,pe.direction);const T=_.sv3d.get();!p&&g.intersectRay(s,pe,T)&&(l=T),r[12]=0,r[13]=0,r[14]=0,e.modelTransform=r,e.renderLocation=u.clone(l),p?e.state|=me:e.state&=~me}function j(e,t){const[s,a,i,r]=e.viewport,n=Math.min(i,r)/16;let o=!0;return t[0]<s+n?(t[0]=s+n,o=!1):t[0]>s+i-n&&(t[0]=s+i-n,o=!1),t[1]<a+n?(t[1]=a+n,o=!1):t[1]>a+r-n&&(t[1]=a+r-n,o=!1),o}function B(e,t,s,a){const i=d.length(a.basis1),r=d.length(a.basis2),n=Q(a),c=X(a),l=d.set(_.sv3d.get(),0,0,0);d.add(l,d.scale(_.sv3d.get(),a.basis1,t.direction[0]),d.scale(_.sv3d.get(),a.basis2,t.direction[1])),d.add(l,a.origin,l);let u=0,g=1;if(K(t))1===t.direction[0]&&-1===t.direction[1]?u=Te:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=c;else{const e=0!==t.direction[0]?1:2;u=1===e?Te:0,g=(1===e?r:i)-n}const m=o.identity(_.sm4d.get());o.rotateZ(m,m,u),o.scale(m,m,d.set(_.sv3d.get(),g,g,g)),o.multiply(m,s,m),m[12]=0,m[13]=0,m[14]=0,e.modelTransform=m,e.renderLocation=l}function W(e,t,s,a){const i=a.worldUpAtPosition(s.origin,_.sv3d.get()),r=x(s,0),n=o.identity(_.sm4d.get());o.rotateZ(n,n,r.edge*Math.PI/2),o.rotateX(n,n,-ne(s,i)),o.multiply(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=r.position}function Z(e,t,s){const a=x(s,1),i=o.identity(_.sm4d.get());o.rotateZ(i,i,a.edge*Math.PI/2),o.rotateX(i,i,Te),o.multiply(i,t,i),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=a.position}function x(e,t){switch(t){case 0:return{basis:e.basis1,direction:1,position:d.add(_.sv3d.get(),e.origin,e.basis1),edge:t};case 1:return{basis:e.basis2,direction:1,position:d.add(_.sv3d.get(),e.origin,e.basis2),edge:t};case 2:return{basis:e.basis1,direction:-1,position:d.subtract(_.sv3d.get(),e.origin,e.basis1),edge:t};case 3:return{basis:e.basis2,direction:-1,position:d.subtract(_.sv3d.get(),e.origin,e.basis2),edge:t}}}function q(e,t,s){const a=s.projectToRenderScreen(d.add(_.sv3d.get(),e,t),n.castRenderScreenPointArray3(_.sv3d.get())),i=s.projectToRenderScreen(d.subtract(_.sv3d.get(),e,t),n.castRenderScreenPointArray3(_.sv3d.get()));return d.squaredLength(d.subtract(a,a,i))}function Q(e){const t=d.length(e.basis1),s=d.length(e.basis2);return b.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(t,s)}function X(e){return Q(e)}function K(e){return 0!==e.direction[0]&&0!==e.direction[1]}function Y(e,t=1){const s=0===t?b.SHIFT_RESTART_OFFSET_DISTANCE:0,a=[u.fromValues(s,0,-b.SHIFT_RESTART_ARROW_LENGTH/2),u.fromValues(s,0,b.SHIFT_RESTART_ARROW_LENGTH/2)],i=ie(a,!0),r=(e,t)=>se(a,a,{tubeRadius:b.SHIFT_RESTART_TUBE_RADIUS,tipRadius:b.SHIFT_RESTART_TIP_RADIUS,tipLength:b.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:b.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:b.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:e,bothEnds:!0,flat:null,focusTipLength:!0,addCap:t}),n=r(0,!1),o=r(b.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0),c=new O.ColorMaterial({color:b.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:2,renderOccluded:16}),l=new O.ColorMaterial({color:b.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:2,renderOccluded:16}),d=new O.ColorMaterial({color:b.SHIFT_RESTART_TUBE_COLOR,cullFace:2,renderOccluded:16}),g=new O.ColorMaterial({color:b.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:1,renderOccluded:2}),m=y.createPolylineGeometry([[s,0,0],[s-b.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),p=y.createPolylineGeometry([[s,0,0],[s-b.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),T=new L.NativeLineMaterial({color:b.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:4});return new R.Manipulator3D({view:e,renderObjects:[...n.normal.map((({part:e,geometry:t,transform:s})=>({geometry:t,material:"tip"===e?c:"cap"===e?l:d,transform:s,stateMask:1|ge}))),...o.normal.map((({geometry:e,transform:t})=>({geometry:e,material:g,transform:t,stateMask:1|ge}))),{geometry:m,material:T,stateMask:1|ge|me},...n.focused.map((({part:e,geometry:t,transform:s})=>({geometry:t,material:"tip"===e?c:"cap"===e?l:d,transform:s,stateMask:2|ge}))),...o.focused.map((({geometry:e,transform:t})=>({geometry:e,material:g,transform:t,stateMask:2|ge}))),{geometry:p,material:T,stateMask:2|ge|me}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[i]},collisionPriority:1,radius:b.SHIFT_RESTART_TIP_RADIUS,state:ge})}function $(e,t){const s=new v.ImageMaterial({transparent:!0,writeDepth:!1,textureId:t.id,renderOccluded:16}),a=b.ROTATE_HEADING_OFFSET_DISTANCE,i=b.ROTATE_HEADING_DISC_RADIUS,r=i*b.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,n=e=>{const t=new Uint32Array([0,1,2,2,3,0]);return new I.Geometry([["position",{size:3,data:[a-e,-e,0,a+e,-e,0,a+e,e,0,a-e,e,0],exclusive:!0}],["uv0",{size:2,data:[0,0,1,0,1,1,0,1]}]],[["position",t],["uv0",t]])},o=y.createPolylineGeometry([[0,0,0],[a-i,0,0]]),c=y.createPolylineGeometry([[0,0,0],[a-r,0,0]]),l=new L.NativeLineMaterial({color:b.ROTATE_HEADING_CALLOUT_COLOR,renderOccluded:4}),d=[{geometry:n(i),material:s,stateMask:1|ge},{geometry:o,material:l,stateMask:1|ge},{geometry:n(r),material:s,stateMask:2|ge},{geometry:c,material:l,stateMask:2|ge}];return new R.Manipulator3D({view:e,renderObjects:d,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[a,0,0]},collisionPriority:1,radius:i/2,state:ge})}function J(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new S.LineVisualElement({view:e,attached:!0,color:b.PLANE_OUTLINE_COLOR,width:b.PLANE_OUTLINE_WIDTH,writeDepthEnabled:!1,renderOccluded:4,geometry:[t]})}function ee(e){return new f.SlicePlaneVisualElement({view:e,attached:!0,backgroundColor:[...b.PLANE_BACKGROUND_COLOR],gridColor:b.GRID_COLOR,gridWidth:4,renderOccluded:4})}function te(e,t){const s=K(t),a=s?[u.fromValues(1,0,0),u.fromValues(0,0,0),u.fromValues(0,1,0)]:[u.fromValues(1,0,0),u.fromValues(-1,0,0)],i=y.createPolylineGeometry(a),r=[...b.HANDLE_COLOR,1],n=e=>new P.RibbonLineMaterial({color:r,width:e,renderOccluded:4}),o=()=>new L.NativeLineMaterial({color:r,renderOccluded:4}),c=s?b.RESIZE_HANDLE_CORNER_WIDTH:b.RESIZE_HANDLE_EDGE_WIDTH,l=c*b.DISPLAY_FOCUS_MULTIPLIER,d=b.RESIZE_HANDLE_EDGE_WIDTH,g=e=>e>1?n(e):o(),m=[{geometry:i,material:g(c),stateMask:1|_e},{geometry:i,material:g(l),stateMask:2|_e},{geometry:i,material:g(d),stateMask:Re}],p=new R.Manipulator3D({view:e,renderObjects:m,collisionType:{type:"line",paths:[a]},autoScaleRenderObjects:!1,worldSized:!0,radius:s?b.RESIZE_HANDLE_CORNER_INPUT_RADIUS:b.RESIZE_HANDLE_EDGE_INPUT_RADIUS,idHint:s?1:2});return p.state=_e,p}function se(e,t,s){const a=a=>{const i=(a?t:e).slice(0),n=d.subtract(_.sv3d.get(),i[0],i[1]);d.normalize(n,n);const g=d.subtract(_.sv3d.get(),i[i.length-1],i[i.length-2]);if(d.normalize(g,g),s.padding>0){const e=d.scale(u.create(),g,-s.padding);if(i[i.length-1]=d.add(e,e,i[i.length-1]),s.bothEnds){const e=d.scale(u.create(),n,-s.padding);i[0]=d.add(e,e,i[0])}}const m=a?s.tipFocusMultiplier:1,p=s.tipLength*(s.focusTipLength?m:1),T=s.tipRadius*m,R=o.identity(_.sm4d.get());if(s.padding>0){const e=p/4,t=d.set(_.sv3d.get(),0,e,0),a=1+s.padding/e;o.translate(R,R,t),o.scale(R,R,d.set(_.sv3d.get(),a,a,a)),o.translate(R,R,d.scale(t,t,-1/a))}const E=o.identity(c.create()),b=u.fromValues(0,1,0),S=o.fromQuat(c.create(),l.rotationTo(_.sq4d.get(),b,g));S[12]=i[i.length-1][0],S[13]=i[i.length-1][1],S[14]=i[i.length-1][2],o.multiply(S,S,R);const f=[{part:"tube",geometry:ae(s.tubeRadius*(a?s.tubeFocusMultiplier:1)+s.padding,s.flat,i),transform:E}];let h,A;if(r.isSome(s.flat)?h=y.createExtrudedTriangle(p,T,T,s.flat.thickness):(h=y.createConeGeometry(p,T,24,!1,!1,!0),A=y.createConeGeometry(p,T,24,!1,!0,!1)),f.push({part:"tip",geometry:h,transform:S}),A&&f.push({part:"cap",geometry:A,transform:S}),s.bothEnds){const e=o.fromQuat(c.create(),l.rotationTo(_.sq4d.get(),b,n));e[12]=i[0][0],e[13]=i[0][1],e[14]=i[0][2],o.multiply(e,e,R),f.push({part:"tip",geometry:h,transform:e}),A&&f.push({part:"cap",geometry:A,transform:e})}return f};return{normal:a(!1),focused:a(!0)}}function ae(e,t,s){const a=[];if(r.isSome(t))a.push([e,t.thickness/2],[-e,t.thickness/2],[-e,-t.thickness/2],[e,-t.thickness/2]);else{const t=12;for(let s=0;s<t;s++){const i=s/t*2*Math.PI;a.push([Math.cos(i)*e,Math.sin(i)*e])}}return y.createPathExtrusionGeometry(a,s,[],[],!1)}function ie(e,t){const s=d.subtract(u.create(),e[e.length-1],e[e.length-2]);if(d.normalize(s,s),d.scale(s,s,b.ROTATE_HEADING_TIP_LENGTH),d.add(s,s,e[e.length-1]),t){const t=d.subtract(u.create(),e[0],e[1]);return d.normalize(t,t),d.scale(t,t,b.ROTATE_HEADING_TIP_LENGTH),d.add(t,t,e[0]),[t,...e,s]}return[...e,s]}function re(e,t,s,a=new w){if(r.isNone(e))return null;const n=r.isSome(a.position)?a.position:new M;t.fromRenderCoords(e.origin,n,s),a.position=n;const o=t.worldUpAtPosition(e.origin,_.sv3d.get()),c=t.worldBasisAtPosition(e.origin,1,_.sv3d.get());return a.width=2*d.length(e.basis1),a.height=2*d.length(e.basis2),a.tilt=i.rad2deg(ne(e,o)),a.heading=i.rad2deg(oe(e,o,c)),a}function ne(e,t){return T.angleAroundAxis(t,e.basis2,e.basis1)+Te}function oe(e,t,s){return T.angleAroundAxis(e.basis1,s,t)-Te}function ce(e,t,s,a,r,n,o=g.create()){return n.toRenderCoords(e,o.origin)?(n.worldBasisAtPosition(o.origin,0,o.basis1),n.worldBasisAtPosition(o.origin,1,o.basis2),m.fromVectorsAndPoint(o.basis2,o.basis1,o.origin,o.plane),g.rotate(o,-i.deg2rad(t),g.normal(o),o),g.rotate(o,i.deg2rad(s),o.basis1,o),d.scale(o.basis1,o.basis1,a/2),d.scale(o.basis2,o.basis2,r/2),g.updateUnboundedPlane(o),o):(N.error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function le(e,t,s=g.create()){return r.isNone(e)||r.isNone(e.position)?null:ce(e.position,e.heading,e.tilt,e.width,e.height,t,s)}function de(e,t,s=g.create()){if(r.isNone(e)||r.isNone(e.position))return null;let a=e.position;return e.position.hasZ||(a=e.position.clone(),a.z=r.unwrapOr(h.getElevationAtPoint(t.elevationProvider,e.position),0)),ce(a,e.heading,e.tilt,e.width,e.height,t.renderCoordsHelper,s)}function ue(e){switch(e.type){case"building-scene":case"csv":case"direct-line-measurement":case"area-measurement":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"line-of-sight":case"map-notes":case"ogc-feature":case"point-cloud":case"route":case"slice":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return s.neverReached(e.type),!1}}const ge=16,me=32,pe=p.create(),Te=Math.PI/2,_e=16,Re=32;e.DidPointerMoveRecentlyFlag=ge,e.IsShiftEdgeOnScreenFlag=me,e.addArrowTips=ie,e.calculateBoundedPlaneTranslateRotate=G,e.calculateDiagonalResizeHandleScale=X,e.calculatePlaneHalfSize=U,e.calculateResizeHandlePadding=Q,e.calculateScreenSpaceBasisLength2=q,e.createArrowGeometry=se,e.createGridVisualElement=ee,e.createOutlineVisualElement=J,e.createPlane=H,e.createResizeManipulator=te,e.createRotateManipulator=$,e.createRotatePlane=z,e.createShiftManipulator=Y,e.createShiftPlane=k,e.forceHorizontalOrVertical=F,e.isAlwaysDrapedLayer=ue,e.isDiagonalResizeHandle=K,e.normalToBases=D,e.planeToShape=re,e.resizeNormal=_e,e.resizeOutlineOnly=Re,e.resizePlane=C,e.shapeToElevationAlignedPlane=de,e.shapeToPlane=le,e.updateResizeHandle=B,e.updateRotateHeadingHandle=W,e.updateRotateTiltHandle=Z,e.updateShiftRestartHandle=V,Object.defineProperty(e,"__esModule",{value:!0})}));
