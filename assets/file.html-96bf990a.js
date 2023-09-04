import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as a}from"./app-bede4f5a.js";const i={},t=a(`<h1 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h1><p><code>file</code>命令用来查看某个文件的类型。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">file</span> index.html
 index.html: HTML document, ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>file 工具可以对所给的文件输出一行简短的介绍，它用文件后缀、头部信息和一些其他的线索来判断文件。你在检查一堆你不熟悉的文件时使用 find 非常方便：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token parameter variable">-exec</span> <span class="token function">file</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
.:            directory
./hanoi:      Perl script, ASCII text executable
./.hanoi.swp: Vim swap file, version <span class="token number">7.3</span>
./factorial:  Perl script, ASCII text executable
./bits.c:     C source, ASCII text
./bits:       ELF <span class="token number">32</span>-bit LSB executable, Intel <span class="token number">80386</span>, version <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function c(d,r){return n(),s("div",null,l)}const u=e(i,[["render",c],["__file","file.html.vue"]]);export{u as default};
