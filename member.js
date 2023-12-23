function skillsMember.js (req, res) {
  var skills = req.body.skills;
  var id = req.params.id;
  var member = new Member({ _id: id });
  member.skills = skills;
  member.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Member skills updated!' });
  });
} 