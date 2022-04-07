import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addImcompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteTargetFromImcompleteList = (deleteTarget) => {
  // console.debug(deleteTarget);
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};

// 完了リストから指定の要素を削除
const deleteTargetFromCompleteList = (deleteTarget) => {
  // console.debug(deleteTarget);
  document.getElementById("complete-list").removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const addImcompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.appendChild(div);
  div.innerText = text;

  // ボタンの追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //ボタンの親要素のliを削除する
    deleteTargetFromImcompleteList(completeButton.parentNode.parentNode);
    // 完了リストに追加する要素
    const addTargetDiv = completeButton.parentNode;
    const text = addTargetDiv.firstChild.textContent;

    addTargetDiv.textContent = null;
    const addTarget = addTargetDiv.parentNode;
    console.debug(addTarget);

    addTargetDiv.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      deleteTargetFromCompleteList(returnButton.parentNode.parentNode);
      const returnDiv = returnButton.parentNode;
      const textTemp = returnDiv.firstChild.textContent;
      addImcompleteList(textTemp);
    });
    addTargetDiv.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //ボタンの親要素のliを削除する
    deleteTargetFromImcompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
