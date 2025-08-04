function addFriend() {
    const friendInput = document.getElementById("friendInput");
    const friendName = friendInput.value.trim();
    if (friendName) {
        const friendDiv = document.createElement("div");
        friendDiv.className = "friend";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = friendName;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.onclick = function() {
            friendDiv.remove();
        };

        friendDiv.appendChild(nameSpan);
        friendDiv.appendChild(removeBtn);

        document.getElementById("friendList").appendChild(friendDiv);
        friendInput.value = "";
    }
}