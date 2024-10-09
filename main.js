// 変数定義
var input = "";
var area1;
var area2;
let array = [];
var resultCode = "";
var message;

//入力クリア
function areaClear(){
    var area1 = document.getElementById('area1');
    area1.value="";
};

//convert押下時
function convert(){
    //初期化
    input = "";
    array = [];
    resultCode = "";
    // 変数定義
    area1 = document.getElementById('area1');
    area2 = document.getElementById('area2');
    input = document.getElementById('area1').value;
    message = document.getElementById('message');
    //処理中
    message.hidden=false;
    //各処理の実行
    inputArray();
    conLabel();
    conTextbox();
    conCommand();
    // conSearch();
    //処理終了
    message.hidden=true;

    //結果コード
    for(let i = 0; i < array.length; i++){
        resultCode += array[i];
    };
    area1.value=resultCode;
};

//入力を配列に格納
function inputArray(){
    for(let i = 0; i < input.length; i++){
        array[i]=input[i];
    };
};



//ラベル変換 --ok
function conLabel(){
    var sIndex = 0;//→<label>
    var startTag;//<
    var closeKakko;//>
    var closeTag;//<
    var endTag;//</label>←
    var text = "";
    var classIn;
    for(let i = 0; i < 1000; i++){
        //初期化
        text = "";
        if(input.indexOf("<label",sIndex) != -1){
            //タグの開始位置を記録
            startTag = input.indexOf("<label",sIndex);
            //開始位置を更新
            sIndex = input.indexOf("<label",sIndex);
            //>～/label間の文字列をtextに代入
            closeKakko = input.indexOf(">",sIndex);
            closeTag = input.indexOf("</label",closeKakko);
            for(let i = (closeKakko+1); i <= closeTag-1; i++){
                text += input[i]
            };
            //<～>間でclassを探す
            for(let i3 = startTag; i3 < closeKakko; i3++){
                if(input[i3]=="c" && input[i3+1]=="l" && input[i3+2]=="a" && input[i3+3]=="s" && input[i3+4]=="s"){
                    //インデックスを記録
                    classIn = i3;
                    //あったら変換
                    //class変換
                    array[classIn]="styleClass";
                    array[classIn+1]="";//l
                    array[classIn+2]="";//a
                    array[classIn+3]="";//s
                    array[classIn+4]="";//s
                }
            }
            //タグの終了位置を記録
            endTag = closeTag + 6;
            //開始位置を更新
            sIndex = endTag;
            //<h:outputLabel value = text>をコードに追加　※全体のインデックスをずらさないようにする
            //labelと</label>に空文字を代入する
            array[startTag+1]="";//l
            array[startTag+2]="";//a
            array[startTag+3]="";//b
            array[startTag+4]="";//e
            array[startTag+5]="";//l
            //変換
            array[startTag]='<h:outputLabel value = "' + text + '"';
            array[closeKakko]="/>";// />
            //>○○<文字列と閉じタグを空文字
            for(let i = (closeKakko+1); i <= closeTag+7; i++){
                array[i]="";
            };
        }else{
            break;
        };
    };
};



