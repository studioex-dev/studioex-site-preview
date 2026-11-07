import{t as e}from"./preload-helper.DygEbaNj.js";var t=Object.defineProperty,n=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},r=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],i=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],a=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],o=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],s=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],c=e=>Math.hypot(e[0],e[1],e[2]),l=e=>{let t=c(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},u=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],d=(e,t,n)=>{let i=Math.acos(Math.max(-1,Math.min(1,o(e,t))));if(i<1e-6)return e;let u=s(e,t),d=c(u);u=d<1e-6?l(s(e,[0,1,.3])):a(u,1/d);let f=i*n;return r(a(e,Math.cos(f)),a(s(u,e),Math.sin(f)))},f=(e,t,n)=>r(r(a(e,Math.cos(n)),a(s(t,e),Math.sin(n))),a(t,o(t,e)*(1-Math.cos(n)))),p=e=>Math.max(0,Math.min(1,e)),m=e=>(e=p(e),e*e*(3-2*e)),h=e=>(e=p(e),e*e*e*(e*(e*6-15)+10)),g=Math.PI/180,_=(e,t)=>[Math.cos(e*g)*Math.sin(t*g),Math.sin(e*g),Math.cos(e*g)*Math.cos(t*g)],v=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return[n*e[0]+r*e[2],e[1],n*e[2]-r*e[0]]},y=[[40.71,-74],[34.05,-118.24],[6.52,3.38],[25.2,55.27],[35.68,139.69],[1.35,103.82],[48.86,2.35],[22.32,114.17],[-1.29,36.82],[-33.87,151.21]],b=[51.51,-.13],x=[13.08,80.27],S=[-23.55,-46.63],C=y,w=[[b,x],[b,S],[b,C[0]],[b,C[2]],[b,C[3]],[b,C[4]],[x,C[5]],[S,C[0]],[C[0],C[1]],[C[6],C[3]],[C[7],C[4]],[C[2],C[8]]].map(([e,t])=>({from:e,to:t}));function T(){let e={"Europe/London":[51.5,-.13],"Europe/Dublin":[53.35,-6.26],"Europe/Paris":[48.86,2.35],"Europe/Berlin":[52.52,13.4],"Europe/Madrid":[40.42,-3.7],"America/New_York":[40.7,-74],"America/Chicago":[41.88,-87.63],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Asia/Kolkata":[19.08,72.88],"Asia/Calcutta":[19.08,72.88],"Asia/Dubai":[25.2,55.27],"Asia/Tokyo":[35.68,139.69],"Asia/Singapore":[1.35,103.82],"Australia/Sydney":[-33.87,151.2]},t=``;try{t=Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{}return e[t]??[30,-new Date().getTimezoneOffset()/4]}var E=.025;function D(e,t){let n=E,i=_(e,t),o=l(s([0,1,0],i)),c=s(i,o),u=e=>r(r(a(o,e[0]),a(i,e[1])),a(c,e[2])),d=(e,t,o)=>r(i,a(u([e,t,o]),n)),f=d(0,.045/n,-1);return{U:i,E:o,N:c,dirW:u,L2W:d,P0:f,B:l(f)}}var O=D(51.508,-.093),k=4.5,A=3.5,j=l(_(22,-18)),M=.2,N=.6,P=3,F=3.5,I=6.5,ee=e=>l(i([0,1,0],a(e,e[1]))),te=e=>v(j,e),L=[[0,1.8,-1],[.7,1.55,-1.45],[1.5,1.15,-1.55],[2.1,.75,-1.32],[2.55,.34,-.95],[2.12,.085,-.66],[1.55,.022,-.455]],R=[[0,0,-.99],[.35,0,-.1],[.32,.03,.25],[.3,.06,.42],[1,.05,-.2],[1.2,.05,-.3],[1.15,.06,-.25]],z=(()=>{let e=[0],t=V(L,0);for(let n=1;n<=240;n++){let r=V(L,n/240);e.push(e[n-1]+Math.hypot(r[0]-t[0],r[1]-t[1],r[2]-t[2])),t=r}return e.map(t=>t/e[240])})();function B(e){let t=z.length-1;if(e<=0)return 0;if(e>=1)return 1;let n=0,r=t;for(;r-n>1;){let t=n+r>>1;z[t]<e?n=t:r=t}return(n+(e-z[n])/Math.max(1e-9,z[r]-z[n]))/t}function V(e,t){let n=e.length-1,r=Math.min(Math.max(t,0)*n,n-1e-6),i=Math.floor(r),a=r-i,o=e[Math.max(0,i-1)],s=e[i],c=e[i+1],l=e[Math.min(n,i+2)],u=a*a,d=u*a;return[0,1,2].map(e=>.5*(2*s[e]+(-o[e]+c[e])*a+(2*o[e]-5*s[e]+4*c[e]-l[e])*u+(-o[e]+3*s[e]-3*c[e]+l[e])*d))}function ne(e,t){let n=O,r=Math.max(0,Math.min(1,e)),p;if(r<=N){let e=r<=M?r/M*P:P+(r-M)/.39999999999999997*F,g=h(e/I),_=d(t,n.B,g),v=Math.max(0,Math.min(1,(e-P)/F)),y=v*v*(2-v),b=c(n.P0)-1,x=Math.exp(Math.log(A)+(Math.log(b)-Math.log(A))*y),S=Math.acos(Math.max(-1,Math.min(1,o(t,n.B)))),C=s(t,n.B);C=c(C)<1e-6?l(s(t,[0,1,.3])):l(C);let w=ee(t),T=f(w,C,S),E=l(i(n.N,a(n.B,o(n.B,n.N)))),D=Math.atan2(o(s(T,E),n.B),o(T,E));p={pos:a(_,1+x),fw:l(u(a(_,-1),a(n.U,-1),y)),up:f(f(w,C,S*g),_,D*g),kc:y,dive:m((e-2.5)/4),rise:0,blast:0,burst:0,fade:m((e-4.225)/(F*.65)),on:1-m((e-P+.3)/1.5)}}else{let e=(r-N)/.4,t=B(1-(1-e)*(1-e)),a=V(L,t),o=l(i(V(R,t),a)),s=m(t/.45);p={pos:n.L2W(a[0],a[1],a[2]),fw:n.dirW(o),up:n.dirW(l([0,s,1-s])),kc:1,dive:1,rise:h(t/.75),blast:1,burst:0,fade:1,on:0}}return p.blast=m((r-.17)/.3),p.burst=Math.max(0,Math.min(1,(r-.14)/.78)),p.up=l(i(p.up,a(p.fw,o(p.up,p.fw)))),p}var H=`precision highp float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
uniform vec3 uCam;
uniform vec3 uRt;
uniform vec3 uUp;
uniform vec3 uFw;
uniform vec2 uC;
uniform vec2 uRes;
uniform float uFocal;
uniform float uT;
uniform float uDpr;
varying vec4 vC;
vec4 clipAt(vec2 sp) { return vec4(sp.x / uRes.x * 2.0 - 1.0, 1.0 - sp.y / uRes.y * 2.0, 0.0, 1.0); }
vec2 screen(vec3 v, float ez) { return uC + vec2(dot(v, uRt), -dot(v, uUp)) * uFocal / ez; }
#define CULL { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 1.0; vC = vec4(0.0); return; }
`,re=`${H}
attribute vec3 aP;
attribute vec4 aS;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform float uRef, uSize, uAlpha, uCityFade, uK0, uK1, uBlast;
void main() {
  vec3 n = normalize(aP);
  float disp = 0.006 * sin(uT * 0.6) + 0.004 * sin(uT * 0.8 + aS.x * 6.2831853);
  // The burst: the globe blows apart, outward and twisting, as the dive begins.
  float b = uBlast * (0.55 + 0.45 * aS.z);
  vec3 w = aP * (1.0 + disp) + n * b * (0.3 + 1.6 * aS.x) + cross(uCityP, n) * b * (aS.y - 0.5) * 1.8;
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.002) CULL
  gl_Position = clipAt(screen(v, ez));
  float facing = dot(n, normalize(uCam - w));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(n, uLight), 0.0, 1.0);
  vec3 col = mix(BLUE, WHITE, mix(uK0, uK1, lam * 0.9));
  float tw = 0.85 + 0.15 * sin(uT * (0.5 + aS.x * 1.2) + aS.y * 40.0);
  float keep = smoothstep(0.999, 0.99985, dot(n, uCityP));
  float a = uAlpha * vis * tw * mix(1.0, keep * 0.5, uCityFade) * (1.0 - smoothstep(0.25, 0.9, uBlast));
  col = mix(col, WHITE, 0.6 * smoothstep(0.0, 0.3, uBlast) * (1.0 - smoothstep(0.3, 0.9, uBlast)));
  gl_PointSize = max(1.0, uSize * uDpr * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y));
  vC = vec4(col * a, a);
}`,ie=`${H}
attribute vec3 aG;
attribute vec4 aS;
attribute vec4 aK;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform vec3 uE;
uniform vec3 uN;
uniform float uRef, uRefC, uFar, uSize, uSizeC, uAlpha, uAlphaC, uScale, uBurst, uFill, uK0, uK1, uC0, uC1;
float hash(vec3 p, float s) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719)) + s * 17.17) * 43758.5453); }
vec3 spin(vec3 p, vec3 k, float a) {
  return p * cos(a) + cross(k, p) * sin(a) + k * dot(k, p) * (1.0 - cos(a));
}
vec3 bez(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
  float u = 1.0 - t;
  return u * u * u * a + 3.0 * u * u * t * b + 3.0 * u * t * t * c + t * t * t * d;
}
void main() {
  bool fill = uFill > 0.5;
  // Seeds: the streamed points carry theirs; the fill's come from its target.
  vec4 r = fill ? vec4(hash(aK.xyz, 1.0), hash(aK.xyz, 2.0), hash(aK.xyz, 3.0), hash(aK.xyz, 4.0)) : aS;
  vec3 up = uCityP;
  vec3 tW = up + uScale * (uE * aK.x + uN * aK.z + up * aK.y);
  // Where it starts: on the globe.
  vec3 g = fill ? normalize(vec3(r.x, hash(aK.xyz, 5.0), r.z) * 2.0 - 1.0 + 0.0001) * 1.004 : aG * (1.0 + 0.006 * sin(uT * 0.6));
  vec3 gn = normalize(g);
  // When: the skeleton first, then the fill from the ground up.
  float tall = clamp(aK.y / 0.22, 0.0, 1.0);
  float d = fill ? 0.12 + 0.3 * r.w + 0.14 * tall : 0.22 * r.w;
  float t = clamp((uBurst - d) / (fill ? 0.42 : 0.45), 0.0, 1.0);
  float e = t * t * (3.0 - 2.0 * t);
  // Leave the globe fast, arrive slowly: most of the visible flight is over London.
  float f = 1.0 - (1.0 - e) * (1.0 - e) * (1.0 - e);
  // The burst: out from the globe, twisting about London's axis.
  vec3 tw = cross(up, gn);
  vec3 c1 = gn * (1.08 + 0.55 * r.x) + tw * (r.y - 0.5) * 1.2 + up * (r.z - 0.3) * 0.5;
  // The vortex: a galaxy of four arms over the City, 1 to 4 km across, that
  // every particle passes through before it peels off to its building.
  float arm = floor(r.y * 4.0);
  float rho = 1.0 + 3.0 * fract(r.y * 4.0);
  float a = arm * 1.5707963 + 1.25 * rho + 0.4 * (r.z - 0.5);
  vec3 c2 = up + uScale * (uE * (0.5 + cos(a) * rho) + uN * (0.25 + sin(a) * rho) + up * (0.5 + 1.8 * r.x));
  vec3 w = bez(g, c1, c2, tW, f);
  // The vortex: late in its flight each particle swings round London's axis,
  // all the same way, then settles, so the swarm spirals into the city.
  w = spin(w, up, (1.0 - f) * (1.0 - f) * smoothstep(0.0, 0.5, f) * (4.5 + 1.0 * r.w));
  // While in flight, the swarm keeps moving on its own (with time, not
  // scroll), so it stays alive when the scroll rests. Nothing moves once landed.
  float flight = 4.0 * f * (1.0 - f);
  w = spin(w, up, uT * 0.14 * flight * (0.6 + 0.8 * r.x));
  w += (uE * sin(uT * 0.7 + r.x * 6.2831853) + uN * cos(uT * 0.6 + r.y * 6.2831853) + up * sin(uT * 0.5 + r.z * 6.2831853) * 0.5) * uScale * 0.18 * flight;
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.0003) CULL
  gl_Position = clipAt(screen(v, ez));
  // On the globe: its shading. In flight: white-hot. Landed: the city's colours.
  float facing = dot(gn, normalize(uCam - g));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(gn, uLight), 0.0, 1.0);
  float kG = mix(uK0, uK1, lam * 0.9);
  float spark = 4.0 * e * (1.0 - e);
  float kC = mix(uC0, uC1, aK.w) * (1.0 - 0.25 * smoothstep(0.03, 0.09, ez));
  float k = mix(mix(kG, kC, e), 1.0, 0.65 * spark);
  vec3 col = mix(BLUE, WHITE, k);
  float fNear = smoothstep(0.0015, 0.01, ez);
  // Far away is quiet (uFar follows the camera's height), so the swarm near London reads.
  float fFar = 1.0 - smoothstep(uFar * 0.42, uFar, ez);
  float aGl = uAlpha * vis;
  float aCi = uAlphaC * (0.3 + 0.7 * aK.w);
  float shimmer = 0.9 + 0.1 * sin(uT * (0.4 + r.x) + r.y * 40.0);
  float alpha = mix(aGl, aCi, e) * fNear * fFar * shimmer;
  // The fill materialises as it enters the vortex over London (the blast
  // itself is the globe's own particles), so the spiral reads.
  if (fill) alpha *= smoothstep(0.45, 0.8, f);
  float sG = uSize * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y);
  float sC = uSizeC * clamp(uRefC / ez, 0.6, 2.2) * (0.8 + 0.4 * r.y);
  gl_PointSize = max(1.0, mix(sG, sC, e) * (1.0 + 0.9 * spark) * uDpr);
  vC = vec4(col * alpha, alpha);
}`,ae=`${H}
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aQ;
attribute vec2 aJ;
uniform float uOn, uRef;
void main() {
  float t = fract(aQ.x + uT * aQ.y) - aQ.z * 0.12;
  float on = step(0.0, t);
  t = clamp(t, 0.0, 1.0);
  float w = acos(clamp(dot(aA, aB), -1.0, 1.0));
  float sw = max(sin(w), 0.0001);
  vec3 pos = (sin((1.0 - t) * w) * aA + sin(t * w) * aB) / sw;
  vec3 side = normalize(cross(pos, aB - aA + vec3(0.0001)));
  pos = normalize(pos) * (1.0 + aQ.w * sin(3.1415927 * t)) + side * aJ.x * 0.004 * (1.0 + aQ.z * 2.0);
  vec3 v = pos - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.01) CULL
  gl_Position = clipAt(screen(v, ez));
  vec3 dc = normalize(uCam - pos);
  float bq = dot(pos, dc);
  float cq = dot(pos, pos) - 1.0;
  float hid = (bq < 0.0 && bq * bq - cq > 0.0) ? 0.15 : 1.0;
  float ends = smoothstep(0.0, 0.03, t) * (1.0 - smoothstep(0.94, 1.0, t));
  float kk = 1.0 - aQ.z;
  float a = uOn * on * ends * hid * aJ.y * kk * kk * 0.8;
  gl_PointSize = max(1.0, uDpr * clamp(uRef / ez, 0.5, 2.0) * (0.8 + 1.6 * kk * kk));
  vC = vec4(mix(BLUE, WHITE, mix(0.5, 1.0, kk * kk)) * a, a);
}`,oe=`precision mediump float;
varying vec4 vC;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c);
  if (d > 0.25) discard;
  gl_FragColor = vC * (1.0 - d * 3.2);
}`,se=`precision highp float;
attribute vec2 aXY;
attribute vec2 aUV;
attribute vec4 aM;
uniform vec2 uRes;
varying vec2 vUV;
varying vec4 vM;
void main() {
  vUV = aUV;
  vM = aM;
  gl_Position = vec4(aXY.x / uRes.x * 2.0 - 1.0, 1.0 - aXY.y / uRes.y * 2.0, 0.0, 1.0);
}`,ce=`precision mediump float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
varying vec2 vUV;
varying vec4 vM;
float disc(float r, float rad) { return 1.0 - smoothstep(rad - 0.6, rad + 0.6, r); }
void main() {
  float r = length(vUV) * vM.z;
  vec4 o;
  if (vM.x < 0.5) {
    // Hub: a white light that fades out through EX Blue, with a white core.
    float g = clamp(1.0 - r / vM.w, 0.0, 1.0);
    vec4 glow = vec4(mix(BLUE, WHITE, 0.5 + 0.5 * g), 1.0) * (0.85 * g);
    float core = disc(r, 2.2);
    o = vec4(WHITE, 1.0) * core + glow * (1.0 - core);
  } else {
    // You are here: a white ring with a dot in the centre.
    float ring = 1.0 - smoothstep(0.65, 1.45, abs(r - 7.0));
    float core = disc(r, 2.4);
    float a = max(ring, core);
    o = vec4(WHITE, 1.0) * a;
  }
  gl_FragColor = o * vM.y;
}`,le=`/_astro/london.DBfygRB9.bin`,U=n({createGlobe:()=>W}),ue={high:8e4,mid:4e4,low:12e3},de={high:32e4,mid:14e4,low:7e4},fe=.45;function pe(){let e=navigator,t=e.hardwareConcurrency||4,n=e.deviceMemory;return t<=2||n!==void 0&&n<=2||t<=4&&n!==void 0&&n<=4?`low`:t>=8&&(n===void 0||n>=8)?`high`:`mid`}function me(e){try{let t=String(e.getParameter(e.RENDERER)??``);if(/^webkit webgl$/i.test(t)){let n=e.getExtension(`WEBGL_debug_renderer_info`);n&&(t=String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)??``))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}catch{return!1}}var he=.03,ge=.08,_e=22,ve=.14,ye=262144,be=50,xe=37297,Se=[.23,.925,.5],Ce=[0,.26,.2],we=[.855,1,.45],Te=[.2,1,.62],Ee=.7,De=2e5,Oe=[`pos`,`seed`,`gpos`,`gseed`,`city`,`fill`,`fl`];function W(t,n){let r=!!n.still,a=n.hubs.map(e=>({id:e.id,v:_(e.lat,e.lng)})),u=n.hubs.map(e=>({lat:e.lat,lng:e.lng})),d=n.routes??w,f=n.showVisitor===!1?null:_(...T()),p=n.worker!==!1&&typeof Worker<`u`,h=`mid`,g=0,v=1.5,y=0,b=0,x=0,S=0,C=!r,D=0,A=0,j=1,M=1/60,N=0,P=0,F=0,I=0,ee=0,L=!0,R=!0,z=!1,B=!1,V=!1,H=!1,U=null,W=null,ke=0,Ae=0,G=null,K={setProgress(e){if(r||!Number.isFinite(e))return;let t=Math.max(0,Math.min(1,e));t!==b&&(b=t,L=!0,$())},play(){r||C||(C=!0,I=0,$())},pause(){C=!1},hubAt(e,t){let n=_e,r=null;for(let i of K.hubScreenPositions()){if(!i.visible)continue;let a=Math.hypot(i.x-e,i.y-t);a<n&&(n=a,r=i.id)}return r},hubScreenPositions(){let e=t.clientWidth,n=t.clientHeight,r=Ye(e||1,n||1);return a.map(t=>{let i=Xe(r,t.v);if(!i)return{id:t.id,x:NaN,y:NaN,visible:!1};let a=i[2]>.05&&r.cam.on>.5&&i[0]>=0&&i[0]<=e&&i[1]>=0&&i[1]<=n;return{id:t.id,x:i[0],y:i[1],visible:a}})},destroy(){if(B)return;B=!0,je();let e=J;if(e&&!e.isContextLost()){for(let t of[U?.b,W?.b,X])if(t)for(let n of Object.values(t))e.deleteBuffer(n);for(let t of Y)e.deleteProgram(t.p),t.s.forEach(t=>e.deleteShader(t))}U=W=null}};function je(){cancelAnimationFrame(F),F=0,Ne?.disconnect(),Pe?.disconnect(),G?.terminate(),G=null,document.removeEventListener(`visibilitychange`,Ie),t.removeEventListener(`webglcontextlost`,Fe)}let q=e=>{z||B||(z=!0,je(),queueMicrotask(()=>n.onFail?.(e)))},Me={alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1},J=null;try{J=t.getContext(`webgl2`,Me)??t.getContext(`webgl`,Me)}catch{J=null}let Y=[],X=null,Ne=null,Pe=null,Fe=()=>q(`context-lost`),Ie=()=>{I=0,$()};if(!J||J.isContextLost())return q(`webgl-unavailable`),K;let Z=J,Le=me(Z);h=Le?`low`:pe(),g=Math.max(2e3,Math.round(n.particles??ue[h])),v=n.maxPixelRatio??(h===`low`?1:1.5),y=Le?be:0;let Re=!!Z.getExtension(`KHR_parallel_shader_compile`),ze=(e,t,n)=>{let r=Z.createProgram();if(!r)throw Error(`createProgram`);let i=[Z.VERTEX_SHADER,Z.FRAGMENT_SHADER].map((n,i)=>{let a=Z.createShader(n);if(!a)throw Error(`createShader`);return Z.shaderSource(a,i?t:e),Z.compileShader(a),Z.attachShader(r,a),a});n.forEach((e,t)=>Z.bindAttribLocation(r,t,e)),Z.linkProgram(r);let a={p:r,s:i,u:{},done:!1};return Y.push(a),a},Q=[[re,oe,[`aP`,`aS`]],[ie,oe,[`aG`,`aS`,`aK`]],[ae,oe,[`aA`,`aB`,`aQ`,`aJ`]],[se,ce,[`aXY`,`aUV`,`aM`]]];try{Re?Q.forEach(e=>ze(...e)):ze(...Q[0]),X={mark:Ve()}}catch(e){return q(`webgl-setup: `+(e instanceof Error?e.message:String(e))),K}let Be={get globe(){return Y[0]},get city(){return Y[1]},get routes(){return Y[2]},get mark(){return Y[3]}};function Ve(){let e=Z.createBuffer();if(!e)throw Error(`createBuffer`);return e}function He(){if(H)return!0;for(let e of Y){if(e.done)continue;if(Re&&!Z.getProgramParameter(e.p,xe))return!1;if(!Z.getProgramParameter(e.p,Z.LINK_STATUS)){let t=e.s.map(e=>Z.getShaderInfoLog(e)||``).join(` `)+(Z.getProgramInfoLog(e.p)||``);throw Error(t.trim()||`link`)}let t=Z.getProgramParameter(e.p,Z.ACTIVE_UNIFORMS);for(let n=0;n<t;n++){let t=Z.getActiveUniform(e.p,n);t&&(e.u[t.name.replace(/\[0\]$/,``)]=Z.getUniformLocation(e.p,t.name))}if(e.done=!0,!Re)return Y.length<Q.length&&ze(...Q[Y.length]),!1}return H=Y.length===Q.length&&Y.every(e=>e.done),H}t.addEventListener(`webglcontextlost`,Fe);function Ue(t){ke=t;let n=++Ae,r=Math.min(4e5,Math.round(de[h]*(t/ue[h]))),i={id:n,N:t,hubs:u,routes:d,city:{url:new URL(le,location.href).href,fill:r}};if(p)try{G||(G=new Worker(new URL(`/_astro/worker-CX0-jcYX.js`,``+import.meta.url),{type:`module`,name:`globe-build`}),G.onmessage=e=>We(e.data),G.onerror=e=>{e.preventDefault(),G?.terminate(),G=null,p=!1,Ue(ke)}),G.postMessage(i);return}catch{p=!1}e(()=>import(`./build.dcsvRb8b.js`).then(e=>e.buildSliced(t,u,d)),[]).then(e=>We({id:n,points:e}),e=>We({id:n,error:e instanceof Error?e.message:String(e)}))}function We(e){if(B||z||e.id!==Ae)return;if(`error`in e){q(`build: `+e.error);return}if(W)for(let e of Object.values(W.b))Z.deleteBuffer(e);let t=e.points,n={},r=[];try{for(let e of Oe){n[e]=Ve();let i=t[e];Z.bindBuffer(Z.ARRAY_BUFFER,n[e]),Z.bufferData(Z.ARRAY_BUFFER,i.byteLength,Z.STATIC_DRAW),r.push({b:n[e],data:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),off:0})}}catch(e){q(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}W={G:t,b:n,queue:r},$()}function Ge(){if(!W)return;let e=ye;for(;W.queue.length&&e>0;){let t=W.queue[0],n=Math.min(e,t.data.byteLength-t.off);Z.bindBuffer(Z.ARRAY_BUFFER,t.b),Z.bufferSubData(Z.ARRAY_BUFFER,t.off,t.data.subarray(t.off,t.off+n)),t.off+=n,e-=n,t.off>=t.data.byteLength&&W.queue.shift()}if(!W.queue.length){if(U)for(let e of Object.values(U.b))Z.deleteBuffer(e);U={G:W.G,b:W.b},W=null,L=!0}}let Ke=e=>Math.round(g*(e<700?fe:1)),qe=()=>!H||!!W;function $(){F||B||z||!R||document.hidden||(qe()||L||C)&&(F=requestAnimationFrame(Je))}function Je(e){if(F=0,B||z)return;if(!R||document.hidden){I=0;return}let r=t.clientWidth,i=t.clientHeight;r&&i&&Ke(r)!==ke&&Ue(Ke(r));try{if(!H&&!He()){$();return}W&&Ge()}catch(e){q(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}if(!U||!r||!i){qe()&&$();return}if(!L&&V&&y&&e-ee<y){$();return}let a=I?Math.min(.05,Math.max(0,(e-I)/1e3)):0;I=e;let o=S?Math.min(.25,Math.max(0,(e-S)/1e3)):1/60;S=e;let s=!1;x!==b&&(x+=(b-x)*(1-Math.exp(-o/ve)),Math.abs(b-x)<4e-4?x=b:s=!0,L=!0),C&&V&&a>0&&(D+=a,A+=a*he*(1-m(x/ge)),M+=(a-M)*.05,N+=a,n.adaptive!==!1&&N-P>3&&N>4&&M>.034&&j>.36&&(j=j>.7?.6:.35,P=N,M=.02)),L=!1;try{Qe(r,i,U.G,U.b)}catch(e){q(`render: `+(e instanceof Error?e.message:String(e)));return}ee=e,V||(V=!0,n.onReady?.()),s&&(L=!0),C||s||qe()?$():I=S=0}typeof IntersectionObserver<`u`&&(Ne=new IntersectionObserver(e=>{R=e[e.length-1].isIntersecting,R?$():I=0}),Ne.observe(t)),typeof ResizeObserver<`u`&&(Pe=new ResizeObserver(()=>{L=!0,$()}),Pe.observe(t)),document.addEventListener(`visibilitychange`,Ie),t.clientWidth&&Ue(Ke(t.clientWidth)),$();function Ye(e,t){let n=ne(r?0:x,te(A)),i=s(n.fw,n.up),a=e>900,o=a?e*.385:e*.5,c=t*.5,l=Math.min(a?e*.235:e*.35,t*.32,320),u=l*Math.sqrt(k*k-1);return{cam:n,rt:i,f:u+(Math.max(e,t*1.25)*.6-u)*n.kc,cx:o+(e*.5-o)*n.kc,cy:c+(t*.5-c)*n.kc,Rpx:l,W:e,H:t}}function Xe(e,t){let{cam:n}=e,r=i(t,n.pos),a=o(r,n.fw);return a<1e-4?null:[e.cx+o(r,e.rt)*e.f/a,e.cy-o(r,n.up)*e.f/a,o(t,l(i(n.pos,t)))]}let Ze=new Float32Array((a.length+1)*6*8);function Qe(e,n,r,i){let o=Math.min(window.devicePixelRatio||1,v),s=Math.max(1,Math.round(e*o)),u=Math.max(1,Math.round(n*o));t.width!==s&&(t.width=s),t.height!==u&&(t.height=u);let d=Ye(e,n),{cam:p,rt:m}=d,h=s/e,g=Math.max(.6,Math.min(1.6,Math.sqrt(8e4/62500/(r.N/(d.Rpx*d.Rpx))))),_=l([-.45*m[0]+.55*p.up[0]-.7*p.fw[0],-.45*m[1]+.55*p.up[1]-.7*p.fw[1],-.45*m[2]+.55*p.up[2]-.7*p.fw[2]]);Z.viewport(0,0,s,u),Z.clearColor(0,0,0,0),Z.clear(Z.COLOR_BUFFER_BIT),Z.disable(Z.DEPTH_TEST),Z.enable(Z.BLEND),Z.blendFunc(Z.ONE,Z.ONE);let y=t=>{let r=t.u;Z.uniform3f(r.uCam,p.pos[0],p.pos[1],p.pos[2]),Z.uniform3f(r.uRt,m[0],m[1],m[2]),Z.uniform3f(r.uUp,p.up[0],p.up[1],p.up[2]),Z.uniform3f(r.uFw,p.fw[0],p.fw[1],p.fw[2]),Z.uniform2f(r.uC,d.cx,d.cy),Z.uniform2f(r.uRes,e,n),Z.uniform1f(r.uFocal,d.f),Z.uniform1f(r.uT,D),Z.uniform1f(r.uDpr,h)},b=(e,t,n,r,i,a=0,o=0)=>{Z.bindBuffer(Z.ARRAY_BUFFER,t),Z.enableVertexAttribArray(e),Z.vertexAttribPointer(e,n,r,i,a,o)},x=(...e)=>e.forEach(e=>Z.disableVertexAttribArray(e)),S=Be.globe,C=S.u;Z.useProgram(S.p),y(S),Z.uniform3f(C.uLight,_[0],_[1],_[2]),Z.uniform3f(C.uCityP,O.U[0],O.U[1],O.U[2]),Z.uniform1f(C.uRef,3.5),Z.uniform1f(C.uCityFade,p.fade),Z.uniform1f(C.uBlast,p.blast),b(0,i.pos,3,Z.FLOAT,!1),b(1,i.seed,4,Z.UNSIGNED_BYTE,!0),x(2,3);let w=(e,t,n,r,i)=>{Z.uniform1f(C.uK0,n[0]),Z.uniform1f(C.uK1,n[1]),Z.uniform1f(C.uAlpha,n[2]*i),Z.uniform1f(C.uSize,r),t>0&&Z.drawArrays(Z.POINTS,e,t)};w(r.NL+r.Nc,Math.round(r.No*j),Ce,1.3,g),w(0,Math.round(r.NL*j),Se,1.7,g),w(r.NL,r.Nc,we,2,1);let T=Be.city,k=T.u,A=c(p.pos)-1;if(Z.useProgram(T.p),y(T),Z.uniform3f(k.uLight,_[0],_[1],_[2]),Z.uniform3f(k.uCityP,O.U[0],O.U[1],O.U[2]),Z.uniform3f(k.uE,O.E[0],O.E[1],O.E[2]),Z.uniform3f(k.uN,O.N[0],O.N[1],O.N[2]),Z.uniform1f(k.uRef,3.5),Z.uniform1f(k.uRefC,.015),Z.uniform1f(k.uFar,Math.max(.095,A*2.2)),Z.uniform1f(k.uSize,1.7),Z.uniform1f(k.uSizeC,1.6),Z.uniform1f(k.uAlpha,Se[2]*g),Z.uniform1f(k.uAlphaC,Te[2]),Z.uniform1f(k.uScale,E),Z.uniform1f(k.uBurst,p.burst),Z.uniform1f(k.uFill,0),Z.uniform1f(k.uK0,Se[0]),Z.uniform1f(k.uK1,Se[1]),Z.uniform1f(k.uC0,Te[0]),Z.uniform1f(k.uC1,Te[1]),b(0,i.gpos,3,Z.FLOAT,!1),b(1,i.gseed,4,Z.UNSIGNED_BYTE,!0),b(2,i.city,4,Z.FLOAT,!1),Z.drawArrays(Z.POINTS,0,Math.round(r.K*j)),r.F>0&&p.burst>.15){x(0,1),Z.vertexAttrib3f(0,O.U[0],O.U[1],O.U[2]),Z.vertexAttrib4f(1,.5,.5,.5,0),Z.uniform1f(k.uFill,1);let e=Math.max(1,Math.round(r.F*j)),t=Math.min(2.4,Math.max(1,Math.sqrt(De/e)));Z.uniform1f(k.uAlphaC,Math.min(1,Te[2]*Ee*t)),Z.uniform1f(k.uSizeC,1.6*Math.sqrt(t)),b(2,i.fill,4,Z.FLOAT,!1),Z.drawArrays(Z.POINTS,0,Math.round(r.F*j))}if(x(2),p.on>.01){let t=Be.routes;Z.useProgram(t.p),y(t),Z.uniform1f(t.u.uOn,p.on),Z.uniform1f(t.u.uRef,3.5),b(0,i.fl,3,Z.FLOAT,!1,48,0),b(1,i.fl,3,Z.FLOAT,!1,48,12),b(2,i.fl,4,Z.FLOAT,!1,48,24),b(3,i.fl,2,Z.FLOAT,!1,48,40),Z.drawArrays(Z.POINTS,0,r.nf),x(2,3);let o=0,s=(e,t,n,r,i,a)=>{for(let[s,c]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])Ze.set([e+s*i,t+c*i,s,c,n,r,i,a],o*8),o++};for(let e of a){let t=Xe(d,e.v);t&&t[2]>.05&&s(t[0],t[1],0,Math.min(1,t[2]*p.on),10,10)}if(f){let e=Xe(d,f);e&&e[2]>.05&&s(e[0],e[1],1,Math.min(1,e[2]*p.on),10,0)}if(o&&X){let t=Be.mark;Z.useProgram(t.p),Z.uniform2f(t.u.uRes,e,n),Z.blendFunc(Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.bindBuffer(Z.ARRAY_BUFFER,X.mark),Z.bufferData(Z.ARRAY_BUFFER,Ze.subarray(0,o*8),Z.DYNAMIC_DRAW),Z.enableVertexAttribArray(0),Z.vertexAttribPointer(0,2,Z.FLOAT,!1,32,0),Z.enableVertexAttribArray(1),Z.vertexAttribPointer(1,2,Z.FLOAT,!1,32,8),Z.enableVertexAttribArray(2),Z.vertexAttribPointer(2,4,Z.FLOAT,!1,32,16),Z.drawArrays(Z.TRIANGLES,0,o),x(2)}}}return K}export{_ as a,o as i,U as n,y as r,W as t};