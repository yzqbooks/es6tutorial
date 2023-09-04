import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-bede4f5a.js";const i={},t=s(`<h1 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h1><p><code>git log</code>命令按照提交时间从最晚到最早的顺序，列出所有 commit。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出当前分支的版本历史</span>
$ <span class="token function">git</span> log

<span class="token comment"># 列出某个文件的版本历史，包括文件改名</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看远程分支的变动情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log remote/branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找log，即搜索commit信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span>Andy
$ <span class="token function">git</span> log <span class="token parameter variable">-i</span> <span class="token parameter variable">--grep</span><span class="token operator">=</span><span class="token string">&quot;Something in the message&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>-i</code>参数表示搜索时忽略大小写。</p><p>查看某个范围内的commit</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log origin/master<span class="token punctuation">..</span>new
<span class="token comment"># [old]..[new] - everything you haven&#39;t pushed yet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>美化输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>--graph commit之间将展示连线</li><li>--decorate 显示commit里面的分支</li><li>--pretty=oneline 只显示commit信息的标题</li><li>--abbrev-commit 只显示commit SHA1的前7位</li></ul><h2 id="命令行参数" tabindex="-1"><a class="header-anchor" href="#命令行参数" aria-hidden="true">#</a> 命令行参数</h2><h3 id="oneline" tabindex="-1"><a class="header-anchor" href="#oneline" aria-hidden="true">#</a> --oneline</h3><p><code>git log</code>默认输出每个 commit 的详细信息，为了节省空间，<code>--oneline</code>参数让输出时，每个 commit 只占用一行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span>
ccc3333 <span class="token punctuation">(</span>HEAD, my-feature-branch<span class="token punctuation">)</span> A third commit
bbb2222 A second commit
aaa1111 A first commit
<span class="token number">9999999</span> <span class="token punctuation">(</span>master<span class="token punctuation">)</span> Old stuff on master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function o(c,r){return e(),n("div",null,l)}const m=a(i,[["render",o],["__file","git-log.html.vue"]]);export{m as default};
