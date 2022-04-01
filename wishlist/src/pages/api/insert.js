import db from '../../util/database'

export default async function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            console.log(req)
            db.push({
                name: body.name,
                description: body.description
            })

            res.send({
                response: "hello world"
            });
        }else{
            res.status(404)
        }
        

}