// //テキストボックス変換--ok
function conTextbox(){
    // 変数定義
    var sIndex = 0;
    var inputIn;//→input
    var typeIn;//→type
    var equalIn;//=
    var textIn;//→"text"
    var endTag;
    var closeKakko;
    var classIn;
    for(let i = sIndex; i < 1000; i++){//最大1000個のボックス分ループ。なければbreakなので問題なし
        if(input.indexOf("<input",sIndex) != -1){
            inputIn = input.indexOf("<input",sIndex) + 1;
            //検索開始位置を更新
            sIndex = inputIn;
            closeKakko = input.indexOf(">",inputIn);
            //input以降からtypeを探す
            for(let i2 = 0; i2 < 1000; i2++){
                if(input.indexOf("type",inputIn) != -1){
                    //インデックスを記録
                    typeIn= input.indexOf("type",sIndex);
                    //type以降から=を探す
                    for(let i3 = 0; i3 < 1000; i3++){
                        if(input.indexOf("=",typeIn) != -1){
                            //インデックスを記録
                            equalIn = input.indexOf("=",typeIn);
                            //=以降で " を探す
                            for(let i4 = 0; i4 < 1000; i4++){
                                if(input.indexOf('"',equalIn) != -1){
                                    //インデックスを記録
                                    textIn = input.indexOf('"',equalIn);
                                    //=以降で>を探す
                                    for(let i5 = 0; i5 < 1000; i5++){
                                        if(input.indexOf('>',equalIn) != -1){
                                            //インデックスを記録
                                            endTag = input.indexOf('>',equalIn);
                                        }
                                    }
                                    // " の後ろがtextかどうかを判別
                                    if(array[textIn+1]=="t" && array[textIn+2]=="e" && array[textIn+3]=="x" && array[textIn+4]=="t"){
                                        // alert("ok");--ok
                                        //文字列変換実行
                                        array[inputIn]="h:inputText";
                                        array[inputIn+1]="";//n
                                        array[inputIn+2]="";//p
                                        array[inputIn+3]="";//u
                                        array[inputIn+4]="";//t
                                        array[typeIn]="";//t
                                        array[typeIn+1]="";//y
                                        array[typeIn+2]="";//p
                                        array[typeIn+3]="";//e
                                        array[equalIn]="";//=
                                        array[textIn]="";//"
                                        array[textIn+1]="";//t
                                        array[textIn+2]="";//e
                                        array[textIn+3]="";//x
                                        array[textIn+4]="";//t
                                        array[textIn+5]="";//"
                                        array[endTag]="/>";//>
                                        //<～>間でclassを探す
                                        for(let i10 = inputIn; i10 < closeKakko; i10++){
                                            if(input[i10]=="c" && input[i10+1]=="l" && input[i10+2]=="a" && input[i10+3]=="s" && input[i10+4]=="s"){
                                                //インデックスを記録
                                                classIn = i10;
                                                //あったら変換
                                                array[classIn]="styleClass";
                                                array[classIn+1]="";//l
                                                array[classIn+2]="";//a
                                                array[classIn+3]="";//s
                                                array[classIn+4]="";//s
                                            }
                                        }
                                        break;
                                    }else{
                                        break;
                                    }
                                }
                            }
                        }else{
                            break;
                        }
                    }
                }else{
                    break;
                }
            }
        }else{
            break;
        }
    };
};



//コマンドボタン --ok
function conCommand(){
        // 変数定義
        var sIndex = 0;
        var inputIn;//→input
        var typeIn;//→type
        var equalIn;//=
        var submitIn;//→"submit"
        var endTag;
        var closeKakko;
        var classIn;
        for(let i = sIndex; i < 1000; i++){//最大1000個のボックス分ループ。なければbreakなので問題なし
            if(input.indexOf("<input",sIndex) != -1){
                inputIn = input.indexOf("<input",sIndex) + 1;
                //検索開始位置を更新（ヒットした"＜"以降）
                sIndex = inputIn;
                closeKakko = input.indexOf(">",inputIn);
                //input以降からtypeを探す
                for(let i2 = 0; i2 < 1000; i2++){
                    if(input.indexOf("type",inputIn) != -1){
                        //インデックスを記録
                        typeIn= input.indexOf("type",sIndex);
                        //type以降から=を探す
                        for(let i3 = 0; i3 < 1000; i3++){
                            if(input.indexOf("=",typeIn) != -1){
                                //インデックスを記録
                                equalIn = input.indexOf("=",typeIn);
                                //=以降で " を探す
                                for(let i4 = 0; i4 < 1000; i4++){
                                    if(input.indexOf('"',equalIn) != -1){
                                        //インデックスを記録
                                        submitIn = input.indexOf('"',equalIn);
                                        //=以降で>を探す
                                        for(let i5 = 0; i5 < 1000; i5++){
                                            if(input.indexOf('>',equalIn) != -1){
                                                //インデックスを記録
                                                endTag = input.indexOf('>',equalIn);
                                            }
                                        }
                                        // " の後ろがsubmitかどうかを判別
                                        if(array[submitIn+1]=="s" && array[submitIn+2]=="u" && array[submitIn+3]=="b" && array[submitIn+4]=="m" && array[submitIn+5]=="i" && array[submitIn+6]=="t"){
                                            // alert("ok");--ok
                                            //文字列変換実行
                                            array[inputIn]=`h:commandButton action="#{}"`;
                                            array[inputIn+1]="";//n
                                            array[inputIn+2]="";//p
                                            array[inputIn+3]="";//u
                                            array[inputIn+4]="";//t
                                            array[typeIn]="";//t
                                            array[typeIn+1]="";//y
                                            array[typeIn+2]="";//p
                                            array[typeIn+3]="";//e
                                            array[equalIn]="";//=
                                            array[submitIn]="";//"
                                            array[submitIn+1]="";//s
                                            array[submitIn+2]="";//u
                                            array[submitIn+3]="";//b
                                            array[submitIn+4]="";//m
                                            array[submitIn+5]="";//i
                                            array[submitIn+6]="";//t
                                            array[submitIn+7]="";//""
                                            array[endTag]=`>`;//>
                                            //<～>間でclassを探す
                                            for(let i10 = inputIn; i10 < closeKakko; i10++){
                                                if(input[i10]=="c" && input[i10+1]=="l" && input[i10+2]=="a" && input[i10+3]=="s" && input[i10+4]=="s"){
                                                    //インデックスを記録
                                                    classIn = i10;
                                                    //あったら変換
                                                    array[classIn]="styleClass";
                                                    array[classIn+1]="";//l
                                                    array[classIn+2]="";//a
                                                    array[classIn+3]="";//s
                                                    array[classIn+4]="";//s
                                                }
                                            }
                                            break;
                                        }else{
                                            break;
                                        }
                                    }
                                }
                            }else{
                                break;
                            }
                        }
                    }else{
                        break;
                    }
                }
            }else{
                break;
            };
        };
};


