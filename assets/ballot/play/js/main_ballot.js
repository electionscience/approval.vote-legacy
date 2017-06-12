window.ONLY_ONCE = false;
function main(ballotType){

	// ONCE.
	if(ONLY_ONCE) return;
	ONLY_ONCE=true;

	var VoterType = window[ballotType+"Voter"];
	var BallotType = window[ballotType+"Ballot"];

	Loader.onload = function(){

		// SELF CONTAINED MODEL
		window.model = new Model({ size:250, border:2 });
		document.body.appendChild(model.dom);
		model.onInit = function(){
			model.addVoters({
				dist: SingleVoter,
				type: VoterType,
				x:81, y:92
			});
			model.addCandidate("square", 41, 50);
			model.addCandidate("triangle", 153, 95);
			model.addCandidate("hexagon", 216, 216);
		};

		// CREATE A BALLOT
		window.ballot = new BallotType();
		document.body.appendChild(ballot.dom);
		model.onUpdate = function(){
			ballot.update(model.voters[0].ballot);
		};

		// Init!
		model.init();

	};

	Loader.load([
		
		// the peeps
		"/assets/ballot/play/img/voter_face.png",
		"/assets/ballot/play/img/square.png",
		"/assets/ballot/play/img/triangle.png",
		"/assets/ballot/play/img/hexagon.png",
		
		// Ballot instructions
		"/assets/ballot/play/img/ballot_fptp.png",
		"/assets/ballot/play/img/ballot_ranked.png",
		"/assets/ballot/play/img/ballot_approval.png",
		"/assets/ballot/play/img/ballot_range.png",

		// The boxes
		"/assets/ballot/play/img/ballot_box.png",
		"/assets/ballot/play/img/ballot_rate.png"

	]);

}