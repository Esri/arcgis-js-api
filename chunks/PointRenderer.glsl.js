/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../core/mathUtils","./mat4","./mat4f64","./vec2","./vec2f64","./vec3","./vec3f64","../geometry/support/aaBoundingBox","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,r,t,a,o,n,s,l,c,d,p,u,g,f,S,m,h,w,v,x,z,M){"use strict";let P=function(e){function r(){var i;return(i=e.apply(this,arguments)||this).clipBox=c.create(c.POSITIVE_INFINITY),i.useFixedSizes=!1,i.useRealWorldSymbolSizes=!1,i.scaleFactor=1,i.minSizePx=0,i.size=0,i.sizePx=0,i}return i._inheritsLoose(r,e),i._createClass(r,[{key:"fixedSize",get:function(){return this.drawScreenSpace?this.sizePx:this.size}},{key:"screenMinSize",get:function(){return this.useFixedSizes?0:this.minSizePx}},{key:"drawScreenSpace",get:function(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}}]),r}(w.NoParameters),b=function(e){function r(i,r,t){var a;return(a=e.call(this,i)||this).origin=i,a.isLeaf=r,a.splatSize=t,a}return i._inheritsLoose(r,e),r}(u.SlicePlaneParameters);function _(e){const i=new z.ShaderBuilder,a=e.output===p.ShaderOutput.Color,n=e.output===p.ShaderOutput.Depth,l=e.output===p.ShaderOutput.Highlight,{vertex:c,fragment:P}=i;return i.extensions.add("GL_OES_standard_derivatives"),i.include(u.SliceDraw,e),i.attributes.add(M.VertexAttribute.POSITION,"vec3"),i.attributes.add(M.VertexAttribute.COLOR,"vec3"),c.uniforms.add([new v.Matrix4DrawUniform("modelView",((e,i)=>t.multiply(y,i.camera.viewMatrix,t.fromTranslation(y,e.origin)))),new x.Matrix4PassUniform("proj",((e,i)=>i.camera.projectionMatrix)),new S.Float2DrawUniform("screenMinMaxSize",((e,i,r)=>o.set(R,r.useFixedSizes?0:r.minSizePx*i.camera.pixelRatio,F(e.isLeaf)*i.camera.pixelRatio)))]),c.uniforms.add(e.useFixedSizes?new m.Float2PassUniform("pointScale",((e,i)=>o.set(R,e.fixedSize*i.camera.pixelRatio,i.camera.fullHeight))):new S.Float2DrawUniform("pointScale",((e,i,r)=>o.set(R,e.splatSize*r.scaleFactor*i.camera.pixelRatio,i.camera.fullHeight/i.camera.pixelRatio)))),e.clippingEnabled?c.uniforms.add([new h.Float3DrawUniform("clipMin",((e,i,r)=>s.set(O,r.clipBox[0]-e.origin[0],r.clipBox[1]-e.origin[1],r.clipBox[2]-e.origin[2]))),new h.Float3DrawUniform("clipMax",((e,i,r)=>s.set(O,r.clipBox[3]-e.origin[0],r.clipBox[4]-e.origin[1],r.clipBox[5]-e.origin[2])))]):(c.constants.add("clipMin","vec3",[-r.NUMBER_MAX_FLOAT32,-r.NUMBER_MAX_FLOAT32,-r.NUMBER_MAX_FLOAT32]),c.constants.add("clipMax","vec3",[r.NUMBER_MAX_FLOAT32,r.NUMBER_MAX_FLOAT32,r.NUMBER_MAX_FLOAT32])),n?(d.addNearFar(i),d.addCalculateLinearDepth(i),i.varyings.add("depth","float")):e.output!==p.ShaderOutput.Highlight&&i.varyings.add("vColor","vec3"),c.code.add(w.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${e.drawScreenSize?w.glsl`
      float clampedScreenSize = pointSize;`:w.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${n?w.glsl`depth = calculateLinearDepth(nearFar, camera.z);`:""}
     ${a?w.glsl`vColor = color;`:""}
    }
  `),P.include(f.RgbaFloatEncoding,e),l&&i.include(g.OutputHighlight,e),P.code.add(w.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${n?w.glsl`gl_FragColor = float2rgba(depth);`:""}
      ${l?w.glsl`outputHighlight();`:""}
      ${a?w.glsl`gl_FragColor = vec4(vColor, 1.0);`:""}
    }
  `),i}function F(e){return e?256:64}const y=a.create(),O=l.create(),R=n.create(),L=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:b,PointRendererPassParameters:P,build:_,getMaxPointSizeScreenspace:F},Symbol.toStringTag,{value:"Module"}));e.PointRendererDrawParameters=b,e.PointRendererPassParameters=P,e.PointRendererShader=L,e.build=_,e.getMaxPointSizeScreenspace=F}));
