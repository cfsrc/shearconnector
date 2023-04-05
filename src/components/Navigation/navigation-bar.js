import * as React from 'react'
import { Switch } from '@headlessui/react'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import GithubLinkButton from "./github-link-button"

function NavigationBar({ useMetric }) {


  return (
    <div className="flex space-x-4 items-center">
      <AnchorLink
        to="/#playground"
        title="Data Playground"
        className="px-2 py-1 text-white hover:bg-red-700 "
      />
      <AnchorLink
        to="/#references"
        title="References"
        className="px-2 py-1 text-white hover:bg-red-700 "
      />
      <AnchorLink
        to="/#project"
        title="Project"
        className="px-2 py-1 text-white hover:bg-red-700 "
      />
       <Switch.Group>
        <Switch.Label className="pl-3 py-1 text-white">
          Metric
        </Switch.Label>
        <Switch
          checked={useMetric.enabled}
          onChange={useMetric.onChange}
          className={`${
            useMetric.enabled ? 'bg-red-800 ' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span
            className={`${
              useMetric.enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </Switch.Group>
      <GithubLinkButton url="https://github.com/HyeyoungKoh/StudSteelDeck" />
    </div>
  );
}

export default NavigationBar;