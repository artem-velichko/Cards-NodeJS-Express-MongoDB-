function setCorrectAgeAndDate(cards) {
    const date = new Date()
    const yyyy = date.getFullYear()
    let mm = date.getMonth()
    let dd = date.getDate()
    
    for (let key of cards) {
        const year = key.date.getFullYear()
        let month = key.date.getMonth()
        let date = key.date.getDate()
        
        if (mm > month) {
            key.age = yyyy - year
        } else if (mm === month) {
            key.age = dd < date ? yyyy - year - 1 : yyyy - year
        } else {
            key.age = yyyy - year -1 
        }
        
        month = month + 1
        
        if (date < 10) {
            date = '0' + date
        }
        
        if (month < 10) {
            month = '0' + month
        }
        
        key.full_date = `${date}.${month}.${year}`
    }
    return cards
}

module.exports = setCorrectAgeAndDate