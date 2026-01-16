import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import layoutHtml from './microfrontend-layout.html?raw'

const routes = constructRoutes(layoutHtml)

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
})

applications.forEach(registerApplication)

const layoutEngine = constructLayoutEngine({ routes, applications })
layoutEngine.activate()

start()