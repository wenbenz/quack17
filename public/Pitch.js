/**
 * Module determining the note being played
 */

var note = 2;
var stress = 1;

/* Returns a displaced note */
function displace(note,stress,delta){
	var dNote = stress * delta + note;
	if(dNote<0)
		dNote = 0;
	else if(dNote>4)
		dNote = 4;
	return dNote;
}

/**
 * Returns an array of notes to correspond to word 
 * requires: word is an array
 */
function getWordNotes(word){
	var excDestress = ["a","is","the"];
	var excStress = ["not"];
	var notes = [];
	for(syl in word){
		// oscilates stress/destress
		stress *=  -1;

		// determines whether or not to override iambic tetrameter
		//	syllable stress pattern.
		for(exc in excStress){
			if(word[syl]===excStress)
				stress=1;
		}
		for(exc in excDestress){
			if(word[syl]===excDestress)
				stress=-1;
		}

		var delta = word[syl].length % 4; // % n-1 is the max delta
		note = displace(note,stress,delta);
		notes.push(note);
	}
	return notes;
}

/**
 * Returns an array of notes from sentences
 *
function getSentenceNotes(sentence){
	var notes = [];
	for(i in sentence){
		notes=notes.concat(getWordNotes(sentence[i]));
	}
	return notes;
}*/

/**
 * Returns notes of a given input
 */
function getNotes(input){
	var notes = [];
	for(i in input){
		if(input[0][0].constructor !== Array)
			notes=notes.concat(getWordNotes(input[i]));
		else
			notes=notes.concat(getNotes(input[i]));
	}
	return notes;
}