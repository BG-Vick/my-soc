const FollowingController = {
  followUser: async (req, res) => {
    res.send('followUser');
  },
  unfollowUser: async (req, res) => {
    res.send('unfollowUser');
  },
};

module.exports = FollowingController;
