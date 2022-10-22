# Learn Git
# Git 作者

Git 作者Linux Torvalds，只花了十天就寫出來了

# Git設定檔的位置

一般來說都是放在自己的帳號的預設目錄下的 .gitconfig 檔案裡面

可以在windows console mode下輸入以下指令切換到使用者預設目錄

```
cd ~
```

# git 工作區、暫存區與儲存庫

工作區 (W)orking Directory
暫存區 (S)taging Area
儲存庫 (R)epository

W -git add-> S -git commit-> R



# git add指令

把修改過的檔案放進stage 變成tracked的檔案，例如index.html，利用 $echo hello,git > index.html產生後，可以利用git add index.html變成tracked的檔案，狀態會在stage暫存區，如果要把目錄下的檔案全部批次放進去，可以用git add --all,也可以用"git add ."(後面有一個小數點dot)，但是兩者有一些差異，除了git的版本差異外，還有就是git add --all可以把所有目錄中有修改過的檔案都加進去，包含刪除的動作，但是如果是用git add .，只會把所在的目錄及子目錄，子子目錄...的檔案加進去。

```
$git add --all
$git add .
```

# git commit指令

如果只是把檔案放進暫存區其實是不夠的，要讓暫存區的檔案永久的保存下來，還要做commit，"git commit"

# Git儲存的位置

Local and Remote

Git儲存的位置可以區分為本地(Local)的儲存位置以及遠端(Remote)的儲存位置

安裝好git之後，如果是在windows環境，可以在console模式下，輸入git --version檢查目前版本，也可以利用這個指令去確認已經成功地安裝好git

```
C:\>git --version
git version 2.26.2.windows.1
```

//將目錄建立成為git資料夾

```
git init
```

//想要將檔案commit 進去repository

```
git commit -m "memo for this commit"
```

//如果要繼續修改某一個檔案

```
git add filename
```

//修改完之後，如果要再把剛剛改好的東西寫入respository，可以再利用git commit -m "memo here"

```
git commit -m "memo here"
```

//但是如果覺得太麻煩，就可以利用下面的指令，同時做到 add and  message

```
git commit -a -m "memo here"
```







