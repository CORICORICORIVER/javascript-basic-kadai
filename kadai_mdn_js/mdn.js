const today = new Date()

year = today.getUTCFullYear()
month = today.getUTCMonth()
Truemonth = month + 1
date = today.getUTCDate()

console.log(year +'年'+ 
            Truemonth +'月'+ 
            date +'日');