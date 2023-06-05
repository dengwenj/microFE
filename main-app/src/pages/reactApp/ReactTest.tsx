import React from 'react'
import WujieReact from 'wujie-react'
import { useLocation } from 'react-router-dom'

import hostMap from '../../conf/hostMap'
import microHostMap from '../../conf/microHostMap'

export default function ReactTest() {
  const location = useLocation()
  console.log(WujieReact)
  const url = hostMap(microHostMap.reactApp) + location.pathname
  console.log(microHostMap.reactApp, "microHostMap.reactApp");
  console.log(location.pathname, 'location.pathname');
  console.log(url, "友尽啦吗");

  return (
    <div>
      <WujieReact
        width="100%"
        height="100%"
        name="reactApp"
        url={url}
        sync={true}
      />
      111
    </div>
  )
}
