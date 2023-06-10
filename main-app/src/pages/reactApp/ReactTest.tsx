import React from 'react'
import WujieReact from 'wujie-react'
import { useLocation } from 'react-router-dom'

import hostMap from '../../conf/hostMap'
import microHostMap from '../../conf/microHostMap'

export default function ReactTest() {
  const location = useLocation()

  const url = hostMap(microHostMap.reactApp) + `/#${location.pathname}`

  return (
    <div>
      <WujieReact
        width="100%"
        height="100%"
        name="reactApp"
        url={url}
      />
      111
    </div>
  )
}
