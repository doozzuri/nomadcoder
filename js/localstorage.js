const storage ={
    setItem : (key, value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value))
        }catch{
            aler("데이터 추가에 실패했습니다.")
        }
    },
    getItem : (key, defaultValue) => {
        try{
            const item = localStorage.getItem(key)
            return item? JSON.parse(item) : defaultValue
        }catch{
            return defaultValue
        }
    }
}
