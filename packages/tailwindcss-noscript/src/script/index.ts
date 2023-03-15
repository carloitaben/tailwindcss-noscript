function encode(string: string) {
  return typeof document === "undefined" ? Buffer.from(string).toString("base64") : window.btoa(string)
}

export = `data:text/javascript;base64,${encode(`(function(){document.documentElement.classList.add("js");}())`)}`
