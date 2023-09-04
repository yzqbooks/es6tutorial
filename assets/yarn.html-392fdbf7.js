import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,a as e,b as a,d as s,e as i}from"./app-bede4f5a.js";const l={},t=i(`<h1 id="yarn-的用法" tabindex="-1"><a class="header-anchor" href="#yarn-的用法" aria-hidden="true">#</a> Yarn 的用法</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Yarn 是 Facebook 联合其他大公司推出的模块管理器。相比 npm，它有两个显著特点。</p><p>（1）安装速度较快。</p><p>Yarn 采用平行安装模式，而 npm 采用的是线性模式，只有前一个模块安装完，才会安装下一个。</p><p>（2）默认开启“版本锁定”功能</p><p>Yarn 希望安装依赖时，所有依赖的版本在不同机器都保持相同。为了达到这个目的，第一次安装依赖时，它默认生成一个锁定文件<code>yarn.lock</code>，将这个文件放到代码库之中，下次安装时就能保证，总是安装相同版本的依赖。这与<code>npm shrinkwrap</code>命令生成的<code>npm-shrinkwrap.json</code>的作用相似，只不过 Yarn 默认就可以生成这个文件。</p><h2 id="全局参数-global" tabindex="-1"><a class="header-anchor" href="#全局参数-global" aria-hidden="true">#</a> 全局参数 global</h2><p>如果要全局执行一个命令，必须加上<code>global</code>参数。目前，<code>add</code>、<code>bin</code>、<code>ls</code>和<code>remove</code>四个命令，支持<code>global</code>参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> global <span class="token function">add</span> create-react-app <span class="token parameter variable">--prefix</span> /usr/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yarn-install" tabindex="-1"><a class="header-anchor" href="#yarn-install" aria-hidden="true">#</a> yarn install</h2><p><code>yarn install</code>命令用于安装一个模块。如果<code>yarn.lock</code>文件存在，会优先读取该文件，按照该文件指定的版本安装。</p><p>使用<code>--production</code>参数或环境变量<code>NODE_ENV</code>等于<code>production</code>，将不会安装<code>devDependencies</code>字段指定的模块。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">install</span> <span class="token parameter variable">--production</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果使用<code>--no-lockfile</code>参数，<code>yarn install</code>将不会读取或生成<code>yarn.lock</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">install</span> --no-lockfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yarn-add" tabindex="-1"><a class="header-anchor" href="#yarn-add" aria-hidden="true">#</a> yarn add</h2><p><code>yarn add</code>命令允许新增安装一个模块。它默认会将该模块加入<code>package.json</code>文件的<code>dependencies</code>字段。如果想加入<code>devDependencies</code>字段，要使用<code>--dev</code>参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> package-name
$ <span class="token function">yarn</span> <span class="token function">add</span> package-name@1.2.3
$ <span class="token function">yarn</span> <span class="token function">add</span> package-name@tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-licenses" tabindex="-1"><a class="header-anchor" href="#yarn-licenses" aria-hidden="true">#</a> yarn licenses</h2><p><code>yarn licenses</code>命令有两个子命令。</p><p><code>yarn licenses ls</code>命令列出所有模块的许可证。</p><p><code>yarn licenses generate-disclaimer</code>命令将所有模块的许可证的条款，全部显示出来。</p><h2 id="yarn-why" tabindex="-1"><a class="header-anchor" href="#yarn-why" aria-hidden="true">#</a> yarn why</h2><p><code>yarn why</code>命令列出之所以安装某个模块的原因，即为什么安装了它。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> why jest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你也可以用它分析某个目录或者某个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> why node_modules/once
$ <span class="token function">yarn</span> why node_modules/once/once.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-upgrade" tabindex="-1"><a class="header-anchor" href="#yarn-upgrade" aria-hidden="true">#</a> yarn upgrade</h2><p><code>yarn upgrade</code>命令会按照<code>package.json</code>里面指定的版本范围，更新依赖版本，重新生成<code>yarn.lock</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果单独升级某个模块，<code>yarn upgrade</code>会将它升级到<code>latest</code>标签指定的版本，然后改写<code>package.json</code>。这意味着该命令可能会将一个<code>1.x</code>版本的模块，升级到<code>2.x</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> upgrade d3-scale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新时指定版本范围或标签，也是允许的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> upgrade d3-scale@1.0.2
$ <span class="token function">yarn</span> upgrade react@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-generate-lock-entry" tabindex="-1"><a class="header-anchor" href="#yarn-generate-lock-entry" aria-hidden="true">#</a> yarn generate-lock-entry</h2><p><code>yarn generate-lock-entry</code>命令依照<code>package.json</code>文件，生成<code>yarn.lock</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> generate-lock-entry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yarn-lock-文件" tabindex="-1"><a class="header-anchor" href="#yarn-lock-文件" aria-hidden="true">#</a> yarn.lock 文件</h2><p><code>yarn.lock</code>是一个锁文件，用来记录当前项目的依赖模块的精确版本。只要项目的根目录有这个文件，下次安装依赖的时候，总是会安装一模一样的<code>node_modules</code>目录，这个特点称为决定性（determinism）。</p><p>如果当前项目没有这个文件，那么第一次运行<code>yarn install</code>或者<code>yarn add [模块名]</code>命令的时候，就会生成这个文件。以后，再运行<code>yarn add</code>命令，会更新这个文件。</p><p>举例来说，<code>yarn add supports-color</code>命令会产生下面的<code>yarn.lock</code>文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>has<span class="token operator">-</span>flag@<span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.0</span><span class="token operator">:</span>
  version <span class="token string">&quot;1.0.0&quot;</span>
  resolved <span class="token string">&quot;https://registry.yarnpkg.com/has-flag/-/has-flag-1.0.0.tgz#9d9e793165ce017a00f00418c43f942a7b1d11fa&quot;</span>

supports<span class="token operator">-</span>color@<span class="token operator">^</span><span class="token number">3.2</span><span class="token number">.3</span><span class="token operator">:</span>
  version <span class="token string">&quot;3.2.3&quot;</span>
  resolved <span class="token string">&quot;https://registry.yarnpkg.com/supports-color/-/supports-color-3.2.3.tgz#65ac0504b3954171d8a64946b2ae3cbb8a5f54f6&quot;</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span>
    has<span class="token operator">-</span>flag <span class="token string">&quot;^1.0.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，模块之间使用空行分隔。每个模块会指明当前安装的精确版本（<code>version</code>字段）和下载地址（<code>resovled</code>字段），以及依赖的模块（<code>dependencies</code>字段）。</p><p>注意，从<code>yarn.lock</code>文件看不出来，哪个模块会安装在<code>node_modules</code>目录的顶层，必须结合<code>package.json</code>才能看出来，具体的算法由 Yarn 决定。这也意味着，不同版本的 Yarn 处理同样的<code>yarn.lock</code>文件，可能会得到不一样的<code>node_modules</code>目录，但是每个模块的版本肯定都是相同的。只有相同版本的 Yarn，才能保证一定会得到相同的<code>node_modules</code>目录。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,46),p={href:"https://yarnpkg.com/blog/2017/05/31/determinism/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://yarnpkg.com/blog/2016/11/24/offline-mirror/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://yarnpkg.com/zh-Hans/docs/cli/",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const n=o("ExternalLinkIcon");return c(),r("div",null,[t,e("ul",null,[e("li",null,[e("a",p,[a("Yarn determinism"),s(n)]),a(", by Sebastian McKenzie")]),e("li",null,[e("a",u,[a("Running Yarn offline"),s(n)]),a(", by Konstantin Raev")]),e("li",null,[e("a",h,[a("Yarn CLI"),s(n)])])])])}const k=d(l,[["render",v],["__file","yarn.html.vue"]]);export{k as default};
