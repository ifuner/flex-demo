"use strict"

module.exports = {
  toolkit: "fie-toolkit-vue",

  toolkitConfig: {
    host: "192.168.31.29",
    port: 3000,
    open: true,
    openTarget: "index/index.html",
    group: "fe",
    alias: {
      src: "_src",
      "src/common": "_common",
      "src/pages": "_pages"
    },
    proxy: {
      "/v5": {
        target: "https://te2.kaiheikeji.com",
        changeOrigin: true,
        secure: true
      }
    },
    pages: [
      // {
      //   key: "",
      //   file: "src/pages/index/index.html",
      //   description: ""
      // }
    ]
  },

  tasks: {
    publish: [{
      command: "fie git sync"
    }]
  }
}
