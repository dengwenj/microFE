import microHostMap from "./microHostMap"

const map = {
  // 服务器地址
  [microHostMap.reactApp]: "http://wfe.dengwj.vip:1209",
  [microHostMap.vueApp]: "http://wfe.dengwj.vip:2024",
}

export default function hostMap(host: string): string {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
