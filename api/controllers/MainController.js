module.exports = {
	index: function(req, res) {
		var words = ["Test", "Blue", "Remember"];

		var word;

		if(req.param("word")) {
			word = words[req.param("word")];
		}
		else {
			word = words[0];
		}

		return res.view('spelling', {word: word});
	}
}