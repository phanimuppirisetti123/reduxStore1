import classes from './UserProfile.module.css';

const UserProfile=()=>{
    return (
        <section className={classes.user}> 
        <h1>User Details</h1>
        <div>
            <b>Name:</b><i>M.V.Phani krishna</i><br/><br/>
            <b>Qualification:</b><i>M.Tech</i><br/><br/>
            <b>JOB:</b><i>Reactjs developer</i>
        </div>
        </section>
       );   
        
};


export default UserProfile;