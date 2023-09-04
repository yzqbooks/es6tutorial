import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c,a as s,b as n,d as o,e as l}from"./app-bede4f5a.js";const p={},d=l(`<h1 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h1><p><code>git stash</code>命令用于暂时保存没有提交的工作。运行该命令后，所有没有commit的代码，都会暂时从工作区移除，回到上次commit时的状态。</p><p>它处于<code>git reset --hard</code>（完全放弃还修改了一半的代码）与<code>git commit</code>（提交代码）命令之间，很类似于“暂停”按钮。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂时保存没有提交的工作</span>
$ <span class="token function">git</span> stash
Saved working directory and index state WIP on workbranch: 56cd5d4 Revert <span class="token string">&quot;update old files&quot;</span>
HEAD is now at 56cd5d4 Revert <span class="token string">&quot;update old files&quot;</span>

<span class="token comment"># 列出所有暂时保存的工作</span>
$ <span class="token function">git</span> stash list
stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: WIP on workbranch: 56cd5d4 Revert <span class="token string">&quot;update old files&quot;</span>
stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: WIP on project1: 1dd87ea commit <span class="token string">&quot;fix typos and grammar&quot;</span>

<span class="token comment"># 恢复某个暂时保存的工作</span>
$ <span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>

<span class="token comment"># 恢复最近一次stash的文件</span>
$ <span class="token function">git</span> stash pop

<span class="token comment"># 丢弃最近一次stash的文件</span>
$ <span class="token function">git</span> stash drop

<span class="token comment"># 删除所有的stash</span>
$ <span class="token function">git</span> stash <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令会将所有已提交到暂存区，以及没有提交的修改，都进行内部保存，没有将工作区恢复到上一次commit的状态。</p><p>使用下面的命令，取回内部保存的变化，它会与当前工作区的代码合并。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时，如果与当前工作区的代码有冲突，需要手动调整。</p><p><code>git stash</code>命令可以运行多次，保存多个未提交的修改。这些修改以“先进后出”的stack结构保存。</p><p><code>git stash list</code>命令查看内部保存的多次修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash list
stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: WIP on new-feature: 5cedccc Try something crazy
stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: WIP on new-feature: 9f44b34 Take a different direction
stash@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: WIP on new-feature: 5acd291 Begin new feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令假设曾经运行过<code>git stash</code>命令三次。</p><p><code>git stash pop</code>命令总是取出最近一次的修改，但是可以用<code>git stash apply</code>指定取出某一次的修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令不会自动删除取出的修改，需要手动删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git stash 子命令一览。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 展示目前存在的stash</span>
$ <span class="token function">git</span> stash show <span class="token parameter variable">-p</span>

<span class="token comment"># 切换回stash</span>
$ <span class="token function">git</span> stash pop

<span class="token comment"># 清除stash</span>
$ <span class="token function">git</span> stash <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接</p>`,19),r={href:"http://code.tutsplus.com/tutorials/quick-tip-leveraging-the-power-of-git-stash--cms-22988",target:"_blank",rel:"noopener noreferrer"};function u(m,v){const a=t("ExternalLinkIcon");return i(),c("div",null,[d,s("ul",null,[s("li",null,[n("Ryan Hodson, "),s("a",r,[n("Quick Tip: Leveraging the Power of Git Stash"),o(a)])])])])}const g=e(p,[["render",u],["__file","git-stash.html.vue"]]);export{g as default};
