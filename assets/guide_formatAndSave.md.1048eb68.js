import{_ as t,c as o,b as a,d as c,o as d,r}from"./app.3d082ecc.js";const g=JSON.parse('{"title":"一键格式化与保存(不推荐使用)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/formatAndSave.md","lastUpdated":1675822225000}'),i={name:"guide/formatAndSave.md"},s=c('<h1 id="一键格式化与保存-不推荐使用" tabindex="-1">一键格式化与保存(不推荐使用) <a class="header-anchor" href="#一键格式化与保存-不推荐使用" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>新版 HBuilderX 现支持保存时自动格式化，可以在工具&gt;设置&gt;编辑器设置&gt;勾选保存时自动格式化</p><p>但这个配置是先保存后格式化，文件未发生更改的情况下，ctrl+s 不会触发格式化</p></div><ol><li>本插件提供一个<code>重排代码格式并保存</code>命令，先格式化再保存，快捷键<code>ctrl+s</code>，本质上就是先后调用格式化命令和保存命令</li><li>目前该命令已不推荐使用，但保留，以便不影响一些仍在使用的用户</li><li>不推荐的原因在于相较于HBhuilderX的保存后格式化，插件直接调用格式化命令会卡顿一些</li><li>该快捷键会与默认的<code>保存</code>快捷键重复，这时会出现选择菜单，设置<code>以后只选一个</code>为HBuilderX默认的<code>保存</code>命令即可</li></ol>',3);function l(n,_,p,m,u,f){const e=r("git-talk");return d(),o("div",null,[s,a(e)])}const v=t(i,[["render",l]]);export{g as __pageData,v as default};
