const controller = {}

controller.list = (req,res)=>{
   req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM customer', (err,rows)=>{
        if(err){
            console.error('Error al conectar a la base de datos: ' + err.message);
        }
        console.log(rows);
        res.render('customers',{
            data: rows
        });
    });
   });
}

module.exports = controller;