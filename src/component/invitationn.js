


// -------------------------------------------------------------------------------------------------

// This is the example props data that you have to pass it from App.js where this component is injected . And show this data here .  

const props={
    Subject : "Birthday party Invitation",
    email : "jaGdish@gmail.com",
    sender : "jaGdish",
    receiver : "jaGdish",
    event : "birthday party",
    friends : ["Ritu" , "Saurabh" , "Kartik"],
    place: "near Green field Avenue",
}


// --------------------------------------------------------------------------------------------------


const Invitation=()=>{
    return(
        <div>
    Subject : {props.Subject} <br/>
    To : {props.email}<br/><br/>
  
    Hi , {props.receiver} <br/><br/>
  
    I am having a {props.event} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are <br/>
    coming . you know some of them - {props.friends[0]+", "+props.friends[1]+", "+props.friends[2] }.<br/><br/>
  
    My house is behind our school , {props.place} .<br/><br/>
  
    I hope you will come and see you soon .<br/><br/>
  
    from ,<br/>
    {props.sender}<br/>

        </div>
    )
}
export default Invitation