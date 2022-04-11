# Website

此项目为 Dinky 的官方文档

### Installation

```
$ yarn / npm i
```

### Local Development

```
$ yarn start /  npx docusaurus start [--port 3111 ] [--host localhost ] 默认端口为 3000
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build / npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy / npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy / npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


目录结构:
``` html
blog --博客分享 
docs --最新文档
download --下载
src --源码
  - components --组件
      - HomepageFeature --首页特性
  - css --css
  - pages  -- all version 页面管理 
     - versions --版本管理   
static --静态文件
  - img --官网图片
versioned_docs --历史版本文档
  - version-0.6.0 --版本0.6.0文档
  - version-0.6.1 --版本0.6.1文档
version_sidebars --历史版本文档侧边栏
  - version-0.6.0-sidebars.json --历史版本文档侧边栏
  - version-0.6.1-sidebars.json --历史版本文档侧边栏
babel.config.js --babel配置文件
docusaurus.config.js --docusaurus配置文件
package.json --项目配置文件
README.md --项目介绍
sidebars.js --侧边栏配置文件
sidebarsDevelopment.js --侧边栏配置文件
versions.json --版本配置文件

```