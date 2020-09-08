var dungeonInventoryBool = 0;
var rewardInventoryBool = 0;
var columnElement;
var textElement;

/* ==================================================
Loop function.
================================================== */
function loop() {
	// save current time
	frameTime = new Date().getTime();
	
	// update timers
	
	
	// save last frame time
	lastFrameTime = frameTime;
}

/* ==================================================
Helper functions for the WindowClick() functions.
================================================== */
function resetWindowBools() {
	dungeonInventoryBool = 0;
	rewardInventoryBool = 0;
}
function removeRightColumnClass() {
	columnElement.classList.remove("log");
	columnElement.classList.remove("dungeon-inventory");
	columnElement.classList.remove("reward-inventory");
}

/* ==================================================
Clicking on the Dungeon Window will open the Dungeon
Inventory on the Right Column div.
================================================== */
function dungeonWindowClick() {
	columnElement = document.getElementById("rightColumn");
	textElement = document.getElementById("logText");
	if (dungeonInventoryBool == 0) {
		resetWindowBools();
		dungeonInventoryBool = 1;
		removeRightColumnClass();
		columnElement.classList.add("dungeon-inventory");
		textElement.innerHTML = "Dungeon Inventory";
	}
	else {
		resetWindowBools();
		removeRightColumnClass();
		columnElement.classList.add("log");
		textElement.innerHTML = "Log Window";
	}
}

/* ==================================================
Clicking on the Reward Window will open the Reward
Inventory on the Right Column div.
================================================== */
function rewardWindowClick() {
	columnElement = document.getElementById("rightColumn");
	textElement = document.getElementById("logText");
	if (rewardInventoryBool == 0) {
		resetWindowBools();
		rewardInventoryBool = 1;
		removeRightColumnClass();
		columnElement.classList.add("reward-inventory");
		textElement.innerHTML = "Reward Inventory";
	}
	else {
		resetWindowBools();
		removeRightColumnClass();
		columnElement.classList.add("log");
		textElement.innerHTML = "Log Window";
	}
}