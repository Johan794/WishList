import db from '../../util/database'

export default function handler(req,res){
    db.push({
        name: "example item",
        description: "example description"
    })

    res.redirect("http://localhost:3000/api/wishes")
}