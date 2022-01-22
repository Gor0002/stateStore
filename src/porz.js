
function Comp(props){
  let name = props.name,
      age = props.age,
      gender = props.gender;
  // console.log(name.substring(0,1).toUpperCase() + name.substring(1,name.lenght));
  // console.log(name.split(""));
  // console.log(name.search("e"));
  // console.log(name.replaceAll("e","ne"));

    return(
      <div> 
        <h1>Barev dzez</h1>
        {name} is {age + 5} years old , and he is a {gender}.
      </div>
    ) 
  }

export default Comp;
