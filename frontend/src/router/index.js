import Vue from 'vue';
import Router from "vue-router";
import Home from '../pages/Home.vue';
import Register from '../pages/Register';
import RegisterDetails from '../pages/RegisterDetails';
import Faq from '../pages/Faq';
import Guide from '../pages/Guide';
import GettingStarted from "../pages/GettingStarted";
import Headquarters from "../pages/GamePages/Headquarters";
import Council from "../pages/GamePages/Council";
import Empire from "../pages/GamePages/Empire";
import Fleets from "../pages/GamePages/Fleets";
import Market from "../pages/GamePages/Market";
import Operations from "../pages/GamePages/Operations";
import Planets from "../pages/GamePages/Planets";
import Research from "../pages/GamePages/Research";
import Units from "../pages/GamePages/Units";
import GalaxyMap from "../pages/GamePages/GalaxyMap";
import FullMap from "../pages/GamePages/map/FullMap";
import MapGen from "../pages/GamePages/map/MapGen";
import Scouting from "../pages/GamePages/map/Scouting";
import Forum from "../pages/GamePages/empire/Forum";
import SendAid from "../pages/GamePages/empire/SendAid";
import ReceiveAid from "../pages/GamePages/empire/ReceiveAid";
import News from "../pages/GamePages/empire/News";
import Relations from "../pages/GamePages/empire/Relations";
import Messages from "../pages/GamePages/Messages";
import FactionRankings from "../pages/GamePages/FactionRankings";
import EmpireRankings from "../pages/GamePages/EmpireRankings";
import Forums from "../pages/GamePages/Forums";
import Account from "../pages/GamePages/Account";

Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/register_details',
      name: 'RegisterDetails',
      component: RegisterDetails
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/getting_started',
      name: 'Getting Started',
      component: GettingStarted
    },
    {
      path: '/headquarters',
      name: 'Headquarters',
      component: Headquarters
    },
    {
      path: '/council',
      name: 'Council',
      component: Council
    },
    {
      path: '/units',
      name: 'Units',
      component: Units
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    },
    {
      path: '/empire',
      name: 'Empire',
      component: Empire
    },
    {
      path: '/empire_forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/send_aid',
      name: 'Send Aid',
      component: SendAid
    },
    {
      path: '/receive_aid',
      name: 'Receive Aid',
      component: ReceiveAid
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/relations',
      name: 'Relations',
      component: Relations
    },
    {
      path: '/fleets',
      name: 'Fleets',
      component: Fleets
    },
    {
      path: '/galaxy_map',
      name: 'Galaxy map',
      component: GalaxyMap
    },
    {
      path: '/full_map',
      name: 'Full map',
      component: FullMap
    },
    {
      path: '/map_generation',
      name: 'Map Gen',
      component: MapGen
    },
    {
      path: '/scouting',
      name: 'Scouting',
      component: Scouting
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/operations',
      name: 'Operations',
      component: Operations
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/faction_rankings',
      name: 'Faction Rankings',
      component: FactionRankings
    },
    {
      path: '/empire_rankings',
      name: 'Empire Rankings',
      component: EmpireRankings
    },
    {
      path: '/forums',
      name: 'Forums',
      component: Forums
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
