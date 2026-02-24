import Filter from "./Filter";


const AllCatagories =() => {
    return(
        <div>
            <h1>What kind of food do you like? </h1>
            {['SEAFOOD','APPETIZERS', 'ITALIAN','SALADS','ALL']
            .map(category =>  <Filter category={category}/>)
    }
        </div>
    
    )
}

export default AllCatagories;
