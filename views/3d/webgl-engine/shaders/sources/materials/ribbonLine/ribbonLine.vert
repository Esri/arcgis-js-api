#include <util/vsPrecision.glsl>
#include <materials/ribbonLine/inputs.glsl>


const float PI = 3.1415926535897932384626433832795;

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

uniform float nearPlane;
uniform float pixelRatio;

attribute vec3 position;

// The subdivision factor helps realizing round joins and caps. The round geometry is created by adding additional
// vertices. The subdivisionFactor indicates which of the subdivided vertices the shader is working with so that
// the vertex can be pushed into the right place.
attribute float subdivisionFactor;

// They uv0.y value is used to encode whether we are dealing with a vertex on the left or right side of the line,
// the start- or endvertex of a line segment and and start or end cap. The encoding is as follows:
// sign(uv0.y) -> left (<0) or right (>0)
// abs(uv0.y):
//    1: join, endVertex
//    2: join, startVertex
//    4: cap, startVertex <- startCap
//    5: cap, endVertex <- endCap
attribute vec2 uv0;

varying vec2 vtc;
varying vec4 vColor;
varying vec3 vpos;

uniform float miterLimit;
attribute vec3 auxpos1;
attribute vec3 auxpos2;


uniform vec2 screenSize;

vec4 toScreenCoords(vec3 vertex) {
  vec4 vClipSpace = proj * view * vec4((model * vec4(vertex, 1.0)).xyz, 1.0);
  vClipSpace.xy *= screenSize;
  return vClipSpace/abs(vClipSpace.w);
}

#define PERPENDICULAR(v) vec2(v.y, -v.x);
#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0


float interp(float ncp, vec4 a, vec4 b) {
  return (-ncp - a.z) / (b.z - a.z);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
  float vnp = nearPlane*0.99;

  //current pos behind ncp --> we need to clip
  if(pos.z > -nearPlane) {
    if (!isStartVertex) {
      //previous in front of ncp
      if(prev.z < -nearPlane) {
        pos = mix(prev, pos, interp(vnp, prev, pos));
        next = pos;
      } else {
        pos = vec4(0.0, 0.0, 0.0, 1.0);
      }
    }
    //next in front of ncp
    if(isStartVertex) {
      if(next.z < -nearPlane) {
        pos = mix(pos, next, interp(vnp, pos, next));
        prev = pos;
      } else {
        pos = vec4(0.0, 0.0, 0.0, 1.0);
      }
    }
  } else {
    //current position visible
    //previous behind ncp
    if (prev.z > -nearPlane) {
      prev = mix(pos, prev, interp(vnp, pos, prev));
    }
    //next behind ncp
    if (next.z > -nearPlane) {
      next = mix(next, pos, interp(vnp, next, pos));
    }
  }

  pos= proj * pos;
  pos.xy *= screenSize;
  pos /= pos.w;

  next = proj * next;
  next.xy *= screenSize;
  next /= next.w;

  prev = proj * prev;
  prev.xy *= screenSize;
  prev /= prev.w;
}


void main(void) {
  vpos = (model * vec4(position, 1.0)).xyz;

  // Check for special value of uv0.y which is used by the Renderer when graphics
  // are removed before the VBO is recompacted. If this is the case, then we just
  // project outside of clip space.
  if (uv0.y == 0.0) {
    // Project out of clip space
    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
  }
  else {
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
    bool isJoin = abs(uv0.y)-3.0 < 0.0;
    


    float lineWidth = getSize() * pixelRatio;



    vec4 pos  = view * vec4((model * vec4(position.xyz, 1.0)).xyz, 1.0);
    vec4 prev = view * vec4((model * vec4(auxpos1.xyz, 1.0)).xyz, 1.0);
    vec4 next = view * vec4((model * vec4(auxpos2.xyz, 1.0)).xyz, 1.0);

    clipAndTransform(pos, prev, next, isStartVertex);

    vec2 left = (pos - prev).xy;
    vec2 right = (next - pos).xy;


    float leftLen = length(left);
    left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);

    float rightLen = length(right);
    right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);

    vec2 capDisplacementDir = vec2(0, 0);
    vec2 joinDisplacementDir = vec2(0, 0);
    float displacementLen = lineWidth;

    if( isJoin ){

      // JOIN handling ---------------------------------------------------
      // determine if vertex is on the "outside or "inside" of the join
      bool isOutside = ISOUTSIDE;


      // compute miter join position first
      joinDisplacementDir = normalize(left + right);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      // computer miter stretch
      if (leftLen > 0.001 && rightLen > 0.001) {
        float nDotSeg = dot(joinDisplacementDir, left);
        displacementLen /= length(nDotSeg*left - joinDisplacementDir);

        // limit displacement of inner vertices
        if (!isOutside) {
          displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
        }
      }

      if (isOutside && (displacementLen > miterLimit*lineWidth)) {
#ifdef JOIN_ROUND

        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);
        
        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate( startDir, -sign(uv0.y)*subdivisionFactor*rotationAngle );

        displacementLen = lineWidth;
#else
        // convert to bevel join if miterLimit is exceeded
        if (leftLen < 0.001) {
          joinDisplacementDir = right;
        }
        else if (rightLen < 0.001) {
          joinDisplacementDir = left;
        }
        else {
          joinDisplacementDir = isStartVertex ? right : left;
        }
        joinDisplacementDir = normalize(joinDisplacementDir);
        joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
        displacementLen = lineWidth;
#endif // if JOIN_ROUND
      }
    } else {
      // CAP handling ---------------------------------------------------
      if (leftLen < 0.001) {
        joinDisplacementDir = right;
      }
      else if (rightLen < 0.001) {
        joinDisplacementDir = left;
      }
      else {
        joinDisplacementDir = isStartVertex ? right : left;
      }
      joinDisplacementDir = normalize(joinDisplacementDir);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
      displacementLen = lineWidth;

      capDisplacementDir = isStartVertex ? -right : left;

  #ifdef CAP_ROUND
      float angle = subdivisionFactor*PI*0.5;
      joinDisplacementDir *= cos(angle);
      capDisplacementDir *= sin(angle);
  #else
      // butt and square cap
      capDisplacementDir *= subdivisionFactor;
  #endif
    }



    pos.xy += joinDisplacementDir * sign(uv0.y) * displacementLen;
    pos.xy += capDisplacementDir * displacementLen;
    pos.xy /= screenSize;

    vtc = uv0;
    vColor = getColor();
    gl_Position = pos;
  }
}
