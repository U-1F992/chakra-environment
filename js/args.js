/*@cc_on
w=WScript;
st=w.CreateObject("ADODB.Stream");
fs=w.CreateObject("Scripting.FileSystemObject");
sh=w.CreateObject("WScript.Shell");
fn=w.ScriptFullName;

// 自身の文字コードをShift-JISに変換した一時ファイルを作成する
st.Charset="UTF-8";
st.Open();
st.LoadFromFile(fn);
t=st.ReadText();
st.Close();
fn=fs.GetFile(fn).ParentFolder.Path+"\\."+w.ScriptName;
if(fs.FileExists(fn))fs.DeleteFile(fn,true);
st=fs.CreateTextFile(fn);
f=fs.GetFile(fn);
f.Attributes=2;
st.Write(t);
st.Close();

// コマンドライン引数を引き継ぐ
arg=w.Arguments;
opt="";
for(i=0;i<arg.Count();i++){
    opt+=" \""+arg.Item(i)+"\"";
}
opt=opt.slice(1);

// キック
host=w.FullName;
cmd=host+" //Nologo //E:{1B7CD997-E5FF-4932-A7A6-2A9E636DA385} \""+fn+"\" "+opt;
if(fs.GetFileName(host).toLowerCase()=="wscript.exe"){
    ret=sh.Run(cmd,1,true);
}else{
    ex=sh.Exec(cmd);
    while(ex.Status==0){
        try{
            w.StdOut.Write(ex.StdOut.Read(1));
        }catch(e){}
    }
    ret=ex.ExitCode;
    w.StdOut.Write(ex.StdOut.ReadAll());
}
f.Delete(true);
w.Quit(ret);
@if(0)*/

// 本体ここから
const args = WScript.Arguments;
let msg = "";
for(let i = 0; i < args.Count(); i++){
    msg += `${args.Item(i)}\n`;
}
WScript.Echo(msg);

//@end