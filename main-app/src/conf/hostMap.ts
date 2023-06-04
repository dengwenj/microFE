import microHostMap from "./microHostMap"

const map = {
  // 服务器地址
  [microHostMap.reactApp]: "react 服务器地址",
  [microHostMap.vueApp]: "vue 服务器地址",
}

export default function hostMap(host: string): string {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
