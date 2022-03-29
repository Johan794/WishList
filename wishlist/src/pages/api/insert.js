import db from '../../util/database'

export default function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            db.push({
                name: body.name,
                description: body.description
            })

            res.send("ok");
        }else{
            res.status(404)
        }
        

}