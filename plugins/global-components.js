import Vue from 'vue';

import vTabbingMenu from "~/components/general/vTabbingMenu/vTabbingMenu";
import vTabbingArea from "~/components/general/vTabbingMenu/vTabbingArea";
import vSelectionMenu from "~/components/general/vSelectionMenu/vSelectionMenu";
import VSMItem from "~/components/general/vSelectionMenu/vSMItem";
import vButton from "~/components/general/vButton/vButton";
import vProfileAvatar from "~/components/general/vProfileAvatar";
import vInput from "~/components/general/vInput/vInput";
import vValidCheck from "~/components/general/vValidCheck/vValidCheck"

Vue.component('v-profile-avatar', vProfileAvatar);
Vue.component('v-tabbing-menu', vTabbingMenu);
Vue.component('v-tabbing-area', vTabbingArea);
Vue.component('v-selection-menu', vSelectionMenu);
Vue.component('v-selection-menu-item', VSMItem);
Vue.component('v-button', vButton);
Vue.component('v-input', vInput);
Vue.component('v-valid-check', vValidCheck);
