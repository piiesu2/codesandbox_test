import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.appendChild(div);
  div.innerText = inputText;

  // ボタンの追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //ボタンの親要素のliを削除する
    const deleteTarget = deleteButton.parentNode.parentNode;
    console.debug(deleteTarget);
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);
  // console.debug(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
