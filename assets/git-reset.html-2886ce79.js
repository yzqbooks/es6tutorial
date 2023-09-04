import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-bede4f5a.js";const i={},t=a(`<h1 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h1><p><code>git reset</code>命令用于将当前分支指向另一个位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将当期分支的指针倒退三个 commit，</span>
<span class="token comment"># 并且会改变暂存区</span>
$ <span class="token function">git</span> reset HEAD~3

<span class="token comment"># 倒退指针的同时，不改变暂存区</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD~3

<span class="token comment"># 倒退指针的同时，改变工作区</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不指定回滚的位置，那么等同于撤销修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 撤销上一次向暂存区添加的所有文件</span>
$ <span class="token function">git</span> reset

<span class="token comment"># 无任何效果</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span>

<span class="token comment"># 同时撤销暂存区和工作区的修改，</span>
<span class="token comment"># 回复到上一次提交的状态</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 撤销上一次向暂存区添加的某个指定文件，</span>
<span class="token comment"># 不影响工作区中的该文件</span>
$ <span class="token function">git</span> reset -- <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li>soft: 不改变工作区和缓存区，只移动 HEAD 到指定 commit。</li><li>mixed: 只改变缓存区，不改变工作区。这是默认参数，通常用于撤销<code>git add</code>。</li><li>hard：改变工作区和暂存区到指定 commit。该参数等同于重置，可能会引起数据损失。<code>git reset --hard</code>等同于<code>git reset --hard HEAD</code>。</li><li><code>-p</code>表示键入交互模式，指定暂存区的哪些部分需要撤销。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Undo add</span>
$ <span class="token function">git</span> reset

<span class="token comment"># Undo a commit，不重置工作区和缓存区</span>
<span class="token comment"># 回到 HEAD 之前的那个 commit</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># Undo a commit，重置工作区和缓存区</span>
<span class="token comment"># 连续撤销三个 commit：HEAD, HEAD^, and HEAD~2</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~3

<span class="token comment"># 从暂存区移除指定文件，但不改变工作区中的该文件</span>
$ <span class="token function">git</span> reset -- frotz.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function c(d,r){return s(),e("div",null,l)}const p=n(i,[["render",c],["__file","git-reset.html.vue"]]);export{p as default};
