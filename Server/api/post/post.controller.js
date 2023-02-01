const {
  createPost,
  // getPostById,
  // getUsers,
} = require("./user.service");


module.exports = {
  createPost: (req, res) => {
    const body = req.body;
    createPost(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  
  // getPostById: (req, res) => {
  //   const id = req.params.id;
  //   getPostById(id, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (!results) {
  //       return res.json({
  //         success: 0,
  //         message: "Record not Found"
  //       });
  //     }
  //     results.password = undefined;
  //     return res.json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },
  // getPost: (req, res) => {
  //   getUsers((err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     return res.json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },
  
};
