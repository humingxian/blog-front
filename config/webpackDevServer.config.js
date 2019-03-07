'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('./paths');
const fs = require('fs');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    // WebpackDevServer 2.4.3引入了一个防止远程的安全修复程序
    //可能通过DNS重新绑定访问本地内容的网站：
    // https://github.com/webpack/webpack-dev-server/issues/887
    // https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
    //然而，它创建了几个现有的用例，例如云中的开发
    //开发中的环境或子域更加复杂：
    // https://github.com/facebook/create-react-app/issues/2271
    // https://github.com/facebook/create-react-app/issues/2233
    //当我们正在研究更好的解决方案时，现在我们将采取一个
    //妥协由于我们的WDS配置仅提供`public`中的文件
    //文件夹我们不会考虑将其作为漏洞访问它们。但是，如果你
    //使用`proxy`功能，它会更危险，因为它可以暴露
    // Django和Rails等后端中的远程代码执行漏洞。
    //所以我们将正常禁用主机检查，但是如果你有，则启用它
    //指定`proxy`设置。最后，如果你让我们覆盖它
    //真的知道你用特殊的环境变量做了什么。
    disableHostCheck:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // 启用生成文件的gzip压缩。
    compress: true,
    //沉默WebpackDevServer自己的日志，因为它们通常没用。
    //使用此设置仍会显示编译警告和错误。
    clientLogLevel: 'none',
    //默认情况下，WebpackDevServer提供当前目录中的物理文件
    //除了它从内存中提供的所有虚拟构建产品。
    //这很令人困惑，因为这些文件不会自动生效
    //生成构建文件夹，除非我们复制它们。但是，复制整个
    //项目目录很危险，因为我们可能会暴露敏感文件。
    //相反，我们建立一个只在`public`目录中存档的约定
    //得到服务我们的构建脚本将`public`复制到`build`文件夹中。
    //在`index.html`中，你可以获得带有％PUBLIC_URL％的`public`文件夹的URL：
    // <link rel =“快捷图标”href =“％PUBLIC_URL％/ favicon.ico”>
    //在JavaScript代码中，您可以使用`process.env.PUBLIC_URL`访问它。
    //请注意，我们只建议使用`public`文件夹作为逃生舱
    //对于像`favicon.ico`，`manifest.json`这样的文件，以及它们的库
    //由于某种原因在通过Webpack导入时被破坏。如果你只是想
    //使用图像，将其放在`src`中，然后从JavaScript导入`。
    contentBase: paths.appPublic,
    // 默认情况下，`contentBase`中的文件不会触发页面重新加载。
    watchContentBase: true,
    //启用热重装服务器。 它将提供/ sockjs-node / endpoint
    //用于WebpackDevServer客户端，以便它可以了解文件的时间
    // 更新。 WebpackDevServer客户端作为入口点包含在内
    //在Webpack开发配置中。 请注意，只有更改
    //到CSS当前是热重新加载的。 JS更改将刷新浏览器。
    hot: true,
    //告诉WebpackDevServer使用相同的“根”路径非常重要
    //正如我们在配置中指定的那样。 在开发中，我们始终从/开始服务。
    publicPath: '/',
    //默认情况下，WebpackDevServer很吵，所以我们会发出自定义消息
    //通过上面的`compiler.hooks [...]。tap`调用来监听编译器事件。
    quiet: true,
    //据说，这可以避免某些系统上的CPU过载。
    // https://github.com/facebook/create-react-app/issues/293
    // src / node_modules不会被忽略以支持绝对导入
    // https://github.com/facebook/create-react-app/issues/1065
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    //如果HTTPS环境变量设置为“true”，则启用HTTPS
    https: protocol === 'https',
    host,
    overlay: false,
    historyApiFallback: {
      //带点的路径仍应使用历史回退。
      // See https://github.com/facebook/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        //由于代理原因，这会注册用户提供的中间件
        require(paths.proxySetup)(app);
      }

      //这使我们可以从webpack中获取错误叠加的源内容
      app.use(evalSourceMapMiddleware(server));
      //这允许我们从运行时错误覆盖中打开文件。
      app.use(errorOverlayMiddleware());

      //这个服务工作者文件实际上是一个“无操作”，可以重置任何文件
      //为同一主机注册的上一个服务工作者：端口组合。
      //我们在开发中执行此操作以避免命中生产缓存
      //它使用相同的主机和端口。
      // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
