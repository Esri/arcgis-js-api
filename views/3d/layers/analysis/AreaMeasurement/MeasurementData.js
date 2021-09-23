/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/Quantity","../../../../../chunks/earcut","../../../../../chunks/vec2","../../../../../chunks/vec2f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4f64","../../../../../geometry/projection","../../../../../geometry/projectionEllipsoid","../../../../../geometry/SpatialReference","../../../../../geometry/support/intersectsBase","../support/measurementUtils","../support/viewUtils","../../../support/ElevationProvider","../../../support/mathUtils"],(function(e,t,i,s,o,n,r,h,a,c,d,l,g,p,m,u,_,f){"use strict";let C=function(){function e(e,t){this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.areaCentroidWorldCoords=a.create(),this.areaCentroidRenderCoords=a.create(),this.geodesicAreaCentroidRenderCoords=a.create(),this._length=0,this._centroidRenderCoords=a.create(),this._planeWorldCoords=c.create(),this._worldUp=a.create(),this._worldTangent=a.create(),this._frame=[a.create(),a.create(),a.create()],this._pathVersion=-1,this._validMeasurement=!1,this._tempU=a.create(),this._tempV=a.create(),this._tempVec3=a.create(),this._tempSphere={center:a.create(),radius:0},this._sceneView=e,this.unitNormalizer=t}var i=e.prototype;return i.update=function(e,t,i,o,n){const r=this.unitNormalizer,a=this._sceneView.renderSpatialReference,c=this.unitNormalizer.spatialReference;if(this._pathVersion===e.version&&this._validMeasurement===i&&!n)return!1;this._pathVersion=e.version,this._validMeasurement=i;const g=e.numVertices;this._resize(g);const p=l.getSphericalPCPF(t.spatialReference),m=d.canProjectWithoutEngine(t.spatialReference,p)&&d.canProjectToWGS84ComparableLonLat(t.spatialReference),u=this.positionsGeographic,_=this.positionsWorldCoords,f=this.positionsRenderCoords,C=this.positionsSpherical;e.forEachVertexPosition(((e,i)=>{P(t.elevationProvider,e),d.projectPointToVector(e,_[i],c),d.projectPointToVector(e,f[i],a),m&&(d.projectPointToWGS84ComparableLonLat(e,u[i]),d.projectPointToVector(e,C[i],p),h.normalize(C[i],C[i]))}));const S=this._updatePathLengths(i);if(this.pathLength=this._length>1?new s(r.normalizeDistance(S),"meters"):null,m){const e=this._updateGeodesicPathLengths(i,c);this.geodesicPathLength=this._length>1?new s(e,"meters"):null}else this.geodesicPathLength=null;return i?(this._updateArea(t,r,a,c,o),m&&this._updateGeodesicArea(t),!0):(this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),!0)},i.getData=function(){return{positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,unitNormalizer:this.unitNormalizer}},i._resize=function(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(a.create()),this.positionsRenderCoords.push(a.create()),this.positionsProjectedWorldCoords.push(r.create()),this.positionsFittedRenderCoords.push(a.create()),this.positionsGeographic.push(a.create()),this.positionsSpherical.push(a.create()),this.positionsStereographic.push(r.create()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length},i._updatePathLengths=function(e){const t=this.positionsWorldCoords,i=this.pathSegmentLengths;let s=0;for(let o=0;o<this._length;++o){const n=i[o]=h.distance(t[o],t[(o+1)%this._length]);(o<this._length-1||e)&&(s+=n)}return s},i._updateGeodesicPathLengths=function(e,t){const i=this.positionsGeographic,s=this.geodesicPathSegmentLengths;let o=0;for(let n=0;n<this._length;++n){const r=s[n]=m.segmentLengthGeodesicVector(i[n],i[(n+1)%this._length],t);(n<this._length-1||e)&&(o+=r)}return o},i._updateArea=function(e,t,i,o,r){const a=e.renderCoordsHelper,c=this.positionsWorldCoords,l=this.positionsRenderCoords,g=this.positionsProjectedWorldCoords,p=this.positionsFittedRenderCoords,_=this._planeWorldCoords,C=this._centroidRenderCoords;u.midpoint(l,C),a.worldUpAtPosition(C,this._worldUp),a.worldBasisAtPosition(C,0,this._worldTangent),d.projectDirection(C,this._worldUp,i,this._worldUp,o),d.projectDirection(C,this._worldTangent,i,this._worldTangent,o),c.length>2&&m.bestFitPlane(c,_),this.fittingMode=this._selectFittingMode(_,c,this._worldUp,r);let S=0;if("horizontal"===this.fittingMode){let e=-1/0;l.forEach(((t,i)=>{const s=a.getAltitude(l[i]);s>e&&(e=s,S=i)}))}const P=c[S];let L=_,R=this._worldTangent;"horizontal"===this.fittingMode?L=this._worldUp:"vertical"===this.fittingMode&&(L=this._tempVec3,R=this._worldUp,f.makeOrthonormal(_,this._worldUp,L)),h.copy(this._frame[2],L),f.makeOrthonormal(R,L,this._frame[0]),h.cross(this._frame[1],this._frame[0],this._frame[2]),h.negate(this._frame[1],this._frame[1]);const w=this._tempVec3,A=this._tempU,W=this._tempV;for(let s=0;s<this._length;++s){const e=g[s],t=p[s];h.subtract(w,c[s],P),n.set(e,h.dot(this._frame[0],w),h.dot(this._frame[1],w)),h.scale(A,this._frame[0],e[0]),h.scale(W,this._frame[1],e[1]),h.add(w,A,W),h.add(w,w,P),d.projectVectorToVector(w,o,t,i)}this.perimeterLength=this._length>0?new s(t.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,u.midpoint(p,this.areaCentroidRenderCoords),d.projectVectorToVector(this.areaCentroidRenderCoords,i,this.areaCentroidWorldCoords,o),this._updateIntersectingSegments(),this.area=0===this.intersectingSegments.size?new s(t.normalizeArea(this._computeArea()),"square-meters"):null},i._updateGeodesicArea=function(e){const t=e.renderCoordsHelper,i=this.positionsSpherical,o=this.positionsStereographic,r=this._tempVec3,a=m.fitHemisphere(i,r);if(!a)return void(this.geodesicArea=null);const c=this._tempU,d=this._tempV;f.tangentFrame(r,c,d);for(let s=0;s<this._length;++s){const e=h.dot(i[s],c),t=h.dot(i[s],d),a=h.dot(i[s],r);n.set(o[s],e/a,t/a)}h.scale(r,r,l.getReferenceEllipsoid(e.spatialReference).radius),t.toRenderCoords(r,l.getSphericalPCPF(e.spatialReference),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=a&&0===this.geodesicIntersectingSegments.size?new s(this._computeGeodesicArea(),"square-meters"):null},i._updatePerimeterLengths=function(){const e=this.positionsProjectedWorldCoords,t=this.perimeterSegmentLengths;let i=0;for(let s=0;s<this._length;++s){i+=t[s]=n.distance(e[s],e[(s+1)%this._length])}return i},i._updateIntersectingSegments=function(){const e=this.positionsProjectedWorldCoords,t=this.intersectingSegments;t.clear();for(let i=0;i<this._length;++i)for(let s=i+2;s<this._length;++s){if((s+1)%this._length===i)continue;const o=e[i],n=e[(i+1)%this._length],r=e[s],h=e[(s+1)%this._length];p.segmentIntersects(o,n,r,h)&&(t.add(i),t.add(s))}},i._computeArea=function(){const e=this.positionsProjectedWorldCoords,t=S(e,2),i=this.triangleIndices=new Uint32Array(o.earcut(t,[],2));let s=0;for(let o=0;o<i.length;o+=3)s+=m.triangleAreaEuclidean(e[i[o]],e[i[o+1]],e[i[o+2]]);return s},i._updateGeodesicIntersectingSegments=function(){const e=this.positionsStereographic,t=this.geodesicIntersectingSegments;t.clear();for(let i=0;i<this._length;++i)for(let s=i+2;s<this._length;++s){if((s+1)%this._length===i)continue;const o=e[i],n=e[(i+1)%this._length],r=e[s],h=e[(s+1)%this._length];p.segmentIntersects(o,n,r,h)&&(t.add(i),t.add(s))}},i._computeGeodesicArea=function(){const e=this.positionsGeographic,t=S(this.positionsStereographic,2),i=this.geodesicTriangleIndices=new Uint32Array(o.earcut(t,[],2));let s=0;for(let o=0;o<i.length;o+=3)s+=m.triangleAreaGeodesic(e[i[o]],e[i[o+1]],e[i[o+2]],g.WGS84);return s},i._selectFittingMode=function(e,i,s,o){const n=i.map((t=>Math.abs(m.planePointDistance(e,t)))).reduce(((e,t)=>Math.max(e,t)),0);m.boundingSphere(i,this._tempSphere);const r=n/(2*this._tempSphere.radius),a=r<o.maxRelativeErrorCoplanar,c=r<o.maxRelativeErrorAlmostCoplanar;let d="horizontal";if(a)d="oblique";else if(c){d=Math.abs(h.dot(s,e))>Math.cos(t.deg2rad(o.verticalAngleThreshold))?"horizontal":"vertical"}return d},e}();function S(e,t){const i=new Float64Array(e.length*t);for(let s=0;s<e.length;++s){const o=e[s];for(let e=0;e<t;++e)i[s*t+e]=o[e]}return i}function P(e,t){t.hasZ||(t.z=i.unwrapOr(_.getElevationAtPoint(e,t,"ground"),0))}e.MeasurementDataManager=C,Object.defineProperty(e,"__esModule",{value:!0})}));
