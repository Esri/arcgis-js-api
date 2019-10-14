precision mediump float;

attribute vec2 a_pos;

varying highp vec2 v_texcoord;

void main()
{
  v_texcoord = a_pos; 
  
  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0); 
}
