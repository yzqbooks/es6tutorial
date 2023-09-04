import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const t={},o=e(`<h1 id="git-show" tabindex="-1"><a class="header-anchor" href="#git-show" aria-hidden="true">#</a> git show</h1><p><code>git show</code>命令用于查看commit的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出某次提交的元数据和内容变化</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

$ <span class="token function">git</span> show 12a86bc38 <span class="token comment"># By revision</span>
$ <span class="token function">git</span> show v1.0.1 <span class="token comment"># By tag</span>
$ <span class="token function">git</span> show feature132 <span class="token comment"># By branch name</span>
$ <span class="token function">git</span> show 12a86bc38^ <span class="token comment"># Parent of a commit</span>
$ <span class="token function">git</span> show 12a86bc38~2 <span class="token comment"># Grandparent of a commit</span>
$ <span class="token function">git</span> show feature132@<span class="token punctuation">{</span>yesterday<span class="token punctuation">}</span> <span class="token comment"># Time relative</span>
$ <span class="token function">git</span> show feature132@<span class="token punctuation">{</span><span class="token number">2</span>.hours.ago<span class="token punctuation">}</span> <span class="token comment"># Time relative</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function i(l,p){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","git-show.html.vue"]]);export{d as default};
