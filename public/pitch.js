/**
 * Module determining the note being played
 */

var c4PentScale = [];	// G3 through G4; total 6 notes



/**
 * Returns an array of notes to correspond to word 
 * requires: word is an array
 */
function getNote(word){
	var excDestress = ["a","is","the"];
	var excStress = ["i","not"]
	var stress = false;
	var note = 2; // C4
	var notes = [];
	for(syl in word){
		// determines whether or not to override iambic tetrameter
		//	syllable stress pattern.
		for(exc in excStress){
			if(syl.toLowerCase()===excStress)
				stress=true;
		}
		for(exc in excDestress){
			if(syl.toLowerCase()===excDestress)
				stress=false;
		}

		// choose note
		if(stress===true){
			// note >= note;
		} else {
			// note <= note;
		}
	}
}