// //🔍検索ボタン--ok(完全にok。あったら変換、あったら変換で確実)
// function conSearch(){
//     //変数定義
//     var sIndex = 0;//検索開始位置

//     var sKakkoBtn;// →<
//     var sClass;// →class =
//     var doubleClass; //class = " ←　"
//     var eKakkoBtn;// >←
//     var ikakkoS; // →<i
//     var endTag; // →</button>
//     for(let i = 0; i < 1000; i++){
//         //<button検索
//         if(input.indexOf("<button",sIndex) != -1){
//             sKakkoBtn = input.indexOf("<button",sIndex);
//             array[sKakkoBtn]=`<h:form>
//     <h:commandButton action="#{}" value = "&#xf002;"`;//<
//             array[sKakkoBtn+1]="";///b
//             array[sKakkoBtn+2]="";///u
//             array[sKakkoBtn+3]="";///t
//             array[sKakkoBtn+4]="";///t
//             array[sKakkoBtn+5]="";///o
//             array[sKakkoBtn+6]="";///n
//             sIndex=sKakkoBtn+1;
//             //class検索
//                 sClass = input.indexOf("class",sIndex);
//                 array[sClass]=`styleClass`;//c
//                 array[sClass+1]="";//l
//                 array[sClass+2]="";//a
//                 array[sClass+3]="";//s
//                 array[sClass+4]="";//s
//                 //"を検索
//                 doubleClass = input.indexOf('"',sClass);
//                 array[doubleClass]='"fas ';
//                 //>を検索
//                 eKakkoBtn = input.indexOf(">",doubleClass);
//                 array[eKakkoBtn]=`/>
// </h:form>`;
//                 //<iを検索
//                 ikakkoS = input.indexOf("<i",eKakkoBtn);
//                 //</button>を検索
//                 endTag = input.indexOf("</button>",ikakkoS);
//                 //iタグ以降消去
//                 for(let a = ikakkoS; a <= (endTag + 8); a++){
//                     array[a]="";
//                 }
//         }
//     }
// }

function conSearch(){
    //変数定義
    var sIndex = 0;//検索開始位置
    var sKakkoBtn;// →<
    var sClass;// →class =
    var doubleClass; //class = " ←　"
    var eKakkoBtn;// >←
    var ikakkoS; // →<i
    var endTag; // →</button>
    for(let i = 0; i < 1000; i++){
        //<button検索
        if(input.indexOf("<button",sIndex) != -1){
            sKakkoBtn = input.indexOf("<button",sIndex);
            array[sKakkoBtn]=`<h:commandButton action="#{}" value = "&#xf002;"`;//<

            // buttonタグ内のclassを処理
            sClass = input.indexOf("class", sKakkoBtn);
            if (sClass !== -1) {
                array[sClass] = `styleClass`; // classの変換
                array[sClass + 1] = ""; // 不要な文字を空にする
                array[sClass + 2] = "";
                array[sClass + 3] = "";
                array[sClass + 4] = "";
            }

            //"fas"クラスを追加
            doubleClass = input.indexOf('"', sClass);
            if (doubleClass !== -1) {
                array[doubleClass] = '"fas ';
            }

            // 閉じタグの処理
            eKakkoBtn = input.indexOf(">", doubleClass);
            if (eKakkoBtn !== -1) {
                array[eKakkoBtn] = ` />`;
            }

            // <i>タグ以降の処理をクリア
            ikakkoS = input.indexOf("<i", eKakkoBtn);
            endTag = input.indexOf("</button>", ikakkoS);
            if (ikakkoS !== -1 && endTag !== -1) {
                for(let a = ikakkoS; a <= endTag + 8; a++){
                    array[a] = ""; // iタグ部分をクリア
                }
            }

            // 検索開始位置を更新
            sIndex = endTag + 9;
        } else {
            break;
        }
    }
}























