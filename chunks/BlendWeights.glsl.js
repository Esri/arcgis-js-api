/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,o,r,t,s,c){"use strict";const d={maxSearchSteps:8,maxDistanceAreaTex:16};function x(){const e=new r.ShaderBuilder,{attributes:x,varyings:a,vertex:i,fragment:n}=e;return x.add(s.VertexAttribute.POSITION,"vec2"),a.add("fTexCoord","vec2"),a.add("fOffset[3]","vec4"),a.add("fPixCoord","vec2"),c.addResolutionUniform(i),i.code.add(o.glsl`
      void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
        fPixCoord = texcoord * resolution.zw;
        fOffset[0] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 );
        fOffset[1] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 );
        fOffset[2] = vec4( fOffset[0].xz, fOffset[1].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( ${o.glsl.int(d.maxSearchSteps)} );
      }

      void main() {
        fTexCoord = (position + 1.0 ) * 0.5;
        gl_Position = vec4(position, 0, 1);
        SMAABlendingWeightCalculationVS( fTexCoord );
      }
    `),n.uniforms.add(new t.Texture2DPassUniform("tEdges",(e=>e.edges.colorTexture))),n.uniforms.add(new t.Texture2DPassUniform("tArea",(e=>e.areaTexture))),n.uniforms.add(new t.Texture2DPassUniform("tSearch",(e=>e.searchTexture))),n.uniforms.add(new t.Texture2DPassUniform("tColor",(e=>e.colorTexture))),c.addResolutionUniform(n),n.code.add(o.glsl`
      #define SMAA_AREATEX_PIXEL_SIZE ( 1.0 / vec2( 160.0, 560.0 ) )
      #define SMAA_AREATEX_SUBTEX_SIZE ( 1.0 / 7.0 )

      vec4 SMAASampleLevelZeroOffset(sampler2D texture, vec2 coord, vec2 offset) {
        return texture2D(texture, coord + offset.x * resolution.xy, 0.0);
      }

      vec2 round( vec2 x ) {
        return sign( x ) * floor( abs( x ) + 0.5 );
      }

      float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
        e.r = bias + e.r * scale;
        return 255.0 * texture2D( searchTex, e, 0.0 ).r;
      }

      float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${o.glsl.int(d.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x += 0.25 * resolution.x;
        texcoord.x += resolution.x;
        texcoord.x += 2.0 * resolution.x;
        texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);
        return texcoord.x;
      }

      float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 0.0, 1.0 );
        for ( int i = 0; i < ${o.glsl.int(d.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 2.0, 0.0 ) * resolution.xy;
          if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
        }
        texcoord.x -= 0.25 * resolution.x;
        texcoord.x -= resolution.x;
        texcoord.x -= 2.0 * resolution.x;
        texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );
        return texcoord.x;
      }

      float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${o.glsl.int(d.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord += vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y -= 0.25 * resolution.y;
        texcoord.y -= resolution.y;
        texcoord.y -= 2.0 * resolution.y;
        texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 );
        return texcoord.y;
      }

      float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
        vec2 e = vec2( 1.0, 0.0 );
        for ( int i = 0; i < ${o.glsl.int(d.maxSearchSteps)}; i ++ ) {
          e = texture2D( edgesTex, texcoord, 0.0 ).rg;
          texcoord -= vec2( 0.0, 2.0 ) * resolution.xy;
          if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
        }
        texcoord.y += 0.25 * resolution.y;
        texcoord.y += resolution.y;
        texcoord.y += 2.0 * resolution.y;
        texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 );
        return texcoord.y;
      }

      vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
        vec2 texcoord = float( ${o.glsl.int(d.maxDistanceAreaTex)} ) * round( 4.0 * vec2( e1, e2 ) ) + dist;
        texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );
        texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;
        return texture2D( areaTex, texcoord, 0.0 ).rg;
      }

      vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
        vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );
        vec2 e = texture2D( edgesTex, texcoord ).rg;
        if ( e.g > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
          coords.y = offset[ 1 ].y;
          d.x = coords.x;
          float e1 = texture2D( edgesTex, coords, 0.0 ).r;
          coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
          d.y = coords.x;
          d = d * resolution.z - pixcoord.x;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 1.0, 0.0 ) ).r;
          weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
        }

        if ( e.r > 0.0 ) {
          vec2 d;
          vec2 coords;
          coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
          coords.x = offset[ 0 ].x;
          d.x = coords.y;
          float e1 = texture2D( edgesTex, coords, 0.0 ).g;
          coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
          d.y = coords.y;
          d = d * resolution.w - pixcoord.y;
          vec2 sqrt_d = sqrt( abs( d ) );
          coords.y -= 1.0 * resolution.y;
          float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, vec2( 0.0, 1.0 ) ).g;
          weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );

          // for some reason the following lines are necessary to prevent
          // texture lookup precision issues on some Intel integrated graphics chips
          vec4 dbg = (offset[ 0 ]+offset[ 1 ]+offset[ 2 ] + coords.xyyx);
          weights.r += 0.00000001 * dot(vec4(0,1,0,1),dbg);
        }
        return weights;
      }

      void main() {
        gl_FragColor = SMAABlendingWeightCalculationPS( fTexCoord, fPixCoord, fOffset, tEdges, tArea, tSearch, ivec4( 0.0 ) );
      }
    `),e}const a=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}));e.BlendWeights=a,e.build=x}));
