function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector( '#nested .target' )
}
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll( '.ranked-list' )
      const firstList = rankedLists[ 0 ]
      const secondList = rankedLists[ 1 ]

      let children = firstList.children
      for ( let i = 0, l = children.length; i < l; i++) {
            children[ i ].innerHTML = parseInt;
      }

      children = secondList.children
      start = 12

      for ( let i = 0, l = children.length; i < l; i++ ) {
        expect( parseInt( children[ i ].innerHTML ) ).to.equal( start - i + 3 )
      }
    } )
}