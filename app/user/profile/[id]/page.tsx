const userProfile=({params})=>{

    console.log(params)
    return (
        <div>
            <h2>User Profile : {params.id}</h2>
        </div>
    )
}

export default userProfile;