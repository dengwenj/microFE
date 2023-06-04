import microHostMap from "./microHostMap"

const map = {
  // 服务器地址
  [microHostMap.reactApp]: "wfe.dengwj.vip",
  [microHostMap.vueApp]: "wfe.dengwj.vip",
}

export default function hostMap(host: string): string {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
