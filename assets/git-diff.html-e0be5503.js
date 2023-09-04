import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const i={},t=e(`<h1 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff" aria-hidden="true">#</a> git diff</h1><p><code>git diff</code>命令用于查看文件之间的差异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看工作区与暂存区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 查看某个文件的工作区与暂存区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> file.txt

<span class="token comment"># 查看暂存区与当前 commit 的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># 查看两个commit的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commitBefore<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commitAfter<span class="token operator">&gt;</span>

<span class="token comment"># 查看暂存区与仓库区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># 查看工作区与上一次commit之间的差异</span>
<span class="token comment"># 即如果执行 git commit -a，将提交的文件</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># 查看工作区与某个 commit 的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># 显示两次提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 查看工作区与当前分支上一次提交的差异，但是局限于test文件</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./test

<span class="token comment"># 查看当前分支上一次提交与上上一次提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./test

<span class="token comment"># 生成patch</span>
$ <span class="token function">git</span> format-patch master <span class="token parameter variable">--stdout</span> <span class="token operator">&gt;</span> mypatch.patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较两个分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看topic分支与master分支最新提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic master

<span class="token comment"># 与上一条命令相同</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic<span class="token punctuation">..</span>master

<span class="token comment"># 查看自从topic分支建立以后，master分支发生的变化</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic<span class="token punctuation">..</span>.master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(o,p){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","git-diff.html.vue"]]);export{r as default};
