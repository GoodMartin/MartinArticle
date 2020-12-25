# Learn Git

Git儲存的位置

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







