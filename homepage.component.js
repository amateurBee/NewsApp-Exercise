
import React from 'react';
import Directory from '../../components/directory/directory.component'
import BlogPage from '../../components/card.component';
//functional component named "HomePage"
const HomePage = () => {

    return(
        <div className="homepage-component">
            <div>
                
            </div>
            <Directory/>
            <BlogPage/>

        </div>
    )

}
//this component must be made importable
export default HomePage;