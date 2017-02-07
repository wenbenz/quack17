function parseRhythms(input) {
	var rhythmQueue = [];
	var lastChar = "";
	var pauseChars = [".", "?", "!", ",", ":", ";", "-"];
	for (i in input) {
		for (j in input[i]) {
			if (input[i][j].length < 4) {
				for (k in input[i][j]) {
					rhythmQueue.push((4 * input[i][j].length).toString() + "n");
					lastChar = input[i][j][k].substring(input[i][j][k].length - 1);
					for (l in pauseChars) {
						if (lastChar === pauseChars[l]) {
							rhythmQueue.push("0n");
						}
					}
				}
			}
			else {
				for (k in 4) {
					rhythmQueue.push("16n");
				}
			}

			// switch (input[i][j].length) {
			// 	case 1:

			// 		rhythmQueue.push("4n");
			// 		break;
			// 	case 2:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("8n");
			// 		}
			// 		break;
			// 	case 3:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("12n");
			// 		}
			// 		break;
			// 	case 4:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("16n");
			// 		}
			// 		break;
			// 	case 5:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("20n");
			// 		}
			// 		break;
			// 	case 6:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("24n");
			// 		}
			// 		break;
			// 	default:
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("28n");
			// 		}
			// 		break;
			//}
		}
	}
	return rhythmQueue;
}
