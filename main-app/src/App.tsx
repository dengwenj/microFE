import React from 'react';
import WujieReact from 'wujie-react';

import hostMap from './conf/hostMap';
import microHostMap from './conf/microHostMap';

export default function App() {
  return (
    <div>
      App组合

      {/* react 微应用 */}
      <WujieReact
        width={"100%"}
        height={"100%"}
        name="reactApp"
        url={hostMap(microHostMap.reactApp)}
      />

      {/* vue 微应用 */}
      <WujieReact
        width={"100%"}
        height={"100%"}
        name="vueApp"
        url={hostMap(microHostMap.vueApp)}
      />
    </div>
  )
}
