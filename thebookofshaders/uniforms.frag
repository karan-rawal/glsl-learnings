#ifdef GL_ES
precision mediump float;
#endif

// Basically, each shader run in different threads.
// But sometimes, we need some data which can be used across these threads.
// For such data, we use uniform keyword.

// this value will be same across all the shaders.
// there are some built-in uniform values as follows:
// u_time: Time in seconds since the shader has been loaded.
// u_mouse: Current position of mouse cursor.
// u_resolution: Resolution of the canvas/screen.

uniform float u_time; // Time in seconds since load
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
    // gl_FragCoord is another built-in variable
    // it gives us position of the current fragment

    // the line below, remaps the value to range 0 - 1.
    vec2 fragPos = gl_FragCoord.xy / u_resolution;
    float blinkerValue = abs(sin(u_time * 2.0));
    // again we need to convert mouse postion to range 0 - 1.
    vec2 offset = u_mouse / u_resolution;

    gl_FragColor = vec4((fragPos + offset) * blinkerValue, 0, 1);
}