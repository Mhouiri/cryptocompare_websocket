const { getCurrencyDataService } = require ('../services/getCurrencDataService');

 const getCurrencyDataContoller = async (req, res) => {
  const result = await getCurrencyDataService(req.params.id)
  return res.status(result.status).json(result.data);
}

module.exports = {
  getCurrencyDataContoller
}