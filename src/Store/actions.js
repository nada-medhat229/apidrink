import axiosUrl from '../axiosUrl';
export function searchdrink({commit},keywords){
  axiosUrl.get(`/search.php?s=${keywords}`)
  .then(({data})=>{
    // debugger;
    commit('setsearchdrink',data.drinks)
  })
}
export function searchbyletter({commit},letter){
  axiosUrl.get(`/search.php?f=${letter}`)
  .then(({data})=>{
    // debugger;
    commit('setdrinkbyletter',data.drinks)
  })
}

export function searchbyIngredient({commit},ing){
  axiosUrl.get(`/filter.php?i=${ing}`)
  .then(({data})=>{
    // debugger;
    commit('setdrinkbyIngredient',data.drinks)
  })
}


