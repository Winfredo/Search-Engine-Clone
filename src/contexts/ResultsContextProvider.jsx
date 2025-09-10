import React,{createContext, useState, useContext} from 'react'

const ResultsContext = createContext()
const baseUrl = 'https://google.serper.dev/'
const ResultsContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
     const [searchTerm, setSearchTerm] = useState('')

     const getResults = async () => {
        setIsLoading(true)
        try{
            const res = await fetch(`${baseUrl}search?q=${searchTerm}`)
        const data = await res.json()
        console.log(data)
        setResults(data)
        setIsLoading(false)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)

        }
     }
  return (
    <ResultsContext.Provider value={{results, getResults, isLoading, setSearchTerm, searchTerm}}>
      {children}
    </ResultsContext.Provider>
  )
}

export default ResultsContextProvider

export const useResults = () => useContext(ResultsContext)