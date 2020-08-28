#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const float PI = 3.14159265359;

vec3 hsb2rgb( float hue, float saturation, float value ){
    float animator = abs(sin(u_time));
    vec3 rgb = clamp(abs(mod(vec3(hue * 6.) + vec3(0.0, 4.0, 2.0), 6.) - 3.) - 1.0, 0.0, 1.0);
    rgb = rgb * rgb * (3.0 - 2. * rgb);
    return value * mix( vec3(1.0), rgb, saturation);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);

    color = hsb2rgb(st.x, 1.0, st.y);
    gl_FragColor = vec4(color,1.0);
}
