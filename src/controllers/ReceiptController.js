const User = require('../models/User')
const Receipt = require('../models/Receipt')

module.exports = {
  async createReceipt(req, res){
    const { user_id } = req.params
    const { sale_info, card_info, booking_info } = req.body

    try {
      const user = await User.findByPk(user_id)
      if(!user)
        return res.status(409).json({ message : "Usuário não existe"})
      
      const receipt = await Receipt.create({ 
        user_id, 
        sale_info,
        card_info, 
        booking_info 
      })
      return res.json({ Receipt })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message : "Ocorreu um erro tente novamente"})
    }
  },
  async getUserReceipts(req, res){
    const { user_id } = req.params

    try {
      const user = await User.findByPk(
        user_id,
        {
          include: {
            association : "receipts"
          }
        }
      )
      
      if(!user)
        return res.status(409).json({ message : "Usuário não existe"})
    
      const { receipts } = user
      if(!receipts)
        return res.status(409).json({ message : "Usuário não possui comprovantes"})
  
      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message : "Ocorreu um erro tente novamente"})
    }
  }
}