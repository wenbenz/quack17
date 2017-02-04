/**
 * Module determining the note being played
 */

/**
 * Returns an array of notes to correspond to word 
 * requires: word is an array
 */
function getNote(word){
	var excDestress = ["a","is","the"];
	var excStress = ["not"]
	var stress = 1;
	var note = 2; // C4
	var notes = [];
	for(syl in word){
		// determines whether or not to override iambic tetrameter
		//	syllable stress pattern.
		for(exc in excStress){
			if(syl.toLowerCase()===excStress)
				stress=1;
		}
		for(exc in excDestress){
			if(syl.toLowerCase()===excDestress)
				stress=-1;
		}

		$.get('/rand/'+syl,function(random){
			var delta = random.val;
			console.log(delta);
			note = displace(note, stress, delta);
			notes.push(note);
		});
		
		
	}
	console.log(notes);
	return notes;
}

/* Returns a displaced note */
function displace(note,stress,delta){
	return stress * delta + note;
}