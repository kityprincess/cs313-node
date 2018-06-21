const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function determineRate(req, res) {
	// console.log(req.query)
	var weight = Number(req.query.weight)
	var rate = 0
	switch (req.query.mailType)
	{
		case 'ltrstmp':
			if (weight > 0 && weight <= 1) {
				rate = '0.50'
			} else if (weight > 1 && weight <= 2) {
				rate = '0.71'
			} else if (weight > 2 && weight <= 3) {
				rate = '0.92'
			} else if (weight > 3 && <= 3.5) {
				rate = '1.13'
			}
			break
		case 'ltrmtrd':
			if (weight > 0 && weight <= 1) {
				rate = '0.47'
			} else if (weight > 1 && weight <= 2) {
				rate = '0.68'
			} else if (weight > 2 && weight <= 3) {
				rate = ' 0.89'
			} else if (weight > 3 && <= 3.5) {
				rate = '1.10'
			}
			break
		case 'lrgenv':
			if (weight > 0 && weight <= 1) {
				rate = '1.00'
			} else if (weight > 1 && weight <= 2) {
				rate = '1.21'
			} else if (weight > 2 && weight <= 3) {
				rate = '1.42'
			} else if (weight > 3 && <= 4) {
				rate = '1.63'
			} else if (weight > 4 && <= 5) {
				rate = '1.84'
			} else if (weight > 5 && <= 6) {
				rate = '2.05'
			} else if (weight > 6 && <= 7) {
				rate = '2.26'
			} else if (weight > 7 && <= 8) {
				rate = '2.47'
			} else if (weight > 8 && <= 9) {
				rate = '2.68'
			} else if (weight > 9 && <= 10) {
				rate = '2.89'
			} else if (weight > 10 && <= 11) {
				rate = '3.10'
			} else if (weight > 11 && <= 12) {
				rate = '3.31'
			} else if (weight > 12 && <= 13) {
				rate = '3.52'
			} 
			break
		case 'pkg':
			if (weight > 0 && weight <= 1) {
				rate = '3.50'
			} else if (weight > 1 && weight <= 2) {
				rate = '3.50'
			} else if (weight > 2 && weight <= 3) {
				rate = '3.50'
			} else if (weight > 3 && <= 4) {
				rate = '3.50'
			} else if (weight > 4 && <= 5) {
				rate = '3.75'
			} else if (weight > 5 && <= 6) {
				rate = '3.75'
			} else if (weight > 6 && <= 7) {
				rate = '3.75'
			} else if (weight > 7 && <= 8) {
				rate = '3.75'
			} else if (weight > 8 && <= 9) {
				rate = '4.10'
			} else if (weight > 9 && <= 10) {
				rate = '4.45'
			} else if (weight > 10 && <= 11) {
				rate = '4.80'
			} else if (weight > 11 && <= 12) {
				rate = '5.15'
			} else if (weight > 12 && <= 13) {
				rate = '5.50'
			} 
			break
	}
	// console.log('rate is ', rate)
	return rate
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/rates', function(req, res) {
  		res.render('pages/rates', {
  			weight: req.query.weight,
  			mailType: req.query.mailType,
  			rate: determineRate(req, res)
  		})
  	})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
