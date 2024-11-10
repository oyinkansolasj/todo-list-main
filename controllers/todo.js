const empty_arr =["ebube", "some", "ifeany", "victor"]
function todo (req,res){
    const data = req.body.data
    empty_arr.push(data)
    return res.status(201).json({
        message:"Created Successfully",
        code:201,
        empty_arr
    })
}

function Delete(req, res) {
    const data = req.body.data;
    let removed = null;
    for (let i = 0; i < empty_arr.length; i++){ 
        if (empty_arr[i] === data) {
            removed = empty_arr.splice(i, 1)[0]
            break; 
        }
    }
    return res.status(200).json({
        message: `The data removed is ${removed}`, 
        code: 200, 
        empty_arr,
    })
}


function change_item(req, res){ 
    try{
        const { data, update } = req.body
        empty_arr.forEach((value, index) => {
            if (value == data) {
                empty_arr.splice(index, 1, update)
            } else {
                throw new Error("No element found")
            }
        });
        return res.status(200).json({
            message: "item updated successfully",
            code: 200, 
            empty_arr,
        })
    }catch (error){
        console.error(error)
        return res.status(500).json({
            message:"Something went wrong", 
        })
    }
}

function read_arr(req, res) {
    try{
        return res.status(200).json({
            message: "array retrieved successfully", 
            code: 200, 
            empty_arr,
        })
    } catch (error){
        console.error(error)
        return res.status().json({})
    }
}



module.exports = {
    todo, 
    Delete, 
    change_item, 
    read_arr,
}