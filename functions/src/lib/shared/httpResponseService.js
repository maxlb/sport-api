const manageSuccessResponse = (res, r) => {
	res.status(200).json({ success: true, data: r })
}

const manageFailureResponse = (res, r) => {
	res.status(404).json({ success: false, data: { name: r.name, message: r.message } })
}

module.exports = { manageFailureResponse, manageSuccessResponse }