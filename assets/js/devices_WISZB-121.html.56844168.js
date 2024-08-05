"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1140],{77714:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>b,data:()=>v});var o=a(57305);const i=(0,o.Lk)("h1",{id:"develco-wiszb-121",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#develco-wiszb-121"},[(0,o.Lk)("span",null,"Develco WISZB-121")])],-1),l=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),n=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"WISZB-121")],-1),d=(0,o.Lk)("td",null,"Vendor",-1),r=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Window sensor")],-1),s=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"contact, battery_low, tamper, battery, voltage, linkquality")],-1),c=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WISZB-121.png",alt:"Develco WISZB-121"})])],-1),u=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1),h=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),p={},b=(0,a(36920).A)(p,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[i,(0,o.Lk)("table",null,[l,(0,o.Lk)("tbody",null,[n,(0,o.Lk)("tr",null,[d,(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Develco"},{default:(0,o.k6)((()=>[(0,o.eW)("Develco")])),_:1})])]),r,s,c])]),u,(0,o.Lk)("p",null,[(0,o.eW)("This device supports OTA updates, for more information see "),(0,o.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>[(0,o.eW)("OTA updates")])),_:1}),(0,o.eW)(".")]),h])}]]),v=JSON.parse('{"path":"/devices/WISZB-121.html","title":"Develco WISZB-121 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco WISZB-121 control via MQTT","description":"Integrate your Develco WISZB-121 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-01-31T22:24:43.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722889759000},"filePathRelative":"devices/WISZB-121.md"}')}}]);