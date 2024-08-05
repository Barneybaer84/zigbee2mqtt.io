"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54168],{79568:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>g});var d=o(57305);const i=(0,d.Lk)("h1",{id:"schneider-electric-eko07259",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#schneider-electric-eko07259"},[(0,d.Lk)("span",null,"Schneider Electric EKO07259")])],-1),a=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1),c=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"EKO07259")],-1),l=(0,d.Lk)("td",null,"Vendor",-1),n=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Smart thermostat")],-1),s=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"keypad_lockout, schneider_pilot_mode, temperature_display_mode, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, pi_heating_demand), linkquality")],-1),u=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EKO07259.png",alt:"Schneider Electric EKO07259"})])],-1),r=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1),p=(0,d.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="keypad-lockout-binary" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-binary"><span>Keypad lockout (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. If value equals <code>lock1</code> keypad lockout is ON, if <code>unlock</code> OFF.</p><h3 id="schneider-pilot-mode-enum" tabindex="-1"><a class="header-anchor" href="#schneider-pilot-mode-enum"><span>Schneider pilot mode (enum)</span></a></h3><p>Controls piloting mode. Value can be found in the published state on the <code>schneider_pilot_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schneider_pilot_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schneider_pilot_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>contactor</code>, <code>pilot</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},m=(0,o(36920).A)(h,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[i,(0,d.Lk)("table",null,[a,(0,d.Lk)("tbody",null,[c,(0,d.Lk)("tr",null,[l,(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,d.k6)((()=>[(0,d.eW)("Schneider Electric")])),_:1})])]),n,s,u])]),r,(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>[(0,d.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),g=JSON.parse('{"path":"/devices/EKO07259.html","title":"Schneider Electric EKO07259 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric EKO07259 control via MQTT","description":"Integrate your Schneider Electric EKO07259 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:26.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Keypad lockout (binary)","slug":"keypad-lockout-binary","link":"#keypad-lockout-binary","children":[]},{"level":3,"title":"Schneider pilot mode (enum)","slug":"schneider-pilot-mode-enum","link":"#schneider-pilot-mode-enum","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722889759000},"filePathRelative":"devices/EKO07259.md"}')}}]);