const pool = require("../../config/database");

module.exports = {
  createPost: (data, callBack) => {
    pool.query(
      `insert into post(post_title, post_description) 
                values(?,?)`,
      [
        data.post_title,
        data.post_description
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // getPostById: (id, callBack) => {
  //   pool.query(
  //     `select id,first_name,last_name,gender,email,number from registration where id = ?`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results[0]);
  //     }
  //   );
  // },
  // getPost: callBack => {
  //   pool.query(
  //     `select id,first_name,last_name,gender,email,number from registration`,
  //     [],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
  
};
