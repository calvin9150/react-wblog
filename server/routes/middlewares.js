exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated) {
    next();
  } else {
    res.status(401).send("로그인 상태에서 접근할 수 없습니다.");
  }
};
