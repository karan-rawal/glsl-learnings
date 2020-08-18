// sets precision of data type(float)
// it can be mediump, lowp or highp
// the higher the precision, the higher the quality
#ifdef GL_ES
precision mediump float;
#endif

void main() {
    // the main job of a frag shader is to set the color
    // gl_FragColor is the built-in variable of glsl.
    // we set this value to show pink color screen.
    // fragment shader runs for each pixel. YES! EACH PIXEL!
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}