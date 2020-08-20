#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st) {
    // this function draws a diagonal line from top right to bottom left
    // to make it from top left to bottom right,
    // just inverse st.x - st.y
    // to inverse a value, just subtract it from 1.
    return smoothstep(0.01, 0.00, abs(st.x - st.y));
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    
    float y = st.x;
    
    vec3 color = vec3(y);
    
    // Plot a line
    float pct = plot(st);
    color = (1. - pct) * color + pct *vec3(0.0 ,1., 0.0);
	
    gl_FragColor = vec4(color,1.0);
}
