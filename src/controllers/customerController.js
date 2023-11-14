const controller = {}

controller.list = (req,res)=>{
   req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM customer', (err,customers)=>{
        if(err){
            res.json(err);
        }
        console.log(customers);
        res.render('customers',{
            data: customers
        });
    });
   });
}

controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?', [data], (err,customers)=>{
            console.log(customers);
            res.send(customers);
        })

    })
    
}

module.exports = controller;