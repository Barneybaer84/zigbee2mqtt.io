"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45985],{43398:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>v,data:()=>m});var i=n(57305);const a=(0,i.Lk)("h1",{id:"legrand-067776-inverted",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#legrand-067776-inverted"},[(0,i.Lk)("span",null,"Legrand 067776_inverted")])],-1),l=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),o=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"067776_inverted")],-1),s=(0,i.Lk)("td",null,"Vendor",-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Netatmo wired shutter switch")],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), linkquality")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067776_inverted.png",alt:"Legrand 067776_inverted"})])],-1),u=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1),p=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),h=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>identity_effect</code>: Defines the identification effect to simplify the device identification. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">identity_effect</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">effect</span><span class="token punctuation">:</span> blink 3 <span class="token comment"># allowed: &#39;blink 3&#39;, &#39;fixed&#39;, &#39;blink green&#39;, &#39;blink blue&#39;</span></span>\n<span class="line">  <span class="token key atrule">color</span><span class="token punctuation">:</span> red <span class="token comment"># allowed: &#39;default&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;lightblue&#39;, &#39;yellow&#39;, &#39;pink&#39;, &#39;white&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),k={},v=(0,n(36920).A)(k,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[l,(0,i.Lk)("tbody",null,[o,(0,i.Lk)("tr",null,[s,(0,i.Lk)("td",null,[(0,i.bF)(n,{to:"/supported-devices/#v=Legrand"},{default:(0,i.k6)((()=>[(0,i.eW)("Legrand")])),_:1})])]),d,c,r])]),u,(0,i.Lk)("p",null,[(0,i.eW)("This device supports OTA updates, for more information see "),(0,i.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>[(0,i.eW)("OTA updates")])),_:1}),(0,i.eW)(".")]),p,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),m=JSON.parse('{"path":"/devices/067776_inverted.html","title":"Legrand 067776_inverted control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067776_inverted control via MQTT","description":"Integrate your Legrand 067776_inverted via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:57.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722889759000},"filePathRelative":"devices/067776_inverted.md"}')}}]);