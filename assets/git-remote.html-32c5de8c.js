import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as s}from"./app-bede4f5a.js";const i={},t=s(`<h1 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h1><p>为远程仓库添加别名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> john git@github.com:johnsomeone/someproject.git

<span class="token comment"># 显示所有的远程主机</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 列出某个主机的详细信息</span>
$ <span class="token function">git</span> remote show name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git remote</code>命令的实质是在<code>.git/config</code>文件添加下面的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git remote add bravo ../bravo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[remote &quot;bravo&quot;]
    url = ../bravo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function d(r,c){return n(),a("div",null,o)}const v=e(i,[["render",d],["__file","git-remote.html.vue"]]);export{v as default};
