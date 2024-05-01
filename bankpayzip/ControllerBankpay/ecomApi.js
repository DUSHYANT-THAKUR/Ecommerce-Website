const mysqlcon = require("../config/db_connection")
module.exports.signup = async (req, res) => {
  try {
    let { email, password, confirm_password} = req.body;
    let details = {
      email,
      password,
      confirm_password,
    };
    let sqlInsert = "INSERT INTO tbl_login SET ?";
    let result = await mysqlcon(sqlInsert, [details]);
    return res.status(200).json({
      message : "Successfully Inserted",
    });
  } catch (err) {
    console.log(err);
    return res.status(201).json({
      error: err,
    });
  }
};
module.exports.login = async (req, res) => {
  try {

    let { email, password } = req.body;
    let sql = "SELECT *FROM tbl_login WHERE email = ? AND password=?";
    let result = await mysqlcon(sql, [email, password]);
    if (result.length > 0) {
      return res.status(200).json({
        message: "login successfully",
      });
    } else {
      return res.status(400).json({
        message: "email and password does not match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Internal Server Error",
    });
  }
};
module.exports.allCategories =  async (req,res) => {
    try {
      let sql = "SELECT *FROM categories"
      let result = await mysqlcon(sql);
      return res.status(200).json({
        result : result
      })
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          mess: "Internal Server Error",
        });
      }
}
module.exports.contact =  async (req,res) => {
  try {
    let {fname,lname,email,question} = req.body;
    let details = {
      fname,
      lname,
      email,
      question
    }
    let sql = "INSERT INTO tbl_contact SET ?"
    let result = await mysqlcon(sql,[details]);
    return res.status(200).json({
      result : "INSERT SUCCESSFULLY"
    })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mess: "Internal Server Error",
      });
    }
}
module.exports.product = async (req,res) => {
try {
let sql="SELECT *FROM product"
let result = await mysqlcon(sql)
return res.status(200).json(
  {
    result : result
  }
)
} catch (error) {
  console.log(error)
  return res.status(500).json(
    {
      error : error
    }
  )
} 
}
module.exports.cart = async (req, res) => {
  try {
    let { product_name, actual_price, quantity, total } = req.body;
    console.log(req.body)
    let details = {
      product_name,
      actual_price,
      quantity,
      total,
    };
    let sql = "INSERT INTO tbl_card SET ?";
    let result = await mysqlcon(sql, [details]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Internal Server Error",
      error:error
    });
  }
};
module.exports.deleteProductCart = async (req, res) => {
  try {
    let {id} = req.body;
    sql = "Delete From tbl_card WHERE id = ?"
    let result = await mysqlcon(sql,[id])
  } catch(error) {
    console.log(error);
    return res.status(500).json(
      {
        error : error,
        mess : "Internal server error"
      }
    )
  }
}