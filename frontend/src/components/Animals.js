import React, {useEffect} from 'react';
import AnimalList from './AnimalList';
import { useSelector, useDispatch } from 'react-redux';
// import {getAnimals} from '../Actions/index';
import {getAnimals} from '../Actions/index';

function Animals() {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  
  // function getList (){
  //   fetch(`http://localhost:5004/api/animals`)
  //   .then(response => response.json())
  //   .then(
  //     (jsonifiedResponse) => {
  //       console.log('response from api', jsonifiedResponse)
  //       dispatch(getAnimals(jsonifiedResponse))
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       // return {
  //       //   type: c.ERROR,
  //       //   error: error.message
  //       // }
  //     });
  // }

  useEffect(() => {
    dispatch(getAnimals());
    // getList();
  }, [])

  if (list.length > 0) {
    return (
      <div>
        <AnimalList list={list}/>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    )
  }
}

export default Animals;