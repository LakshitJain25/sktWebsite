const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({ extended: true }));


const fs = require('fs-extra')
let productPage ={}
const readJsonFile = async () => {
productPage = await fs.readJson('./product-page.json')
}
readJsonFile()



app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/support', (req, res) => {
    res.render('support/support.ejs')
})


app.get('/aboutus', (req, res) => {
    res.render('about-us/about-us.ejs')
})


app.get('/:id', (req, res) => {
   
    Object.values(productPage).forEach(function (productPageData) {
        //console.log(productPageData.productName)
        if (productPageData.productName == req.params.id) {
           // console.log("TRUE")
            //console.log(productPageData.Reviews.forEach(review => {console.log(review)}))
            res.render('product-page/product-page.ejs',productPageData)
        }
    })
    res.status(404).send("NOT FOUND")
})

async function saveProductPage()
{
    const writePath =  path.join(__dirname, 'product-page.json')
    await fs.writeFile(writePath, JSON.stringify(productPage,null,2))
}



app.post('/:id/reviews',(req,res)=>{
    // console.log(req.params.id==Object.keys(productPage))
    // console.log(req.body)
    const campground = Object.keys(productPage).find(function(key){if(req.params.id == key)return key});
    if(campground){productPage[campground]["Reviews"].push(req.body)
    saveProductPage()}
    else{res.send("NOT FOUND",404)}
    res.redirect(`/${req.params.id}`)
})





app.get('/', (req, res) => {
    res.render('home/home.ejs')
})

app.listen(3000, () => {
    //console.log("APP IS LISTENING ON PORT 3000")
})