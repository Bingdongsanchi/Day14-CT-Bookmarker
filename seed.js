const { db, Bookmarker, Category, } = require('./db/server');

const seedDB = async () => {
    
    
    await db.sync({
        force: true
    })

    const coding = await Category.create({
        name: "Coding"
    })

    const search = await Category.create({
        name: "Search"
    })

    const jobs = await Category.create({
        name: "Jobs"
    })

    await Bookmarker.create({
        name: "Google",
        url: "https://www.google.com/",
        categoryId: search.id
    })
    
    await Bookmarker.create({
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        categoryId: coding.id
    })

    await Bookmarker.create({
        name: "Bing",
        url: "https://www.bing.com/",
        categoryId: search.id
    })

    await Bookmarker.create({
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        categoryId: jobs.id
    })

    await Bookmarker.create({
        name: "Indeed",
        url: "https://www.indeed.com/",
        categoryId: jobs.id
    })

    await Bookmarker.create({
        name: "MDN",
        url: "https://developer.mozilla.org/en-US/",
        categoryId: coding.id
    })

    // console.log(
    //     (await Category.findAll()).map(Category => Category.name)
    // )
}


seedDB();

module.exports = { seedDB }