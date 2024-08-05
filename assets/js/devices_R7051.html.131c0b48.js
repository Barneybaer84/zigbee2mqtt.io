"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38409],{9175:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>p,data:()=>m});var a=t(57305);const i=(0,a.Lk)("h1",{id:"woox-r7051",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#woox-r7051"},[(0,a.Lk)("span",null,"Woox R7051")])],-1),n=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"R7051")],-1),d=(0,a.Lk)("td",null,"Vendor",-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart siren")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, voltage, warning, alarm, ac_connected, volume, duration, linkquality")],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/R7051.png",alt:"Woox R7051"})])],-1),s=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold the reset button pressed for 5 seconds (until the blue LED blinks). After this the device will reset and try to join a network.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="ac-connected-binary" tabindex="-1"><a class="header-anchor" href="#ac-connected-binary"><span>Ac connected (binary)</span></a></h3><p>Is the device plugged in. Value can be found in the published state on the <code>ac_connected</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> ac connected is ON, if <code>false</code> OFF.</p><h3 id="volume-numeric" tabindex="-1"><a class="header-anchor" href="#volume-numeric"><span>Volume (numeric)</span></a></h3><p>Volume of siren. Value can be found in the published state on the <code>volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric"><span>Duration (numeric)</span></a></h3><p>Duration of siren. Value can be found in the published state on the <code>duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),h={},p=(0,t(36920).A)(h,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[n,(0,a.Lk)("tbody",null,[l,(0,a.Lk)("tr",null,[d,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Woox"},{default:(0,a.k6)((()=>[(0,a.eW)("Woox")])),_:1})])]),c,r,u])]),s])}]]),m=JSON.parse('{"path":"/devices/R7051.html","title":"Woox R7051 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Woox R7051 control via MQTT","description":"Integrate your Woox R7051 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-06-08T15:36:48.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Ac connected (binary)","slug":"ac-connected-binary","link":"#ac-connected-binary","children":[]},{"level":3,"title":"Volume (numeric)","slug":"volume-numeric","link":"#volume-numeric","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722889759000},"filePathRelative":"devices/R7051.md"}')}}]);