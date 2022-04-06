$prefix = 'https://github.com/wangdoc/'
$suffix = '.git'
$cur = $PWD
$gitRepos = 'bash-tutorial', 'git-tutorial', 'node-tutorial', 'clang-tutorial', 'css-tutorial', 'es6-tutorial', 'ssh-tutorial', 'html-tutorial', 'webapi-tutorial'
# 这里填你的docs文件夹
$dest = '.\docs\'
# 系统临时文件路径
$tmpPath = $env:tmp + '\wang\'
Write-Host  '设置临时文件路径'$tmpPath -ForegroundColor Cyan
if (-not (Test-Path $tmpPath)) {
    mkdir $tmpPath
}
Set-Location $tmpPath
# 克隆所有文件
function cloneAll {
    foreach ($item in $gitRepos) {
        git clone $prefix$item$suffix
        Set-Location $item
        Copy-Item -Recurse -Force docs $dest$item
    } 
    
}
function cloneOnlyDocs {
    foreach ($item in $gitRepos) {
        if (-not (Test-Path  $item)) {
            mkdir $item 
        }
        
         
        Set-Location $item
        if (Test-Path ".git" ) {
            switch ($item) {
                'ssh-tutorial' {  
                    git pull origin main
                } 
                'clang-tutorial' {  
                    git pull origin main
                }
                Default {
                    git pull origin master
                }
            }
              
            # 注意下面的\文件夹分割
            Copy-Item -Recurse -Force docs $dest\$item
            Set-Location ../
        }
        else {
            git init
            git remote add origin $prefix$item$suffix
            # 设置允许克隆子目录
            git config core.sparsecheckout true 
            Write-Host  '设置要克隆的仓库的子目录路径' -ForegroundColor Cyan
            Write-Output 'docs' >> '.git/info/sparse-checkout'  
            switch ($item) {
                'ssh-tutorial' {  
                    git pull origin main
                } 
                'clang-tutorial' {  
                    git pull origin main
                }
                Default {
                    git pull origin master
                }
            }
            # 注意下面的\文件夹分割 -Force 覆盖文件
            Copy-Item  -Recurse -Force docs $dest$item
            Set-Location ../
        }
    } 
    
}

function delTmpPath {
    Remove-Item -Recurse -Force $tmpPath
    
}
cloneOnlyDocs
Set-Location $cur