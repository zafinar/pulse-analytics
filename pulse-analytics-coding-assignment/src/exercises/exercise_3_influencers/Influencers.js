import React, { useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'
import sortByPriority from "../sortData"

import DataTables from "./DataTables"
import SearchBar from './SearchBar'

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
Hey guys, full disclosure, I missed the first email with the code challenge and didn't know about this until the followup email from Claire Today. I did the code challenge ASAP and didn't
take any time to prepare and review. Currently I don't use react hooks, I mostly rely on classic class based component builds but I attempted to continue the patterns set up and refrained from
rewriting the component. I ran out of time to style and refactor, but I recognize that some of the function locations, and overall structure of the code could use it. It's also why the third excercise is missing
any comments.
Best,
Arbi

*/

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by member values

  let filteredData = filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]) // use the filterBy util to filter our data by the given search term

  const sortedData = sortByPriority(filteredData)


  const sortCheck = (filteredData,sortedData) => {
   if(sort){
     return sortedData
   }
   else{
     return filteredData
   }
  }


  const renderedData = sortCheck(filteredData,sortedData)




  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={()=>{setSort(true)}}>Sort by Priority</button>
      <DataTables data={renderedData} />
    </Container>
  )
}

export default Influencers
