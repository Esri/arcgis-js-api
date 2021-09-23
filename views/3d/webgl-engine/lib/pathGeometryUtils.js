/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../../chunks/mat2","../../../../chunks/mat2f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/plane","../../../../geometry/support/ray","./GeometryUtil","../materials/internal/MaterialUtil"],(function(t,e,i,r,s,o,n,a,h,l,u,c,f,p,d){"use strict";function x(){return{up:u.create(),right:u.create()}}function v(t,e,i){l.transformMat4(t.up,e.up,i),l.transformMat4(t.right,e.right,i)}function m(t,e,i){t[0]=i[0]*e.right[0]+i[1]*e.up[0],t[1]=i[0]*e.right[1]+i[1]*e.up[1],t[2]=i[0]*e.right[2]+i[1]*e.up[2]}function g(t,e,i){a.set(t,l.dot(i,e.right),l.dot(i,e.up))}let V=function(){function t(){this.pos=u.create(),this.posES=u.create(),this.posGS=u.create(),this.vRight=u.create(),this.vLeft=u.create(),this.frame=x(),this.rotationFrame=x(),this.rotationRight=h.create(),this.rotationAngle=0,this.miterStretch=s.create()}var e=t.prototype;return e.setFrameFromUpVector=function(t){l.copy(this.frame.up,t),l.add(G,this.vLeft,this.vRight),l.normalize(G,G),l.scale(w,this.frame.up,l.dot(G,this.frame.up)),l.subtract(J,G,w),l.normalize(J,J),l.cross(this.frame.right,J,this.frame.up)},e.computeRotationAxisAndAngleFromUpVector=function(){l.copy(this.rotationFrame.up,this.frame.up),l.copy(this.rotationFrame.right,this.frame.right),a.set(this.rotationRight,1,0),l.scale(w,this.frame.up,l.dot(this.frame.up,this.vLeft)),l.subtract(w,this.vLeft,w),l.negate(w,w),l.normalize(w,w),l.scale(G,this.frame.up,l.dot(this.frame.up,this.vRight)),l.subtract(G,this.vRight,G),l.normalize(G,G),l.cross(E,this.rotationFrame.up,this.vLeft);const t=i.sign(l.dot(E,this.vRight));if(this.rotationAngle=t*(Math.PI-i.acosClamped(l.dot(w,G))),Math.abs(this.rotationAngle)>0){const t=i.reciprocalClamped(Math.cos(.5*this.rotationAngle));r.set(this.miterStretch,t-1+1,0,0,1)}const e=Math.PI-this.rotationAngle;this.maxStretchDistance=Math.abs(Math.min(this.vLeftLength,this.vRightLength)/Math.cos(.5*e))},t}(),b=function(){function t(){this.vertices=[],this.vertexIndices=[],this.vertexNormals=[],this.poles=[],this.poleIndices=[],this.uvs=null,this.uvIndices=null}var i=t.prototype;return i.addVertex=function(t,e){return this.vertices.push(h.clone(t)),this.vertexNormals.push(h.clone(e)),this.vertices.length-1},i.addUV=function(t){return this.uvs||(this.uvs=[],this.uvIndices=[]),this.uvs.push(t),this.uvs.length-1},i.addPole=function(t,e=null){return this.poles.push({position:h.clone(t),normal:e?h.clone(e):null}),this.poles.length-1},i.addSegment=function(t,e=null,i=null){this.vertexIndices.push(t.v0),this.vertexIndices.push(t.v1),e&&(this.uvIndices.push(e.v0),this.uvIndices.push(e.v1)),i&&(this.poleIndices.push(i.v0),this.poleIndices.push(i.v1))},i.hasUV=function(){return null!=this.uvs},i.translate=function(t,e){for(const i of this.vertices)i[0]+=t,i[1]+=e;for(const i of this.poles)i.position[0]+=t,i.position[1]+=e},t.circle=function(e=20){const i=.5,r=new t,s={v0:0,v1:0};r.addPole(h.fromValues(0,0));for(let t=0;t<e;++t){const s=2*t*Math.PI/e,o=Math.cos(s),n=Math.sin(s),a=h.fromValues(o*i,n*i),l=h.fromValues(o,n);r.addVertex(a,l),r.addUV(t/e)}r.addUV(1);for(let t=0;t<e-1;++t){const e={v0:t,v1:t+1},i=e;r.addSegment(e,i,s)}const o={v0:e-1,v1:0},n={v0:e-1,v1:e};return r.addSegment(o,n,s),r},t.rect=function(){const e=1,i=1,r=new t,s=h.fromValues(.5*-e,.5*-i),o=h.fromValues(.5*e,.5*-i),n=h.fromValues(.5*e,.5*i),a=h.fromValues(.5*-e,.5*i),l=h.fromValues(0,-1),u=h.fromValues(1,0),c=h.fromValues(0,1),f=h.fromValues(-1,0);r.addUV(0),r.addUV(1),r.addPole(h.fromValues(0,.5*i),c),r.addPole(h.fromValues(0,.5*i)),r.addPole(h.fromValues(0,.5*-i)),r.addPole(h.fromValues(0,.5*-i),l);const p={v0:0,v1:1};return r.addVertex(s,l),r.addVertex(o,l),r.addSegment({v0:0,v1:1},p,{v0:3,v1:3}),r.addVertex(o,u),r.addVertex(n,u),r.addSegment({v0:2,v1:3},p,{v0:2,v1:1}),r.addVertex(n,c),r.addVertex(a,c),r.addSegment({v0:4,v1:5},p,{v0:0,v1:0}),r.addVertex(a,f),r.addVertex(s,f),r.addSegment({v0:6,v1:7},p,{v0:1,v1:2}),r},e._createClass(t,[{key:"numSegments",get:function(){return this.vertexIndices.length/2}}]),t}(),A=function(){function t(t){this.vertices=[],this.offset=u.create(),this.xform=n.create(),this.vertices=t;const e=Math.floor((t.length-1)/2);l.copy(this.offset,this.vertices[e].pos);for(const i of this.vertices)l.subtract(i.pos,i.pos,this.offset);o.translate(this.xform,this.xform,this.offset),this.updatePathVertexInformation()}return t.prototype.updatePathVertexInformation=function(){const t=this.vertices.length;let e=this.vertices[0];e.index=0,l.set(e.vLeft,0,0,0),e.vLeftLength=0,l.subtract(e.vRight,this.vertices[1].pos,e.pos),e.vRightLength=l.length(e.vRight),l.normalize(e.vRight,e.vRight);let i=e;for(let r=1;r<t;++r)e=this.vertices[r],e.index=r,l.copy(e.vLeft,i.vRight),e.vLeftLength=i.vRightLength,r<t-1?(l.subtract(e.vRight,this.vertices[r+1].pos,e.pos),e.vRightLength=l.length(e.vRight),l.normalize(e.vRight,e.vRight)):(l.copy(e.vRight,e.vLeft),e.vRightLength=e.vLeftLength),i=e},t}();function C(t,e){let i=null;const r=t.vertices.length,s=.99619469809,o=u.create(),n=u.create(),a=u.create(),h=u.create(),d=u.create(),x=u.create(),v=c.create();let m=t.vertices[0];l.copy(n,e),l.set(o,0,1,0),p.makeOrthoBasisDirUpFallback(m.vRight,n,o,o,a,n,s),l.copy(m.frame.up,n),l.copy(m.frame.right,a),i=m;for(let u=1;u<r;++u){m=t.vertices[u],l.add(d,m.vLeft,m.vRight);let e=l.length(d);e>0?(e=1/Math.sqrt(e),d[0]=d[0]*e,d[1]=d[1]*e,d[2]=d[2]*e):(d[0]=m.vRight[0],d[1]=m.vRight[1],d[2]=m.vRight[2]),l.add(x,i.pos,i.frame.up),c.fromPositionAndNormal(m.pos,d,v);c.intersectRay(v,f.wrap(x,m.vLeft),h)?(l.subtract(h,h,m.pos),l.normalize(n,h),l.cross(a,d,n),l.normalize(a,a)):p.makeOrthoBasisDirUpFallback(d,i.frame.up,i.frame.right,o,a,n,s),l.copy(m.frame.up,n),l.copy(m.frame.right,a),i=m}}let D=function(){},y=function(){function t(){}var e=t.prototype;return e.numProfilesPerJoin=function(){return 1},e.extrude=function(t,e,i){for(let r=0;r<e.vertices.length;++r)i(t.index,t.frame,e.vertices[r],e.vertexNormals[r],!1)},t}(),I=function(){function t(t=.8*Math.PI,e=1){this.cutoffAngle=t,this.numBendSubdivisions=e}var e=t.prototype;return e.numProfilesPerJoin=function(){return this.numBendSubdivisions+1},e.extrude=function(t,e,i){const r=j;if(Math.abs(t.rotationAngle)>=this.cutoffAngle)for(let s=0;s<this.numBendSubdivisions+1;++s){o.identity(q),o.rotate(q,q,.5*-t.rotationAngle+s*t.rotationAngle/this.numBendSubdivisions,t.rotationFrame.up),v(r,t.frame,q);for(let s=0;s<e.vertices.length;++s){a.dot(e.vertices[s],t.rotationRight)*t.rotationAngle>=0?i(t.index,r,e.vertices[s],e.vertexNormals[s],!1):(a.transformMat2(B,e.vertices[s],t.miterStretch),i(t.index,t.frame,B,e.vertexNormals[s],!0))}}else for(let s=0;s<this.numBendSubdivisions+1;++s)for(let r=0;r<e.vertices.length;++r){const s=a.dot(e.vertices[r],t.rotationRight)*t.rotationAngle>=0;a.transformMat2(B,e.vertices[r],t.miterStretch),i(t.index,t.frame,B,e.vertexNormals[r],!s)}},t}();const P={generateUV:!1};let N=function(){function t(){}return t.prototype.rebuildConnectingProfileGeometry=function(t,e,i){for(let r=0;r<e.vertices.length;++r)i(t.index,t.frame,e.vertices[r],e.vertexNormals[r],0,0)},t}(),_=function(t){function i(){return t.call(this)||this}e._inheritsLoose(i,t);var r=i.prototype;return r.getNumVertices=function(){return 0},r.getNumIndices=function(){return 0},r.rebuildCapGeometry=function(){},r.buildTopology=function(){},i}(N),R=function(t){function i(e,i=0,r=!1){var s;return(s=t.call(this)||this).profile=e,s.profilePlaneOffset=i,s.flip=r,s}e._inheritsLoose(i,t);var r=i.prototype;return r.getNumVertices=function(){return this.profile.vertices.length},r.getNumIndices=function(){return 3*this.profile.numSegments},r.rebuildConnectingProfileGeometry=function(t,e,i){for(let r=0;r<e.vertices.length;++r)i(t.index,t.frame,e.vertices[r],e.vertexNormals[r],this.profilePlaneOffset,0)},r.rebuildCapGeometry=function(t,e){const i=z;a.set(i,0,0);const r=this.flip?1:-1;for(let s=0;s<this.profile.vertices.length;++s)e(t.index,t.frame,this.profile.vertices[s],i,this.profilePlaneOffset,r)},r.buildTopology=function(t,e){const i=this.vertexBufferStart+this.profile.vertexIndices[0];for(let r=1;r<this.profile.numSegments;++r){const t=this.profile.vertexIndices[2*r+0],s=this.profile.vertexIndices[2*r+1],o=this.vertexBufferStart+t,n=this.vertexBufferStart+s;this.flip?e(n,o,i):e(i,o,n)}},i}(N),S=function(t){function i(e){var i;return(i=t.call(this)||this).flip=!1,i.sign=0,i.breakNormals=!1,i.numSegments=3,i.profile=e.profile,i.flip=e.flip,i.sign=i.flip?1:-1,i.breakNormals=e.breakNormals,i.numSegments=e.subdivisions,i}e._inheritsLoose(i,t);var r=i.prototype;return r.getNumVertices=function(){let t=0;return t=this.profile.vertices.length*(this.numSegments-1),this.breakNormals&&(t+=this.profile.vertices.length),t+=this.profile.poles.length,t},r.getNumIndices=function(){let t=0;t+=2*this.profile.numSegments*(this.numSegments-1);for(let e=0;e<this.profile.numSegments;++e){const i=this.profile.vertexIndices[2*e+0],r=this.profile.vertexIndices[2*e+1];this.profile.poleIndices[i]===this.profile.poleIndices[r]?t+=1:t+=2}return 3*t},r.rebuildCapGeometry=function(t,e){const i=t.frame,r=.5*this.sign,s=B,o=z;a.set(o,0,0);for(let n=0;n<this.profile.poles.length;++n){const s=this.profile.poles[n];s.normal?e(t.index,i,s.position,s.normal,r,0):e(t.index,i,s.position,o,r,this.sign)}if(this.breakNormals)for(let n=0;n<this.profile.vertices.length;++n)e(t.index,i,this.profile.vertices[n],this.profile.vertexNormals[n],0,0);for(let n=0;n<this.numSegments-1;++n){const h=(1-(n+1)/this.numSegments)*Math.PI*.5,l=Math.sin(h),u=Math.cos(h);for(let n=0;n<this.profile.vertices.length;++n){const h=this.profile.poles[this.profile.poleIndices[n]];a.subtract(s,this.profile.vertices[n],h.position),a.scale(s,s,l),h.normal?(a.add(s,s,h.position),e(t.index,i,s,h.normal,r*u,0)):(a.normalize(o,s),a.scale(o,o,l),a.add(s,s,h.position),e(t.index,i,s,o,r*u,this.sign*u))}}},r.buildTopology=function(t,e){const i=this.breakNormals?this.vertexBufferStart+this.profile.poles.length:this.firstProfileVertexIndex,r=this.breakNormals?this.vertexBufferStart+this.profile.poles.length+this.profile.vertices.length:this.vertexBufferStart+this.profile.poles.length;for(let s=0;s<this.profile.numSegments;++s){const t=this.profile.vertexIndices[2*s+0],o=this.profile.vertexIndices[2*s+1],n=this.vertexBufferStart+this.profile.poleIndices[t],a=this.vertexBufferStart+this.profile.poleIndices[o];let h=i+t,l=i+o;for(let i=0;i<this.numSegments-1;++i){const s=r+i*this.profile.vertices.length+t,n=r+i*this.profile.vertices.length+o;this.flip?(e(s,l,h),e(l,s,n)):(e(h,l,s),e(n,s,l)),h=s,l=n}this.flip?(e(n,l,h),n!==a&&e(n,a,l)):(e(h,l,n),n!==a&&e(l,a,n))}},i}(N),U=function(){function t(t,e,i,r,s,o=P){this.options=o,this._extrusionVertexCount=0,this._triangleCount=0,this.numExtrusionProfiles=0,this.numVerticesTotal=0,this.numNormalsTotal=0,this.numUVTotal=0,this.profile=e,this.path=t,this.extruder=i,this.startCap=r,this.endCap=s;const n=this.path.vertices.length-2;this.numExtrusionProfiles=i.numProfilesPerJoin()*n+2,this.numVerticesTotal=e.vertices.length*this.numExtrusionProfiles,this.numNormalsTotal=this.numVerticesTotal,this.startCap.vertexBufferStart=this.numVerticesTotal;const a=this.startCap.getNumVertices();this.numVerticesTotal+=a,this.numNormalsTotal+=a,this.endCap.vertexBufferStart=this.numVerticesTotal;const h=this.endCap.getNumVertices();this.numVerticesTotal+=h,this.numNormalsTotal+=h,this.pathVertexData=new Float32Array(1*this.numVerticesTotal),this.profileRightAxisData=new Float32Array(4*this.numVerticesTotal),this.profileUpAxisData=new Float32Array(4*this.numVerticesTotal),this.profileVertexAndNormalData=new Float32Array(4*this.numVerticesTotal),this.profile.hasUV()&&this.options.generateUV&&(this.numUVTotal=this.profile.uvs.length,this.uvData=new Float32Array(2*this.numUVTotal)),this.originData=new Float32Array(3*this.path.vertices.length),this.rebuildGeometry(),this.buildTopology()}var e=t.prototype;return e.emitVertex=function(t,e,i,r,s){if(this.profileRightAxisData[4*this._extrusionVertexCount+0]=e.right[0],this.profileRightAxisData[4*this._extrusionVertexCount+1]=e.right[1],this.profileRightAxisData[4*this._extrusionVertexCount+2]=e.right[2],this.profileUpAxisData[4*this._extrusionVertexCount+0]=e.up[0],this.profileUpAxisData[4*this._extrusionVertexCount+1]=e.up[1],this.profileUpAxisData[4*this._extrusionVertexCount+2]=e.up[2],this.profileVertexAndNormalData[4*this._extrusionVertexCount+0]=i[0],this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=i[1],this.profileVertexAndNormalData[4*this._extrusionVertexCount+2]=r[0],this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=r[1],this.pathVertexData[this._extrusionVertexCount]=t,s){const e=this.path.vertices[t];this.profileRightAxisData[4*this._extrusionVertexCount+3]=e.rotationRight[0]*e.maxStretchDistance,this.profileUpAxisData[4*this._extrusionVertexCount+3]=e.rotationRight[1]*e.maxStretchDistance}else this.profileRightAxisData[4*this._extrusionVertexCount+3]=0,this.profileUpAxisData[4*this._extrusionVertexCount+3]=0;++this._extrusionVertexCount},e.emitCapVertex=function(t,e,i,r,s,o){this.profileRightAxisData[4*this._extrusionVertexCount+0]=e.right[0],this.profileRightAxisData[4*this._extrusionVertexCount+1]=e.right[1],this.profileRightAxisData[4*this._extrusionVertexCount+2]=e.right[2],this.profileUpAxisData[4*this._extrusionVertexCount+0]=e.up[0],this.profileUpAxisData[4*this._extrusionVertexCount+1]=e.up[1],this.profileUpAxisData[4*this._extrusionVertexCount+2]=e.up[2],this.profileVertexAndNormalData[4*this._extrusionVertexCount+0]=i[0],this.profileVertexAndNormalData[4*this._extrusionVertexCount+1]=i[1],this.profileVertexAndNormalData[4*this._extrusionVertexCount+2]=r[0],this.profileVertexAndNormalData[4*this._extrusionVertexCount+3]=r[1],this.pathVertexData[this._extrusionVertexCount]=t,this.profileRightAxisData[4*this._extrusionVertexCount+3]=s,this.profileUpAxisData[4*this._extrusionVertexCount+3]=o,++this._extrusionVertexCount},e.emitTriangle=function(t,e,i){this.vertexIndices[3*this._triangleCount+0]=t,this.vertexIndices[3*this._triangleCount+1]=e,this.vertexIndices[3*this._triangleCount+2]=i,this.pathVertexIndices[3*this._triangleCount+0]=this.pathVertexData[t],this.pathVertexIndices[3*this._triangleCount+1]=this.pathVertexData[e],this.pathVertexIndices[3*this._triangleCount+2]=this.pathVertexData[i],this.normalIndices[3*this._triangleCount+0]=t,this.normalIndices[3*this._triangleCount+1]=e,this.normalIndices[3*this._triangleCount+2]=i,++this._triangleCount},e.rebuildGeometry=function(){const t=(t,e,i,r,s)=>this.emitVertex(t,e,i,r,s),e=(t,e,i,r,s,o)=>this.emitCapVertex(t,e,i,r,s,o);this._extrusionVertexCount=0;for(const i of this.path.vertices)this.originData[3*i.index+0]=i.pos[0],this.originData[3*i.index+1]=i.pos[1],this.originData[3*i.index+2]=i.pos[2];this.startCap.rebuildConnectingProfileGeometry(this.path.vertices[0],this.profile,e);for(let i=1;i<this.path.vertices.length-1;++i)this.extruder.extrude(this.path.vertices[i],this.profile,t);if(this.endCap.rebuildConnectingProfileGeometry(this.path.vertices[this.path.vertices.length-1],this.profile,e),this.startCap.rebuildCapGeometry(this.path.vertices[0],e),this.endCap.rebuildCapGeometry(this.path.vertices[this.path.vertices.length-1],e),this.profile.hasUV()&&this.options.generateUV)for(let i=0;i<this.profile.uvs.length;++i)this.uvData[2*i+0]=this.profile.uvs[i],this.uvData[2*i+1]=0},e.buildTopology=function(){const t=(t,e,i)=>this.emitTriangle(t,e,i);this._triangleCount=0;const e=this.profile.vertices.length,i=this.profile.numSegments,r=this.numExtrusionProfiles-1;let s=3*(2*(i*r));this.startCap.indexBufferStart=s,this.startCap.firstProfileVertexIndex=0,s+=this.startCap.getNumIndices(),this.endCap.indexBufferStart=s,this.endCap.firstProfileVertexIndex=e*(this.numExtrusionProfiles-1),s+=this.endCap.getNumIndices(),this.vertexIndices=new Uint32Array(s),this.normalIndices=new Uint32Array(s),this.pathVertexIndices=new Uint32Array(s),this.profile.hasUV()&&this.options.generateUV&&(this.uvIndices=new Uint32Array(s));for(let o=0;o<i;++o){const i=this.profile.vertexIndices[2*o],s=this.profile.vertexIndices[2*o+1];for(let o=0;o<r;++o){const r=o*e+i,n=(o+1)*e+s,a=o*e+s;t(r,(o+1)*e+i,n),t(r,n,a)}}this.startCap.buildTopology(this.path.vertices[0],t),this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],t)},e.onPathChanged=function(){this.rebuildGeometry()},t}(),T=function(){function t(t){this.builder=t}return t.prototype.onPathChanged=function(){this.builder.onPathChanged()},e._createClass(t,[{key:"xform",get:function(){return this.builder.path.xform}}]),t}(),L=function(t){function r(e){var i;return(i=t.call(this,e)||this).vertexAttributePosition=null,i.vertexAttributeNormal=null,i.vertexAttributeColor=null,i.vertexAttributePosition=new Float32Array(3*i.builder.numVerticesTotal),i.vertexAttributeNormal=new Float32Array(3*i.builder.numNormalsTotal),i.vertexAttributeColor=new Uint8Array(4),i.vertexAttributeColor[0]=255,i.vertexAttributeColor[1]=255,i.vertexAttributeColor[2]=255,i.vertexAttributeColor[3]=255,i}e._inheritsLoose(r,t);var s=r.prototype;return s.bakeVertexColors=function(t){this.vertexAttributeColor[0]=255*t[0],this.vertexAttributeColor[1]=255*t[1],this.vertexAttributeColor[2]=255*t[2],this.vertexAttributeColor[3]=255*(t.length>3?t[3]:1)},s.bake=function(t){this.size=t;for(let e=0;e<this.builder.numVerticesTotal;++e){let r=this.builder.pathVertexData[e];const s=0===r||r===this.builder.path.vertices.length-1;r*=3;const o=M;l.set(o,this.builder.originData[r++],this.builder.originData[r++],this.builder.originData[r]);const n=4*e,h=w,u=B,c=G,f=E,p=O;let d=0,x=0;if(l.set(f,this.builder.profileRightAxisData[n],this.builder.profileRightAxisData[n+1],this.builder.profileRightAxisData[n+2]),l.set(p,this.builder.profileUpAxisData[n],this.builder.profileUpAxisData[n+1],this.builder.profileUpAxisData[n+2]),a.set(u,this.builder.profileVertexAndNormalData[n]*t[0],this.builder.profileVertexAndNormalData[n+1]*t[1]),s)l.cross(c,p,f),d=this.builder.profileRightAxisData[n+3]*t[0],x=this.builder.profileUpAxisData[n+3];else{const t=z,e=F;a.set(t,this.builder.profileRightAxisData[n+3],this.builder.profileUpAxisData[n+3]);const r=a.length(t);a.normalize(t,t);const s=a.dot(u,t);if(Math.abs(s)>r){a.set(e,-t[1],t[0]);const o=a.dot(u,e);a.scale(t,t,r*i.sign(s)),a.scale(e,e,o),a.add(u,t,e)}l.set(c,0,0,0)}l.set(h,f[0]*u[0]+p[0]*u[1],f[1]*u[0]+p[1]*u[1],f[2]*u[0]+p[2]*u[1]),this.vertexAttributePosition[3*e+0]=o[0]+h[0]+c[0]*d,this.vertexAttributePosition[3*e+1]=o[1]+h[1]+c[1]*d,this.vertexAttributePosition[3*e+2]=o[2]+h[2]+c[2]*d;const v=B;a.set(v,this.builder.profileVertexAndNormalData[n+2],this.builder.profileVertexAndNormalData[n+3]),this.vertexAttributeNormal[3*e+0]=f[0]*v[0]+p[0]*v[1]+c[0]*x,this.vertexAttributeNormal[3*e+1]=f[1]*v[0]+p[1]*v[1]+c[1]*x,this.vertexAttributeNormal[3*e+2]=f[2]*v[0]+p[2]*v[1]+c[2]*x}},s.createGeometryData=function(){const t=[["position",this.builder.vertexIndices],["normal",this.builder.normalIndices]],e=[["position",{size:3,data:this.vertexAttributePosition,exclusive:!0}],["normal",{size:3,data:this.vertexAttributeNormal,exclusive:!0}]];if(this.vertexAttributeColor){const i=this.builder.vertexIndices.length;t.push(["color",new Uint32Array(i)]),e.push(["color",{size:4,data:this.vertexAttributeColor}])}return{vertexAttributes:e,indices:t}},s.onPathChanged=function(){t.prototype.onPathChanged.call(this),this.bake(this.size)},s.intersect=function(t,e,i){const r=this.builder.vertexIndices,s={size:3,data:this.vertexAttributePosition},o=r.length/3;d.intersectTriangles(t,e,0,o,r,s,void 0,void 0,i)},r}(T),k=function(t){function i(e,i,r,s){var o;(o=t.call(this,e)||this).sizeAttributeValue=i,o.colorAttributeValue=r,o.opacityAttributeValue=s,o.vvData=null,o.baked=new L(e),o.vvData=new Float32Array(4*o.builder.path.vertices.length);for(let t=0;t<o.builder.path.vertices.length;++t){o.vvData[4*t+0]=i,o.vvData[4*t+1]=r,o.vvData[4*t+2]=s;const e=0===t||t===o.builder.path.vertices.length-1;o.vvData[4*t+3]=e?1:0}return o}return e._inheritsLoose(i,t),i.prototype.createGeometryData=function(){return{vertexAttributes:[["position",{size:3,data:this.builder.originData,exclusive:!0}],["profileRight",{size:4,data:this.builder.profileRightAxisData,exclusive:!0}],["profileUp",{size:4,data:this.builder.profileUpAxisData,exclusive:!0}],["profileVertexAndNormal",{size:4,data:this.builder.profileVertexAndNormalData,exclusive:!0}],["featureValue",{size:4,data:this.vvData,exclusive:!0}]],indices:[["position",this.builder.pathVertexIndices],["profileRight",this.builder.vertexIndices],["profileUp",this.builder.vertexIndices],["profileVertexAndNormal",this.builder.vertexIndices],["featureValue",this.builder.pathVertexIndices]]}},i}(T);const M=u.create(),B=h.create(),z=h.create(),F=h.create(),w=u.create(),G=u.create(),E=u.create(),O=u.create(),J=u.create(),j=x(),q=n.create();t.Builder=U,t.CapBuilder=N,t.Extruder=D,t.FastUpdatePathGeometry=k,t.MiterExtruder=I,t.NoCapBuilder=_,t.Path=A,t.PathGeometryData=T,t.PathVertex=V,t.Profile=b,t.RoundCapBuilder=S,t.SimpleExtruder=y,t.StaticPathGeometry=L,t.TriangulationCapBuilder=R,t.computeMinimumRotationTangentFrame=C,t.makeFrame=x,t.profileSpaceToVertexSpace=m,t.vertexSpaceToProfileSpace=g,Object.defineProperty(t,"__esModule",{value:!0})}));
