function parseRhythms(input) {
	var rhythmQueue = [];
	for (i in input) {
		for (j in input[i]) {
			console.log("Word: " + input[i][j]);
			console.log(input[i][j].length);
			if (input[i][j].length < 4) {
				for (k in input[i][j]) {
					rhythmQueue.push((4 * input[i][j].length).toString() + "n");
				}
			}
			else {
				for (k in 6) {
					rhythmQueue.push("16n");
				}
			}

			// switch (input[i][j].length) {
			// 	case 1:
			// 		console.log("1 syllable rhythm");
			// 		rhythmQueue.push("4n");
			// 		break;
			// 	case 2:
			// 		console.log("2 syllable rhythm");
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("8n");
			// 		}
			// 		break;
			// 	case 3:
			// 		console.log("3 syllable rhythm");
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("12n");
			// 		}
			// 		break;
			// 	case 4:
			// 		console.log("4 syllable rhythm");
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("16n");
			// 		}
			// 		break;
			// 	case 5:
			// 		console.log("5 syllable rhythm");
			// 		for (k in input[i][j].length) {
			// 			rhythmQueue.push("20n");
			// 		}
			// 		break;
			// 	case 6:
			// 		console.log("6 syllable rhythm");
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
